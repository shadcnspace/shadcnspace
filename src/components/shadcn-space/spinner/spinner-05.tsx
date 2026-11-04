export default function SpinnerEllipsis() {
  return (
    <>
      <style>{`
        .spinner-ellipsis-dot {
          animation: spinner-ellipsis 1s ease-in-out infinite;
        }
        @keyframes spinner-ellipsis {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div className="flex items-center gap-1.5">
        {[0, 0.2, 0.4].map((delay, i) => (
          <span
            key={i}
            className="size-2 rounded-full bg-current spinner-ellipsis-dot"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    </>
  );
}
