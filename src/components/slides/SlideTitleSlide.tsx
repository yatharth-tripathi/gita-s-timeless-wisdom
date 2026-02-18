import SlideLayout from "@/components/SlideLayout";
import SlideNumber from "@/components/SlideNumber";
import OrnamentDivider from "@/components/OrnamentDivider";
import spiritualBg from "@/assets/spiritual-bg.jpg";

const SlideTitleSlide = ({ total }: { total: number }) => (
  <SlideLayout variant="title" backgroundImage={spiritualBg}>
    <div className="flex-1 flex flex-col items-center justify-center px-[100px] py-[60px]">
      {/* Institute Name */}
      <h1 className="font-display text-[36px] text-gradient-gold slide-glow animate-fade-in-up font-bold tracking-wide text-center uppercase">
        Shri G.S. Institute of Technology And Science
      </h1>
      <p className="font-display text-[24px] text-primary/80 animate-fade-in-up-delay-1 mt-[8px] tracking-[2px]">
        Department of Computer Engineering
      </p>

      {/* Logo */}
      <div className="my-[30px] animate-fade-in-up-delay-2">
        <img
          src="/sgsits-logo.png"
          alt="SGSITS Logo"
          className="w-[140px] h-[140px] object-contain"
        />
      </div>

      {/* Course Name */}
      <p className="font-elegant text-[22px] text-primary/70 animate-fade-in-up-delay-2 tracking-[4px] uppercase">
        Essence of Indian Knowledge and Tradition (EIKT)
      </p>

      <OrnamentDivider className="my-[25px] animate-fade-in-up-delay-3" />

      {/* Title */}
      <h2 className="font-display text-[52px] leading-[1.2] text-center text-gradient-gold slide-glow animate-fade-in-up-delay-3 font-bold">
        Relevance of the Bhagavad Gita
      </h2>
      <h3 className="font-display text-[36px] text-center text-primary/80 animate-fade-in-up-delay-3 font-bold">
        in Today's Life
      </h3>

      {/* Subtitle */}
      <p className="font-elegant text-[24px] text-foreground/80 text-center italic animate-fade-in-up-delay-3 mt-[15px] font-semibold">
        Understanding Ancient Wisdom in a Modern World
      </p>

      {/* Submitted info */}
      <div className="flex justify-between w-full mt-[40px] px-[60px] animate-fade-in-up-delay-4">
        <div className="text-left">
          <p className="font-display text-[18px] text-primary/90 font-bold mb-[8px]">Submitted By:</p>
          <p className="font-body text-[16px] text-foreground/80 leading-[1.8]">
            Divya Parmar<br />
            Reshma Gond<br />
            Yatharth Urmaliya
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-[18px] text-primary/90 font-bold mb-[8px]">Guided By:</p>
          <p className="font-body text-[16px] text-foreground/80 leading-[1.8]">
            Ms. Shweta Sudele<br />
            Ms. Ishita Reja<br />
            Ms. Bhumika Rawat
          </p>
        </div>
      </div>
    </div>
    <SlideNumber current={1} total={total} />
  </SlideLayout>
);

export default SlideTitleSlide;
