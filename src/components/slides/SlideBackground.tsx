import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideBackground = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <h2 className="font-display text-[52px] text-gradient-gold slide-glow animate-fade-in-up">
        Background of the Gita
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1 !justify-start" />
      <div className="flex-1 flex items-center">
        <div className="space-y-[28px] animate-fade-in-up-delay-2">
          {[
            "The Bhagavad Gita is a dialogue between Krishna and Arjuna on the battlefield of Kurukshetra.",
            "Arjuna, a skilled warrior, suddenly feels emotionally overwhelmed.",
            "He becomes confused, anxious, and unable to take action.",
            "Instead of forcing him, Krishna guides him.",
            "This conversation becomes a timeless guide for human life.",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-[20px]">
              <span className="text-primary/60 text-[24px] mt-[2px]">✦</span>
              <p className="font-elegant text-[30px] text-foreground/85 leading-[1.6]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <SlideNumber current={2} total={total} />
  </SlideLayout>
);

export default SlideBackground;
