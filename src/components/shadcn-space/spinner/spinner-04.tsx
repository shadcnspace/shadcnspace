export default function SpinnerCircleFilled() {
  const r = 9;
  const c = +(2 * Math.PI * r).toFixed(2);

  return (
    <>
      <style>{`
        .spinner-circle-arc {
          transform-box: fill-box;
          transform-origin: center;
          animation: spinner-circle-spin 1s linear infinite;
        }
        @keyframes spinner-circle-spin {
          from { transform: rotate(-90deg); }
          to { transform: rotate(270deg); }
        }
      `}</style>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
        <circle cx="12" cy="12" r={r} stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.2" />
        <circle
          cx="12"
          cy="12"
          r={r}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={`${+(c * 0.25).toFixed(2)} ${+(c * 0.75).toFixed(2)}`}
          className="spinner-circle-arc"
        />
      </svg>
    </>
  );
}
