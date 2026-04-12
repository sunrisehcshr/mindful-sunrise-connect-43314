"use client";

import React, { useEffect, useRef, FC } from "react";
import { Renderer, Program, Mesh, Triangle, Vec3, OGLRenderingContext } from "ogl";
import { cn } from "@/lib/utils";

export type OrbState = "idle" | "listening" | "thinking" | "speaking";

interface VoicePoweredOrbProps {
  className?: string;
  hue?: number;
  state?: OrbState;
  voiceSensitivity?: number;
  maxRotationSpeed?: number;
  maxHoverIntensity?: number;
  onVoiceDetected?: (detected: boolean) => void;
  aiAudioRef?: React.RefObject<HTMLAudioElement | null>;
}

export const VoicePoweredOrb: FC<VoicePoweredOrbProps> = ({
  className,
  hue = 0,
  state = "idle",
  voiceSensitivity = 1.5,
  maxRotationSpeed = 1.2,
  maxHoverIntensity = 0.8,
  onVoiceDetected,
  aiAudioRef,
}) => {
  const ctnDom = useRef<HTMLDivElement>(null);

  // ─── Mic refs ────────────────────────────────────────────────────────────
  const micStreamRef     = useRef<MediaStream | null>(null);
  const micContextRef    = useRef<AudioContext | null>(null);
  const micAnalyserRef   = useRef<AnalyserNode | null>(null);
  const micDataRef       = useRef<Uint8Array | null>(null);

  // ─── AI audio analysis refs ───────────────────────────────────────────
  const aiContextRef     = useRef<AudioContext | null>(null);
  const aiAnalyserRef    = useRef<AnalyserNode | null>(null);
  const aiDataRef        = useRef<Uint8Array | null>(null);
  const aiSourceRef      = useRef<MediaElementAudioSourceNode | null>(null);
  const aiAudioElemRef   = useRef<HTMLAudioElement | null>(null); // tracks which elem is wired

  // ─── State ref for rAF loop ───────────────────────────────────────────
  const stateRef         = useRef<OrbState>(state);
  const hueRef           = useRef<number>(hue);

  // Keep refs in sync with props without re-running the WebGL effect
  useEffect(() => { stateRef.current = state; }, [state]);
  useEffect(() => { hueRef.current = hue; }, [hue]);

  // ─── GLSL shaders (unchanged from original) ───────────────────────────
  const vert = /* glsl */`
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const frag = /* glsl */`
    precision highp float;
    uniform float iTime;
    uniform vec3  iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c){float y=dot(c,vec3(.299,.587,.114));float i=dot(c,vec3(.596,-.274,-.322));float q=dot(c,vec3(.211,-.523,.312));return vec3(y,i,q);}
    vec3 yiq2rgb(vec3 c){return vec3(c.x+.956*c.y+.621*c.z,c.x-.272*c.y-.647*c.z,c.x-1.106*c.y+1.703*c.z);}
    vec3 adjustHue(vec3 color,float hueDeg){float r=hueDeg*3.14159265/180.;vec3 yiq=rgb2yiq(color);float ca=cos(r);float sa=sin(r);float i=yiq.y*ca-yiq.z*sa;float q=yiq.y*sa+yiq.z*ca;yiq.y=i;yiq.z=q;return yiq2rgb(yiq);}
    vec3 hash33(vec3 p3){p3=fract(p3*vec3(.1031,.11369,.13787));p3+=dot(p3,p3.yxz+19.19);return -1.+2.*fract(vec3(p3.x+p3.y,p3.x+p3.z,p3.y+p3.z)*p3.zyx);}
    float snoise3(vec3 p){const float K1=.333333333;const float K2=.166666667;vec3 i=floor(p+(p.x+p.y+p.z)*K1);vec3 d0=p-(i-(i.x+i.y+i.z)*K2);vec3 e=step(vec3(0.),d0-d0.yzx);vec3 i1=e*(1.-e.zxy);vec3 i2=1.-e.zxy*(1.-e);vec3 d1=d0-(i1-K2);vec3 d2=d0-(i2-K1);vec3 d3=d0-.5;vec4 h=max(.6-vec4(dot(d0,d0),dot(d1,d1),dot(d2,d2),dot(d3,d3)),.0);vec4 n=h*h*h*h*vec4(dot(d0,hash33(i)),dot(d1,hash33(i+i1)),dot(d2,hash33(i+i2)),dot(d3,hash33(i+1.)));return dot(vec4(31.316),n);}
    vec4 extractAlpha(vec3 c){float a=max(max(c.r,c.g),c.b);return vec4(c/( a+1e-5),a);}

    const vec3 baseColor1=vec3(1.,.45098,.05);
    const vec3 baseColor2=vec3(1.,.75,.15);
    const vec3 baseColor3=vec3(.85,.2,.05);
    const float innerRadius=.6;
    const float noiseScale=.65;

    float light1(float i,float a,float d){return i/(1.+d*a);}
    float light2(float i,float a,float d){return i/(1.+d*d*a);}

    vec4 draw(vec2 uv){
      vec3 c1=adjustHue(baseColor1,hue);
      vec3 c2=adjustHue(baseColor2,hue);
      vec3 c3=adjustHue(baseColor3,hue);
      float ang=atan(uv.y,uv.x);
      float len=length(uv);
      float inv=len>0.?1./len:0.;
      float n0=snoise3(vec3(uv*noiseScale,iTime*.5))*.5+.5;
      float r0=mix(mix(innerRadius,1.,.4),mix(innerRadius,1.,.6),n0);
      float d0=distance(uv,(r0*inv)*uv);
      float v0=light1(1.,10.,d0);
      v0*=smoothstep(r0*1.05,r0,len);
      float cl=cos(ang+iTime*2.)*.5+.5;
      float a=iTime*-1.;
      vec2 pos=vec2(cos(a),sin(a))*r0;
      float d=distance(uv,pos);
      float v1=light2(1.5,5.,d);
      v1*=light1(1.,50.,d0);
      float edgeMask=1.-smoothstep(.5,.8+(n0*.3),len);
      vec3 col=mix(c1,c2,cl);
      col=mix(c3,col,v0);
      col=(col+v1)*edgeMask;
      col=clamp(col,0.,1.);
      return extractAlpha(col);
    }

    vec4 mainImage(vec2 fc){
      vec2 center=iResolution.xy*.5;
      float size=min(iResolution.x,iResolution.y);
      vec2 uv=(fc-center)/size*2.;
      float s=sin(rot);float c=cos(rot);
      uv=vec2(c*uv.x-s*uv.y,s*uv.x+c*uv.y);
      uv.x+=hover*hoverIntensity*.1*sin(uv.y*10.+iTime);
      uv.y+=hover*hoverIntensity*.1*sin(uv.x*10.+iTime);
      return draw(uv);
    }

    void main(){
      vec2 fc=vUv*iResolution.xy;
      vec4 col=mainImage(fc);
      gl_FragColor=vec4(col.rgb,col.a);
    }
  `;

  // ─── Mic helpers ─────────────────────────────────────────────────────────
  const stopMicrophone = () => {
    micStreamRef.current?.getTracks().forEach(t => t.stop());
    micStreamRef.current = null;
    micAnalyserRef.current?.disconnect();
    micAnalyserRef.current = null;
    if (micContextRef.current?.state !== "closed") {
      micContextRef.current?.close();
    }
    micContextRef.current = null;
    micDataRef.current = null;
  };

  const initMicrophone = async (): Promise<boolean> => {
    stopMicrophone();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
          sampleRate: 44100,
        },
      });
      micStreamRef.current = stream;
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (ctx.state === "suspended") await ctx.resume();
      micContextRef.current = ctx;
      micAnalyserRef.current = ctx.createAnalyser();
      micAnalyserRef.current.fftSize = 512;
      micAnalyserRef.current.smoothingTimeConstant = 0.3;
      micAnalyserRef.current.minDecibels = -90;
      micAnalyserRef.current.maxDecibels = -10;
      ctx.createMediaStreamSource(stream).connect(micAnalyserRef.current);
      micDataRef.current = new Uint8Array(micAnalyserRef.current.frequencyBinCount);
      return true;
    } catch {
      return false;
    }
  };

  const analyzeAudio = (): number => {
    if (!micAnalyserRef.current || !micDataRef.current) return 0;
    micAnalyserRef.current.getByteFrequencyData(micDataRef.current);
    let sum = 0;
    for (let i = 0; i < micDataRef.current.length; i++) {
      const v = micDataRef.current[i] / 255;
      sum += v * v;
    }
    return Math.min(Math.sqrt(sum / micDataRef.current.length) * voiceSensitivity * 3, 1);
  };

  // ─── Mic lifecycle (separate from WebGL) ─────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    if (state === "listening") {
      initMicrophone().then(ok => {
        if (cancelled) stopMicrophone();
        if (!ok) console.warn("VoicePoweredOrb: mic access denied");
      });
    } else {
      stopMicrophone();
    }
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // ─── AI audio analysis setup (wired once per audio element) ─────────────
  useEffect(() => {
    const audioElem = aiAudioRef?.current;
    if (!audioElem || state !== "speaking") return;
    if (aiAudioElemRef.current === audioElem) return; // already wired

    const wire = async () => {
      try {
        if (!aiContextRef.current || aiContextRef.current.state === "closed") {
          aiContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (aiContextRef.current.state === "suspended") {
          await aiContextRef.current.resume();
        }
        if (!aiAnalyserRef.current) {
          aiAnalyserRef.current = aiContextRef.current.createAnalyser();
          aiAnalyserRef.current.fftSize = 256;
          aiAnalyserRef.current.smoothingTimeConstant = 0.5;
          aiDataRef.current = new Uint8Array(aiAnalyserRef.current.frequencyBinCount);
        }
        // createMediaElementSource can only be called once per element
        if (!aiSourceRef.current) {
          aiSourceRef.current = aiContextRef.current.createMediaElementSource(audioElem);
          aiSourceRef.current.connect(aiAnalyserRef.current);
          aiAnalyserRef.current.connect(aiContextRef.current.destination);
        }
        aiAudioElemRef.current = audioElem;
      } catch (e) {
        console.warn("VoicePoweredOrb: AI audio analysis wiring failed", e);
      }
    };

    wire();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, aiAudioRef?.current]);

  // ─── WebGL — created ONCE, state changes only flip stateRef ──────────────
  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    let renderer: Renderer;
    let gl: OGLRenderingContext;
    let program: Program;
    let rafId: number;
    let paused = false;

    try {
      renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
        dpr: Math.min(window.devicePixelRatio || 1, 2), // cap at 2× for perf
      });
      gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      while (container.firstChild) container.removeChild(container.firstChild);
      container.appendChild(gl.canvas as HTMLCanvasElement);

      const geometry = new Triangle(gl);
      program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms: {
          iTime:        { value: 0 },
          iResolution:  { value: new Vec3(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height) },
          hue:          { value: hueRef.current },
          hover:        { value: 0 },
          rot:          { value: 0 },
          hoverIntensity: { value: 0 },
        },
      });
      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w * dpr, h * dpr);
        (gl.canvas as HTMLCanvasElement).style.width  = w + "px";
        (gl.canvas as HTMLCanvasElement).style.height = h + "px";
        program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
      };
      window.addEventListener("resize", resize);
      resize();

      // Pause rAF when tab/widget is hidden to save battery
      const onVisibility = () => { paused = document.hidden; };
      document.addEventListener("visibilitychange", onVisibility);

      let lastTime   = 0;
      let currentRot = 0;
      let voiceLevel = 0;

      const update = (t: number) => {
        rafId = requestAnimationFrame(update);
        if (paused) return;

        const dt = (t - lastTime) * 0.001;
        lastTime = t;
        program.uniforms.iTime.value = t * 0.001;
        program.uniforms.hue.value   = hueRef.current;

        const s = stateRef.current;
        let targetLevel = 0;

        if (s === "listening") {
          targetLevel = analyzeAudio();
          onVoiceDetected?.(targetLevel > 0.1);

        } else if (s === "thinking") {
          targetLevel = 0.15 + Math.sin(t * 0.003) * 0.05;
          onVoiceDetected?.(false);

        } else if (s === "speaking") {
          // Read from pre-wired AI analyser (wired in separate useEffect)
          if (aiAnalyserRef.current && aiDataRef.current) {
            aiAnalyserRef.current.getByteFrequencyData(aiDataRef.current);
            let sum = 0;
            for (let i = 0; i < aiDataRef.current.length; i++) {
              const v = aiDataRef.current[i] / 255;
              sum += v * v;
            }
            targetLevel = Math.min(Math.sqrt(sum / aiDataRef.current.length) * 3.5, 1);
          } else {
            // Fallback fake animation
            targetLevel = 0.3 + (Math.sin(t * 0.015) * Math.sin(t * 0.037) * 0.4) + Math.random() * 0.1;
          }
          onVoiceDetected?.(false);

        } else {
          onVoiceDetected?.(false);
        }

        // Smooth interpolation
        voiceLevel += (targetLevel - voiceLevel) * 0.15;

        const rotSpeed = 0.3 + voiceLevel * maxRotationSpeed * 2;
        if (voiceLevel > 0.01) currentRot += dt * rotSpeed;

        program.uniforms.hover.value         = Math.min(voiceLevel * 2, 1);
        program.uniforms.hoverIntensity.value = Math.min(voiceLevel * maxHoverIntensity * 0.8, maxHoverIntensity);
        program.uniforms.rot.value            = currentRot;

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        renderer.render({ scene: mesh });
      };

      rafId = requestAnimationFrame(update);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", onVisibility);
        stopMicrophone();
        try {
          const canvas = gl.canvas as HTMLCanvasElement;
          if (container.contains(canvas)) container.removeChild(canvas);
        } catch {}
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };

    } catch (err) {
      console.error("VoicePoweredOrb: WebGL init failed", err);
      return () => {};
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← empty deps: WebGL created once, never rebuilt

  return (
    <div ref={ctnDom} className={cn("w-full h-full relative", className)} />
  );
};