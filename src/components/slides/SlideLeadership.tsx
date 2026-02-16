import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideLeadership = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/50 uppercase animate-fade-in-up">
        Chapter Seven
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px]">
        Leadership & Decision Making
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full flex gap-[60px]">
          <div className="flex-1 space-y-[28px]">
            <p className="font-elegant text-[28px] text-foreground/85 leading-[1.6]">
              Krishna does not impose decisions on Arjuna.
            </p>
            <p className="font-elegant text-[28px] text-foreground/85 leading-[1.6]">
              He <span className="text-primary">explains</span>, <span className="text-primary">guides</span>, and then allows Arjuna to <span className="text-primary">choose</span>.
            </p>
            <p className="font-elegant text-[28px] text-foreground/85 leading-[1.6]">
              This represents true leadership.
            </p>
          </div>
          <div className="flex-1">
            <div className="golden-border rounded-lg p-[40px] bg-secondary/30 space-y-[24px]">
              <p className="font-display text-[24px] text-primary/80">Modern Leadership</p>
              <p className="font-elegant text-[26px] text-foreground/80 leading-[1.6]">
                Is not about control — it is about empowering others to think clearly and act wisely.
              </p>
              <div className="pt-[20px] border-t border-primary/20">
                <p className="font-elegant text-[26px] text-primary/70 italic">
                  "Guidance is more powerful than pressure."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={9} total={total} />
  </SlideLayout>
);

export default SlideLeadership;
