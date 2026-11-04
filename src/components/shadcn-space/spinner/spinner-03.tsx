export default function SpinnerPinwheel() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="text-foreground animate-spin"
      style={{ animationDuration: "0.75s" }}
    >
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <path
          key={i}
          d="M12,12 Q15,9 13.5,4.5 Q11,3 9.5,6.5 Q8.5,9.5 12,12Z"
          fill="currentColor"
          fillOpacity={+(1 - (i / 6) * 0.8).toFixed(2)}
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}
