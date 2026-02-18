import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideKarmaYoga = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <p className="font-display text-[20px] tracking-[6px] text-primary/60 uppercase animate-fade-in-up font-bold">
        Chapter Two
      </p>
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up-delay-1 mt-[10px] font-bold">
        Karma Yoga: Focus on Action
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center animate-fade-in-up-delay-2">
        <div className="w-full">
          <div className="golden-border rounded-lg p-[50px] bg-secondary/20 text-center mb-[40px]">
            <p className="font-elegant text-[36px] text-primary italic leading-[1.5] font-bold">
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
            </p>
            <p className="font-body text-[24px] text-foreground/70 mt-[16px] font-semibold">
              You have the right to act, but never to the fruits of action.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {[
              { label: "Stress increases", desc: "when we only chase outcomes" },
              { label: "Peace increases", desc: "when we focus on the work itself" },
              { label: "Discipline grows", desc: "through honest, sincere effort" },
              { label: "Success follows", desc: "naturally when effort is real" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-[16px]">
                <span className="text-primary text-[22px]">✦</span>
                <div>
                  <p className="font-display text-[24px] text-primary/90 font-bold">{item.label}</p>
                  <p className="font-elegant text-[24px] text-foreground/80 font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={5} total={total} />
  </SlideLayout>
);

export default SlideKarmaYoga;
