import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const CourseCard = ({ course }) => (
  <Link to={`/course/${course.id}`} className="group block min-w-[240px]">
    <div className="overflow-hidden border border-border">
      <img
        src={course.image}
        alt={course.title}
        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
    </div>
    <div className="pt-2 pb-4">
      <h3 className="text-sm font-bold text-udemy-heading leading-tight line-clamp-2 group-hover:text-udemy-purple transition-colors">
        {course.title}
      </h3>
      <p className="text-xs text-udemy-text-muted mt-0.5 truncate">{course.instructor}</p>
      <div className="flex items-center gap-1 mt-0.5">
        <span className="text-sm font-bold text-udemy-sale">{course.rating.toFixed(1)}</span>
        <StarRating rating={course.rating} />
        <span className="text-xs text-udemy-text-muted">({course.reviewCount.toLocaleString()})</span>
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        <span className="text-base font-bold text-udemy-heading">${course.price}</span>
        <span className="text-sm text-udemy-text-muted line-through">${course.originalPrice}</span>
      </div>
      {course.bestseller && (
        <span className="inline-block mt-1.5 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5">
          Bestseller
        </span>
      )}
    </div>
  </Link>
);

export default CourseCard;

