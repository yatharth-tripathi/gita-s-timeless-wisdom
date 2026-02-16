import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";
import spiritualBg from "@/assets/spiritual-bg.jpg";

const SlideConclusion = ({ total }: { total: number }) => (
  <SlideLayout backgroundImage={spiritualBg}>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <h2 className="font-display text-[52px] text-gradient-gold slide-glow animate-fade-in-up text-center">
        Conclusion
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1" />
      <div className="flex-1 flex items-center justify-center animate-fade-in-up-delay-2">
        <div className="max-w-[1300px] space-y-[36px] text-center">
          <p className="font-elegant text-[30px] text-foreground/85 leading-[1.7]">
            The Bhagavad Gita is not limited to religion. It addresses:
          </p>
          <div className="flex justify-center gap-[30px] flex-wrap">
            {["Stress", "Fear", "Responsibility", "Discipline", "Purpose"].map((t, i) => (
              <div key={i} className="golden-border rounded-lg px-[30px] py-[14px] bg-secondary/30">
                <p className="font-display text-[22px] text-primary/90">{t}</p>
              </div>
            ))}
          </div>
          <p className="font-elegant text-[28px] text-foreground/70 leading-[1.7]">
            Its teachings remain relevant because human struggles remain the same.
          </p>
          <div className="golden-border rounded-lg p-[40px] bg-secondary/20">
            <p className="font-elegant text-[32px] text-primary italic leading-[1.6]">
              "The battlefield has changed — but the inner conflicts still exist."
            </p>
          </div>
          <p className="font-display text-[26px] text-primary/80 tracking-[3px]">
            That is why the Bhagavad Gita continues to guide modern life.
          </p>
        </div>
      </div>
    </div>
    <SlideNumber current={10} total={total} />
  </SlideLayout>
);

export default SlideConclusion;
