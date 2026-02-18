import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideMindControl = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter Four
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Mind Control & Discipline
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full grid grid-cols-2 gap-[50px]">
          <div className="golden-border rounded-lg p-[40px] bg-destructive/10">
            <p className="font-display text-[24px] text-accent/90 mb-[20px] font-bold">Uncontrolled Mind</p>
            <div className="space-y-[16px]">
              {["Overthinking", "Distraction", "Stress & Anxiety"].map((t, i) => (
                <div key={i} className="flex items-center gap-[14px]">
                  <span className="text-accent/70 text-[18px]">✕</span>
                  <p className="font-elegant text-[26px] text-foreground/80 font-semibold">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="golden-border rounded-lg p-[40px] bg-primary/10">
            <p className="font-display text-[24px] text-primary/90 mb-[20px] font-bold">Disciplined Mind</p>
            <div className="space-y-[16px]">
              {["Focus & Clarity", "Stability", "Better Decisions"].map((t, i) => (
                <div key={i} className="flex items-center gap-[14px]">
                  <span className="text-primary/60 text-[18px]">✦</span>
                  <p className="font-elegant text-[26px] text-foreground/80 font-semibold">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 text-center">
            <p className="font-elegant text-[28px] text-primary/80 italic font-semibold">
              In a world full of distractions, the Gita's call for self-control matters more than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={7} total={total} />
  </SlideLayout>
);

export default SlideMindControl;
