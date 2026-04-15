import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FeaturedCategories from "@/components/FeaturedCategories";
import CourseCarousel from "@/components/CourseCarousel";
import CategoryTabs from "@/components/CategoryTabs";
import TrustedBanner from "@/components/TrustedBanner";
import TopCategories from "@/components/TopCategories";
import CourseCardSkeleton from "@/components/CourseCardSkeleton";
import { courses } from "@/data/mockCourses";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(
    () =>
      searchQuery.trim()
        ? courses.filter(
            (c) =>
              c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : courses,
    [searchQuery]
  );

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {!isSearching && <HeroBanner />}

      {isSearching ? (
        <section className="udemy-container py-8">
          <h2 className="text-2xl font-bold text-udemy-heading mb-1">
            {filtered.length} results for "{searchQuery}"
          </h2>
          <p className="text-sm text-udemy-text-muted mb-6">
            {filtered.length === 0 ? "Try different keywords" : "Explore relevant courses below"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {filtered.map((c) => (
              <div key={c.id}>
                {loading ? (
                  <CourseCardSkeleton />
                ) : (
                  <span className="block">
                    {/* inline import to avoid circular — use CourseCard */}
                    <CourseCardInline course={c} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          <FeaturedCategories />
          {loading ? (
            <section className="udemy-container py-8">
              <div className="h-6 bg-muted rounded w-64 mb-4" />
              <div className="flex gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <CourseCardSkeleton key={i} />
                ))}
              </div>
            </section>
          ) : (
            <>
              <CourseCarousel title="Students are viewing" courses={filtered.slice(0, 8)} />
              <CategoryTabs courses={filtered} />
              <CourseCarousel title="Top courses in Development" subtitle="Courses to get you started" courses={filtered.filter(c => c.category === "Development")} />
            </>
          )}
          <TrustedBanner />
          <TopCategories />
        </>
      )}

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

/* Inline card to avoid import issues in search results */
import { Link } from "react-router-dom";
import StarRating from "@/components/StarRating";
import type { Course } from "@/data/mockCourses";

const CourseCardInline = ({ course }: { course: Course }) => (
  <Link to={`/course/${course.id}`} className="group block">
    <div className="overflow-hidden border border-border">
      <img src={course.image} alt={course.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200" loading="lazy" />
    </div>
    <div className="pt-2 pb-4">
      <h3 className="text-sm font-bold text-udemy-heading leading-tight line-clamp-2 group-hover:text-udemy-purple transition-colors">{course.title}</h3>
      <p className="text-xs text-udemy-text-muted mt-0.5">{course.instructor}</p>
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
        <span className="inline-block mt-1.5 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5">Bestseller</span>
      )}
    </div>
  </Link>
);

export default Index;
