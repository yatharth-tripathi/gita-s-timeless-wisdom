import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideConfusion = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/50 uppercase animate-fade-in-up">
        Chapter One
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px]">
        Dealing with Confusion & Emotional Breakdown
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex gap-[60px] animate-fade-in-up-delay-2">
        <div className="flex-1 space-y-[22px]">
          {[
            "The Gita begins with confusion.",
            "Arjuna experiences self-doubt, fear, and emotional weakness.",
            "This shows that even strong individuals can feel lost.",
          ].map((t, i) => (
            <p key={i} className="font-elegant text-[28px] text-foreground/85 leading-[1.6]">
              {t}
            </p>
          ))}
        </div>
        <div className="flex-1">
          <div className="golden-border rounded-lg p-[40px] bg-secondary/30">
            <p className="font-display text-[22px] text-primary/80 mb-[24px]">In modern life, we face:</p>
            <div className="space-y-[16px]">
              {["Career pressure", "Academic stress", "Fear of failure"].map((t, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-primary/60" />
                  <p className="font-body text-[26px] text-foreground/80">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-[30px] pt-[24px] border-t border-primary/20">
              <p className="font-elegant text-[26px] text-primary/70 italic">
                "Confusion is not weakness — it is often the beginning of clarity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={3} total={total} />
  </SlideLayout>
);

export default SlideConfusion;
