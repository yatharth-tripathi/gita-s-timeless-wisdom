import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideDetachment = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter Five
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Detachment & Emotional Balance
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full space-y-[36px]">
          <div className="golden-border rounded-lg p-[40px] bg-secondary/20 text-center">
            <p className="font-elegant text-[34px] text-primary italic font-bold">
              "Detachment does not mean you stop caring. It means you stop letting results control you."
            </p>
          </div>
          <div className="space-y-[24px] px-[40px]">
            {[
              "Give your best effort, but do not let success or failure decide who you are.",
              "This way of thinking saves you from extreme disappointment and unhealthy attachment.",
              "Emotional maturity gives you real inner strength.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-[20px]">
                <span className="text-primary/60 text-[22px] mt-[4px]">✦</span>
                <p className="font-elegant text-[28px] text-foreground/90 leading-[1.6] font-semibold">{t}</p>
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
