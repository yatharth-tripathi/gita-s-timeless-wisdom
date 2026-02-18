import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideSelfRealisation = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter Six
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Self-Realisation & Identity
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center justify-center animate-fade-in-up-delay-2">
        <div className="max-w-[1200px] space-y-[40px] text-center">
          <p className="font-elegant text-[32px] text-foreground/90 leading-[1.7] font-semibold">
            The Gita teaches that you are more than your marks, your job title, or your failures.
          </p>
          <div className="golden-border rounded-lg p-[50px] bg-secondary/20">
            <p className="font-elegant text-[30px] text-foreground/85 leading-[1.7] font-semibold">
              Real confidence comes from knowing who you truly are,
              <span className="text-primary font-bold"> not from what others think of you</span>.
            </p>
          </div>
          <p className="font-elegant text-[28px] text-foreground/80 leading-[1.7] font-semibold">
            When you know yourself, comparison stops bothering you.
          </p>
          <p className="font-display text-[26px] text-primary/90 italic tracking-[2px] font-bold">
            Self-awareness is the path to inner freedom.
          </p>
        </div>
      </div>
    </div>
    <SlideNumber current={9} total={total} />
  </SlideLayout>
);

export default SlideSelfRealisation;
