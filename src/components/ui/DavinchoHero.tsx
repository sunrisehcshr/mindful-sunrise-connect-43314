import { cn } from "@/lib/utils"; 
import { useState } from "react"; 
 
export const DavinchoHero = () => { 
  const [count, setCount] = useState(0); 
 
  return ( 
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl")}> 
      <h1 className="text-2xl font-bold mb-2 text-stone-900">Component Example</h1> 
      <h2 className="text-xl font-semibold text-stone-700">{count}</h2> 
      <div className="flex gap-2"> 
        <button 
          onClick={() => setCount((prev) => prev - 1)}
          className="px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
        >
          -
        </button> 
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-md transition-colors"
        >
          +
        </button> 
      </div> 
    </div> 
  ); 
}; 
