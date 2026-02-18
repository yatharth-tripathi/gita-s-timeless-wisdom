import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideLeadership = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter Seven
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Leadership & Decision Making
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full flex gap-[60px]">
          <div className="flex-1 space-y-[28px]">
            <p className="font-elegant text-[28px] text-foreground/90 leading-[1.6] font-semibold">
              Krishna never forces Arjuna to do anything.
            </p>
            <p className="font-elegant text-[28px] text-foreground/90 leading-[1.6] font-semibold">
              He <span className="text-primary font-bold">explains</span>, <span className="text-primary font-bold">guides</span>, and then lets Arjuna <span className="text-primary font-bold">decide for himself</span>.
            </p>
            <p className="font-elegant text-[28px] text-foreground/90 leading-[1.6] font-semibold">
              That is what real leadership looks like.
            </p>
          </div>
          <div className="flex-1">
            <div className="golden-border rounded-lg p-[40px] bg-secondary/30 space-y-[24px]">
              <p className="font-display text-[24px] text-primary/90 font-bold">Modern Leadership</p>
              <p className="font-elegant text-[26px] text-foreground/85 leading-[1.6] font-semibold">
                Is not about controlling people. It is about helping others think clearly and act wisely.
              </p>
              <div className="pt-[20px] border-t border-primary/20">
                <p className="font-elegant text-[26px] text-primary/80 italic font-semibold">
                  "Guidance is always more powerful than pressure."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={10} total={total} />
  </SlideLayout>
);

export default SlideLeadership;
