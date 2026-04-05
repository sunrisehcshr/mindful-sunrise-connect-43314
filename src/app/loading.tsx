import { MorphingSpinner } from "@/components/ui/morphing-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-50/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        <MorphingSpinner size="lg" />
        <p className="text-lg text-stone-500 font-barlow font-medium tracking-widest uppercase animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
}
