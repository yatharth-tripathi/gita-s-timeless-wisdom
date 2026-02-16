import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";
import spiritualBg from "@/assets/spiritual-bg.jpg";

const SlideTitleSlide = ({ total }: { total: number }) => (
  <SlideLayout variant="title" backgroundImage={spiritualBg}>
    <div className="flex-1 flex flex-col items-center justify-center px-[200px]">
      <p className="font-display text-[22px] tracking-[8px] text-primary/70 uppercase animate-fade-in-up mb-[30px]">
        ॐ
      </p>
      <h1 className="font-display text-[72px] leading-[1.15] text-center text-gradient-gold slide-glow animate-fade-in-up-delay-1 font-bold">
        Relevance of the Bhagavad Gita
      </h1>
      <h2 className="font-display text-[48px] text-center text-primary/80 animate-fade-in-up-delay-2 mt-[10px]">
        in Today's Life
      </h2>
      <OrnamentDivider className="my-[40px] animate-fade-in-up-delay-3" />
      <p className="font-elegant text-[30px] text-foreground/70 text-center italic animate-fade-in-up-delay-3">
        Understanding Ancient Wisdom in a Modern World
      </p>
      <p className="font-body text-[22px] text-primary/50 mt-[50px] tracking-[3px] animate-fade-in-up-delay-4">
        Presented by Your Name + Group Members
      </p>
    </div>
    <SlideNumber current={1} total={total} />
  </SlideLayout>
);

export default SlideTitleSlide;
