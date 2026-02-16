import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideDetachment = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/50 uppercase animate-fade-in-up">
        Chapter Five
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px]">
        Detachment & Emotional Balance
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full space-y-[36px]">
          <div className="golden-border rounded-lg p-[40px] bg-secondary/20 text-center">
            <p className="font-elegant text-[34px] text-primary italic">
              "Detachment does not mean indifference — it means emotional balance."
            </p>
          </div>
          <div className="space-y-[24px] px-[40px]">
            {[
              "We should give our best effort, but not let success or failure define our identity.",
              "This mindset prevents extreme disappointment and unhealthy attachment.",
              "Emotional maturity creates inner strength.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-[20px]">
                <span className="text-primary/60 text-[22px] mt-[4px]">✦</span>
                <p className="font-elegant text-[28px] text-foreground/85 leading-[1.6]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={7} total={total} />
  </SlideLayout>
);

export default SlideDetachment;
