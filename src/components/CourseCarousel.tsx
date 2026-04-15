import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import type { Course } from "@/data/mockCourses";

interface CourseCarouselProps {
  title: string;
  subtitle?: string;
  courses: Course[];
}

const CourseCarousel = ({ title, subtitle, courses }: CourseCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    setCanScrollLeft(scrollRef.current.scrollLeft > 0);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="udemy-container py-8">
      <h2 className="text-2xl font-bold text-udemy-heading">{title}</h2>
      {subtitle && <p className="text-base text-udemy-text mt-1">{subtitle}</p>}

      <div className="relative mt-4 group/carousel">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/3 z-10 bg-udemy-heading text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {courses.map((course) => (
            <div key={course.id} className="flex-shrink-0 w-[240px]">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/3 z-10 bg-udemy-heading text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default CourseCarousel;
