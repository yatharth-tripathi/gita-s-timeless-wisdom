import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideDuty = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/50 uppercase animate-fade-in-up">
        Chapter Three
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px]">
        Importance of Duty (Kartavya)
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full flex gap-[60px]">
          <div className="flex-1 space-y-[24px]">
            <p className="font-elegant text-[28px] text-foreground/85 leading-[1.6]">
              Every individual has a role to perform.
            </p>
            <div className="space-y-[20px] pl-[20px]">
              {[
                { role: "A student", duty: "must learn" },
                { role: "A leader", duty: "must guide" },
                { role: "A parent", duty: "must nurture" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] rotate-45 bg-primary/70" />
                  <p className="font-body text-[26px] text-foreground/80">
                    <span className="text-primary/90 font-semibold">{item.role}</span> {item.duty}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="golden-border rounded-lg p-[40px] bg-secondary/30 space-y-[24px]">
              <p className="font-elegant text-[26px] text-foreground/80 leading-[1.6]">
                Problems arise when we compare our role with others.
              </p>
              <p className="font-elegant text-[26px] text-foreground/80 leading-[1.6]">
                The Gita emphasizes sincerity in performing one's own duty rather than imitating someone else's path.
              </p>
              <div className="pt-[20px] border-t border-primary/20">
                <p className="font-display text-[24px] text-primary/80 italic">
                  Responsibility builds character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={5} total={total} />
  </SlideLayout>
);

export default SlideDuty;
