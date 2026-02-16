const OrnamentDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[1px] w-[80px] bg-gradient-to-r from-transparent to-primary/50" />
    <svg width="20" height="20" viewBox="0 0 20 20" className="text-primary/70">
      <path
        d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z"
        fill="currentColor"
      />
    </svg>
    <div className="h-[1px] w-[80px] bg-gradient-to-l from-transparent to-primary/50" />
  </div>
);

export default OrnamentDivider;
