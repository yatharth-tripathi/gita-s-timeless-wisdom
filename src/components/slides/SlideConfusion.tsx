import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideConfusion = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter One
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Dealing with Confusion & Emotional Breakdown
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex gap-[60px] animate-fade-in-up-delay-2">
        <div className="flex-1 space-y-[22px]">
          {[
            "The Gita begins with confusion.",
            "Arjuna goes through self-doubt, fear, and emotional weakness.",
            "It shows that even the strongest people can feel completely lost.",
          ].map((t, i) => (
            <p key={i} className="font-elegant text-[28px] text-foreground/90 leading-[1.6] font-semibold">
              {t}
            </p>
          ))}
        </div>
        <div className="flex-1">
          <div className="golden-border rounded-lg p-[40px] bg-secondary/30">
            <p className="font-display text-[22px] text-primary/90 mb-[24px] font-bold">In our daily lives, we face:</p>
            <div className="space-y-[16px]">
              {["Career pressure", "Academic stress", "Fear of failure"].map((t, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-primary/60" />
                  <p className="font-body text-[26px] text-foreground/85 font-semibold">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-[30px] pt-[24px] border-t border-primary/20">
              <p className="font-elegant text-[26px] text-primary/80 italic font-semibold">
                "Confusion is not weakness. It is often the first step towards clarity."
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
