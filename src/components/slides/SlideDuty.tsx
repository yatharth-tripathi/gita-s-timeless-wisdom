import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideDuty = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter Three
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Importance of Duty (Kartavya)
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full flex gap-[60px]">
          <div className="flex-1 space-y-[24px]">
            <p className="font-elegant text-[28px] text-foreground/90 leading-[1.6] font-semibold">
              Every person has a role to play.
            </p>
            <div className="space-y-[20px] pl-[20px]">
              {[
                { role: "A student", duty: "must learn" },
                { role: "A leader", duty: "must guide" },
                { role: "A parent", duty: "must nurture" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <div className="w-[6px] h-[6px] rotate-45 bg-primary/70" />
                  <p className="font-body text-[26px] text-foreground/85 font-semibold">
                    <span className="text-primary/90 font-bold">{item.role}</span> {item.duty}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="golden-border rounded-lg p-[40px] bg-secondary/30 space-y-[24px]">
              <p className="font-elegant text-[26px] text-foreground/85 leading-[1.6] font-semibold">
                Problems start when we compare our path with someone else's.
              </p>
              <p className="font-elegant text-[26px] text-foreground/85 leading-[1.6] font-semibold">
                The Gita says: do your own work with honesty. Do not try to copy someone else's journey.
              </p>
              <div className="pt-[20px] border-t border-primary/20">
                <p className="font-display text-[24px] text-primary/90 italic font-bold">
                  Responsibility builds character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={6} total={total} />
  </SlideLayout>
);

export default SlideDuty;
