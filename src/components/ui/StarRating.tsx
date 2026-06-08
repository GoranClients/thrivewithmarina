export function StarRating({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M11 1.5L13.47 7.26L19.5 7.86L15.25 12.14L16.45 18.5L11 15.26L5.55 18.5L6.75 12.14L2.5 7.86L8.53 7.26L11 1.5Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
