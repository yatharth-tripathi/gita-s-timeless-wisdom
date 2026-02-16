import { useEffect, useRef, useState, ReactNode } from "react";
import slideBg from "@/assets/slide-bg.jpg";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: "title" | "content";
  backgroundImage?: string;
}

const SlideLayout = ({ children, variant = "content", backgroundImage }: SlideLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const scaleX = parent.clientWidth / 1920;
          const scaleY = parent.clientHeight / 1080;
          setScale(Math.min(scaleX, scaleY));
        }
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="slide-container" ref={containerRef}>
      <div
        className="slide-wrapper"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage || slideBg})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slide-deep/85" />
        {/* Gold border frame */}
        <div className="absolute inset-[20px] border border-primary/20 rounded-sm" />
        <div className="absolute inset-[24px] border border-primary/10 rounded-sm" />
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideLayout;
