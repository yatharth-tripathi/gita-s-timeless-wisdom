import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";
import spiritualBg from "@/assets/spiritual-bg.jpg";

const SlideConclusion = ({ total }: { total: number }) => (
  <SlideLayout backgroundImage={spiritualBg}>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <h2 className="font-display text-[52px] text-gradient-gold slide-glow animate-fade-in-up text-center font-bold">
        Conclusion
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1" />
      <div className="flex-1 flex items-center justify-center animate-fade-in-up-delay-2">
        <div className="max-w-[1300px] space-y-[36px] text-center">
          <p className="font-elegant text-[30px] text-foreground/90 leading-[1.7] font-semibold">
            The Bhagavad Gita is not just about religion. It speaks about:
          </p>
          <div className="flex justify-center gap-[30px] flex-wrap">
            {["Stress", "Fear", "Responsibility", "Discipline", "Purpose"].map((t, i) => (
              <div key={i} className="golden-border rounded-lg px-[30px] py-[14px] bg-secondary/30">
                <p className="font-display text-[22px] text-primary/90 font-bold">{t}</p>
              </div>
            ))}
          </div>
          <p className="font-elegant text-[28px] text-foreground/80 leading-[1.7] font-semibold">
            Its teachings still matter because the struggles we face as humans have not changed.
          </p>
          <div className="golden-border rounded-lg p-[40px] bg-secondary/20">
            <p className="font-elegant text-[32px] text-primary italic leading-[1.6] font-bold">
              "The battlefield has changed, but the inner battles remain the same."
            </p>
          </div>
          <p className="font-display text-[26px] text-primary/90 tracking-[3px] font-bold">
            That is why the Bhagavad Gita still guides our lives today.
          </p>
        </div>
      </div>
    </div>
    <SlideNumber current={11} total={total} />
  </SlideLayout>
);

export default SlideConclusion;
