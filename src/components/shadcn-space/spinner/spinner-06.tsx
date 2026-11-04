export default function SpinnerBars() {
  return (
    <>
      <style>{`
        .spinner-bars-bar {
          height: 6px;
          animation: spinner-bars 0.8s ease-in-out infinite;
        }
        @keyframes spinner-bars {
          0%, 100% { height: 6px; }
          50% { height: 20px; }
        }
      `}</style>
      <div className="flex items-end gap-1 h-5">
        {[0, 0.2, 0.4].map((delay, i) => (
          <span
            key={i}
            className="w-1.5 rounded-sm bg-current spinner-bars-bar"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    </>
  );
}
