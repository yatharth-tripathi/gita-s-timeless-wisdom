import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";

const SlideReferences = ({ total }: { total: number }) => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[80px]">
      <h2 className="font-display text-[52px] text-gradient-gold slide-glow animate-fade-in-up font-bold text-center">
        References
      </h2>
      <OrnamentDivider className="my-[30px] animate-fade-in-up-delay-1" />

      <div className="flex-1 flex items-center justify-center animate-fade-in-up-delay-2">
        <div className="max-w-[1400px] space-y-[28px]">
          {[
            "The Bhagavad Gita - Translation by Eknath Easwaran",
            "Swami Vivekananda's Complete Works - Advaita Ashrama Publication",
            "The Gita: A New Translation of Hindu Sacred Scripture - Stephen Mitchell",
            "Management Lessons from the Bhagavad Gita - Dr. Radhakrishnan Pillai",
            "Bhagavad Gita As It Is - A.C. Bhaktivedanta Swami Prabhupada",
            "The Art of Leadership and Management from Bhagavad Gita - Research Papers",
            "NPTEL Course: Indian Knowledge System and Information Retrieval",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-[20px]">
              <span className="text-primary/60 text-[22px] mt-[2px]">{i + 1}.</span>
              <p className="font-elegant text-[26px] text-foreground/90 leading-[1.5] font-semibold">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center animate-fade-in-up-delay-3">
        <p className="font-display text-[24px] text-primary/70 tracking-[4px]">
          ॐ शांतिः शांतिः शांतिः
        </p>
      </div>
    </div>
    <SlideNumber current={12} total={total} />
  </SlideLayout>
);

export default SlideReferences;
