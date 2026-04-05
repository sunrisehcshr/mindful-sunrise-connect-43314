"use client"; 
 
 import React, { useEffect, useRef } from 'react'; 
 import { Renderer, Geometry, Program, Mesh, Vec2, Color } from 'ogl'; 
 
 interface FrostedProps { 
     baseColor?: string;    // Background color 
     accentColor?: string;  // Color of the moving "blobs" 
     speed?: number;        // Speed of movement (0.1 - 2.0) 
     grainAmount?: number;  // How "sandblasted" it looks (0.0 - 0.1) 
     className?: string; 
 } 
 
 const VERTEX_SHADER = ` 
   attribute vec2 position; 
   attribute vec2 uv; 
   varying vec2 vUv; 
   void main() { 
     vUv = uv; 
     gl_Position = vec4(position, 0, 1); 
   } 
 `; 
 
 const FRAGMENT_SHADER = ` 
   precision highp float; 
 
   uniform float uTime; 
   uniform vec2 uResolution; 
   uniform vec3 uBaseColor; 
   uniform vec3 uAccentColor; 
   uniform float uSpeed; 
 
   varying vec2 vUv; 
 
   // Classic Simplex Noise for the "blobs" 
   vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); } 
   float snoise(vec2 v) { 
     const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); 
     vec2 i  = floor(v + dot(v, C.yy) ); 
     vec2 x0 = v -   i + dot(i, C.xx); 
     vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); 
     vec4 x12 = x0.xyxy + C.xxzz; 
     x12.xy -= i1; 
     i = mod(i, 289.0); 
     vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); 
     vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); 
     m = m*m; m = m*m; 
     vec3 x = 2.0 * fract(p * C.www) - 1.0; 
     vec3 h = abs(x) - 0.5; 
     vec3 a0 = x - floor(x + 0.5); 
     vec3 g; 
     g.x  = a0.x  * x0.x  + h.x  * x0.y; 
     g.yz = a0.yz * x12.xz + h.yz * x12.yw; 
     return 130.0 * dot(m, g); 
   } 
 
   void main() { 
     vec2 uv = vUv; 
     float t = uTime * uSpeed; 
 
     // Create large organic moving shapes 
     float n1 = snoise(uv * 1.5 + t * 0.2); 
     float n2 = snoise(uv * 2.0 - t * 0.3 + n1); 
     
     // Mix colors based on noise 
     float mixer = smoothstep(-0.5, 0.8, n2); 
     vec3 color = mix(uBaseColor, uAccentColor, mixer); 
 
     gl_FragColor = vec4(color, 1.0); 
   } 
 `; 
 
 const UiloraFrostedGlass: React.FC<FrostedProps> = ({ 
     baseColor = "#080808", 
     accentColor = "#222222", 
     speed = 0.3, 
     className = "", 
 }) => { 
     const containerRef = useRef<HTMLDivElement>(null); 
 
     useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let renderer: Renderer;
        try {
            renderer = new Renderer({ alpha: false, antialias: true });
        } catch (error) {
            console.warn("WebGL not supported, falling back to basic background", error);
            container.style.backgroundColor = baseColor;
            return;
        }

        const gl = renderer.gl;
        if (!gl) {
            console.warn("WebGL context not available");
            container.style.backgroundColor = baseColor;
            return;
        }

        gl.canvas.style.display = 'block'; 
         gl.canvas.style.width = '100%'; 
         gl.canvas.style.height = '100%'; 
        container.appendChild(gl.canvas); 
 
         const geometry = new Geometry(gl, { 
             position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }, 
             uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }, 
         }); 
 
         const base = new Color(baseColor);
         const accent = new Color(accentColor);

         const program = new Program(gl, { 
             vertex: VERTEX_SHADER, 
             fragment: FRAGMENT_SHADER, 
             uniforms: { 
                 uTime: { value: 0 }, 
                 uResolution: { value: new Vec2(0, 0) }, 
                 uBaseColor: { value: new Float32Array([base.r, base.g, base.b]) }, 
                 uAccentColor: { value: new Float32Array([accent.r, accent.g, accent.b]) }, 
                 uSpeed: { value: speed }, 
             }, 
         }); 
 
         const mesh = new Mesh(gl, { geometry, program }); 
 
         const resize = () => { 
            const w = container.clientWidth; 
            const h = container.clientHeight; 
             renderer.setSize(w, h); 
             program.uniforms.uResolution.value.set(w, h); 
         }; 
         window.addEventListener('resize', resize); 
         resize(); 
 
         let requestId: number; 
         const update = (t: number) => { 
             requestId = requestAnimationFrame(update); 
             program.uniforms.uTime.value = t * 0.001; 
             renderer.render({ scene: mesh }); 
         }; 
         requestId = requestAnimationFrame(update); 
 
         return () => { 
             window.removeEventListener('resize', resize); 
             cancelAnimationFrame(requestId); 
            if (container.contains(gl.canvas)) { 
                container.removeChild(gl.canvas); 
             } 
             gl.getExtension('WEBGL_lose_context')?.loseContext(); 
         };
     }, [baseColor, accentColor, speed]); 
 
     return ( 
         <div 
             ref={containerRef} 
             className={`absolute inset-0 z-0 w-full h-full overflow-hidden ${className}`} 
         /> 
     ); 
 }; 
 
 export default UiloraFrostedGlass;
