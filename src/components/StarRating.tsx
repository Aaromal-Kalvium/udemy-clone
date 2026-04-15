import { Star } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const fill = i <= Math.floor(rating) ? 1 : i - 1 < rating ? rating - (i - 1) : 0;
    stars.push(
      <span key={i} className="relative inline-block w-[14px] h-[14px]">
        <Star size={14} className="text-udemy-star absolute top-0 left-0" strokeWidth={0} fill="hsl(var(--border))" />
        <span className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
          <Star size={14} className="text-udemy-star" strokeWidth={0} fill="hsl(var(--udemy-star))" />
        </span>
      </span>
    );
  }
  return <span className="flex items-center gap-[1px]">{stars}</span>;
};

export default StarRating;
