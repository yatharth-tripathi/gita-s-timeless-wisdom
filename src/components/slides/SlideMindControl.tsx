import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideMindControl = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/50 uppercase animate-fade-in-up">
        Chapter Four
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px]">
        Mind Control & Discipline
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full grid grid-cols-2 gap-[50px]">
          <div className="golden-border rounded-lg p-[40px] bg-destructive/10">
            <p className="font-display text-[24px] text-accent/80 mb-[20px]">Uncontrolled Mind</p>
            <div className="space-y-[16px]">
              {["Overthinking", "Distraction", "Stress & Anxiety"].map((t, i) => (
                <div key={i} className="flex items-center gap-[14px]">
                  <span className="text-accent/60 text-[18px]">✕</span>
                  <p className="font-elegant text-[26px] text-foreground/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="golden-border rounded-lg p-[40px] bg-primary/10">
            <p className="font-display text-[24px] text-primary/80 mb-[20px]">Disciplined Mind</p>
            <div className="space-y-[16px]">
              {["Focus & Clarity", "Stability", "Better Decisions"].map((t, i) => (
                <div key={i} className="flex items-center gap-[14px]">
                  <span className="text-primary/60 text-[18px]">✦</span>
                  <p className="font-elegant text-[26px] text-foreground/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 text-center">
            <p className="font-elegant text-[28px] text-primary/70 italic">
              In an age of constant digital distraction, the Gita's emphasis on self-control is more relevant than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={6} total={total} />
  </SlideLayout>
);

export default SlideMindControl;
