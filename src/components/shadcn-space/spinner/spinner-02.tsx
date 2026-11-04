export default function SpinnerThrobber() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="text-foreground"
      style={{ animation: "spin 0.8s steps(8, end) infinite" }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="11"
          y="2.5"
          width="2"
          height="5"
          rx="1"
          fill="currentColor"
          fillOpacity={+(1 - (i / 8) * 0.85).toFixed(2)}
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
    </svg>
  );
}
