import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideIntroduction = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[100px] py-[60px]">
      <h2 className="font-display text-[48px] text-gradient-gold slide-glow animate-fade-in-up font-bold">
        Introduction
      </h2>
      <OrnamentDivider className="my-[25px] animate-fade-in-up-delay-1 !justify-start" />

      <div className="flex-1 grid grid-cols-2 gap-[40px] animate-fade-in-up-delay-2">
        {/* Left Column */}
        <div className="space-y-[24px]">
          {/* LO */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-[20px] rounded-lg border-l-4 border-primary/60">
            <h3 className="font-display text-[22px] text-primary font-bold mb-[10px]">
              LO (Learning Outcome):
            </h3>
            <p className="font-elegant text-[18px] text-foreground/85 leading-[1.6]">
              Understand and analyze the role of the Bhagavad Gita in developing effective managerial skills such as decision-making, leadership, ethical behavior, and stress management.
            </p>
          </div>

          {/* CO */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-[20px] rounded-lg border-l-4 border-primary/60">
            <h3 className="font-display text-[22px] text-primary font-bold mb-[10px]">
              CO (Course Outcome):
            </h3>
            <p className="font-elegant text-[18px] text-foreground/85 leading-[1.6]">
              Comprehend the importance of the teachings of the Bhagavad Gita in applying ethical values, responsibility, emotional balance, and leadership principles in modern managerial life.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-[24px]">
          {/* Bloom's Taxonomy */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-[20px] rounded-lg border-l-4 border-primary/60">
            <h3 className="font-display text-[22px] text-primary font-bold mb-[10px]">
              Bloom's Taxonomy Level:
            </h3>
            <p className="font-elegant text-[20px] text-foreground/85 leading-[1.6] font-semibold">
              Understand and Analyze (BL 2, 4)
            </p>
          </div>

          {/* PI */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-[20px] rounded-lg border-l-4 border-primary/60">
            <h3 className="font-display text-[22px] text-primary font-bold mb-[10px]">
              PI (Performance Indicator):
            </h3>
            <p className="font-elegant text-[18px] text-foreground/85 leading-[1.6]">
              <span className="text-primary/80 font-semibold">5.3.1</span> Discuss the relevance, effectiveness, and application of the principles of the Bhagavad Gita in decision-making, leadership, and management practices.
            </p>
          </div>

          {/* Bhagavad Gita highlight */}
          <div className="flex items-center justify-center mt-[20px]">
            <div className="text-center">
              <span className="font-display text-[28px] text-primary/70">ॐ</span>
              <p className="font-display text-[32px] text-gradient-gold font-bold mt-[10px]">
                Bhagavad Gita
              </p>
              <p className="font-elegant text-[18px] text-foreground/70 italic mt-[5px]">
                The Song of the Divine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideNumber current={2} total={total} />
  </SlideLayout>
);

export default SlideIntroduction;
