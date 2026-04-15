import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { featuredCategories } from "@/data/mockCourses";

const FeaturedCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    setCanScrollLeft(scrollRef.current.scrollLeft > 0);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="udemy-container py-10">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-[280px] flex-shrink-0">
          <h2 className="text-2xl font-bold text-udemy-heading leading-tight">
            Learn <em>essential</em> career and life skills
          </h2>
          <p className="text-sm text-udemy-text-muted mt-3">
            Udemy helps you build in-demand skills fast and advance your career in a changing job market
          </p>
        </div>

        <div className="relative flex-1 min-w-0">
          {canScrollLeft && (
            <button onClick={() => scroll("left")} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-udemy-heading text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <ChevronLeft size={24} />
            </button>
          )}

          <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scroll-smooth" style={{ scrollbarWidth: "none" }}>
            {featuredCategories.map((cat) => (
              <div key={cat.name} className="flex-shrink-0 w-[250px] group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <img src={cat.image} alt={cat.name} className="w-full h-[190px] object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="flex items-center justify-between mt-3 px-1">
                  <span className="text-sm font-medium text-udemy-heading">{cat.name}</span>
                  <ArrowRight size={16} className="text-udemy-heading group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll("right")} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-udemy-heading text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-2 rounded-full transition-all ${i === 0 ? "w-6 bg-udemy-purple" : "w-2 bg-border"}`} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
