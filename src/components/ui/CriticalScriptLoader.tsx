
import React, { useEffect } from 'react';

interface ScriptConfig {
  src: string;
  async?: boolean;
  defer?: boolean;
  id?: string;
  type?: string;
  onLoad?: () => void;
  strategy: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
}

interface CriticalScriptLoaderProps {
  scripts: ScriptConfig[];
}

/**
 * Component for efficiently loading critical and non-critical scripts
 */
const CriticalScriptLoader: React.FC<CriticalScriptLoaderProps> = ({ scripts }) => {
  useEffect(() => {
    // Scripts to load immediately (before interactive)
    const criticalScripts = scripts.filter(script => script.strategy === 'beforeInteractive');
    
    // Scripts to load after page becomes interactive
    const afterInteractiveScripts = scripts.filter(script => script.strategy === 'afterInteractive');
    
    // Scripts to load after everything else
    const lazyScripts = scripts.filter(script => script.strategy === 'lazyOnload');
    
    // Helper to load scripts
    const loadScript = (scriptConfig: ScriptConfig) => {
      // Check if script already exists
      const existingScript = document.getElementById(scriptConfig.id || scriptConfig.src);
      if (existingScript) {
        return;
      }
      
      const script = document.createElement('script');
      script.src = scriptConfig.src;
      if (scriptConfig.id) script.id = scriptConfig.id;
      script.async = scriptConfig.async ?? false;
      script.defer = scriptConfig.defer ?? true;
      if (scriptConfig.type) script.type = scriptConfig.type;
      
      if (scriptConfig.onLoad) {
        script.onload = scriptConfig.onLoad;
      }
      
      document.body.appendChild(script);
    };
    
    // Load critical scripts immediately
    criticalScripts.forEach(loadScript);
    
    // Load after-interactive scripts when page is interactive
    if (document.readyState === 'complete') {
      afterInteractiveScripts.forEach(loadScript);
    } else {
      window.addEventListener('load', () => {
        afterInteractiveScripts.forEach(loadScript);
      });
    }
    
    // Load lazy scripts after a delay
    const lazyTimeout = setTimeout(() => {
      lazyScripts.forEach(loadScript);
    }, 2000);
    
    return () => {
      clearTimeout(lazyTimeout);
    };
  }, [scripts]);
  
  return null; // This component doesn't render anything
};

export default CriticalScriptLoader;
