import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import SlideTitleSlide from "@/components/slides/SlideTitleSlide";
import SlideIntroduction from "@/components/slides/SlideIntroduction";
import SlideBackground from "@/components/slides/SlideBackground";
import SlideConfusion from "@/components/slides/SlideConfusion";
import SlideKarmaYoga from "@/components/slides/SlideKarmaYoga";
import SlideDuty from "@/components/slides/SlideDuty";
import SlideMindControl from "@/components/slides/SlideMindControl";
import SlideDetachment from "@/components/slides/SlideDetachment";
import SlideSelfRealisation from "@/components/slides/SlideSelfRealisation";
import SlideLeadership from "@/components/slides/SlideLeadership";
import SlideConclusion from "@/components/slides/SlideConclusion";
import SlideReferences from "@/components/slides/SlideReferences";

const TOTAL_SLIDES = 12;

const slides = [
  SlideTitleSlide,
  SlideIntroduction,
  SlideBackground,
  SlideConfusion,
  SlideKarmaYoga,
  SlideDuty,
  SlideMindControl,
  SlideDetachment,
  SlideSelfRealisation,
  SlideLeadership,
  SlideConclusion,
  SlideReferences,
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      if (e.key === "Escape" && isFullscreen) { setIsFullscreen(false); }
    };
    window.addEventListener("keydown", handleKey);

    const handleFsChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", handleFsChange);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, [goNext, goPrev, toggleFullscreen, isFullscreen]);

  const CurrentSlide = slides[current];

  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      {/* Main slide area */}
      <div className="flex-1 relative overflow-hidden" key={current}>
        <CurrentSlide total={TOTAL_SLIDES} />
      </div>

      {/* Bottom navigation bar */}
      {!isFullscreen && (
        <div className="h-[72px] bg-secondary/50 border-t border-border flex items-center justify-between px-6">
          {/* Thumbnail dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-display text-[14px] text-muted-foreground tracking-[3px] min-w-[70px] text-center">
              {current + 1} / {TOTAL_SLIDES}
            </span>
            <button
              onClick={goNext}
              disabled={current === TOTAL_SLIDES - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors ml-2"
            >
              <Maximize size={18} />
            </button>
          </div>

          {/* Keyboard hint */}
          <p className="text-muted-foreground/40 text-[12px] font-body">
            ← → Navigate &nbsp;|&nbsp; F Fullscreen
          </p>
        </div>
      )}
    </div>
  );
};

export default Index;
