interface SlideNumberProps {
  current: number;
  total: number;
}

const SlideNumber = ({ current, total }: SlideNumberProps) => (
  <div className="absolute bottom-[40px] right-[60px] font-display text-primary/60 text-[18px] tracking-[4px]">
    {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
  </div>
);

export default SlideNumber;
