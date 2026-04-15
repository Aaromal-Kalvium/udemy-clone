import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, Award, Users, CheckCircle2, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import CourseCarousel from "@/components/CourseCarousel";
import { courses } from "@/data/mockCourses";
import { useState } from "react";

const CourseDetails = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-udemy-heading">Course not found</h1>
            <Link to="/" className="text-udemy-purple underline mt-4 inline-block">Back to home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedCourses = courses.filter((c) => c.category === course.category && c.id !== course.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Dark header */}
      <section className="bg-udemy-heading text-primary-foreground">
        <div className="udemy-container py-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-4">
            <ArrowLeft size={16} /> Back to courses
          </Link>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <p className="text-sm text-udemy-purple font-medium mb-2">{course.category}</p>
              <h1 className="text-2xl lg:text-3xl font-bold leading-tight">{course.title}</h1>
              <p className="text-base mt-3 opacity-90">{course.description}</p>

              <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
                {course.bestseller && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5">Bestseller</span>
                )}
                <span className="font-bold text-udemy-star">{course.rating.toFixed(1)}</span>
                <StarRating rating={course.rating} />
                <span className="opacity-70">({course.reviewCount.toLocaleString()} ratings)</span>
                <span className="opacity-70">{course.students.toLocaleString()} students</span>
              </div>

              <p className="text-sm mt-2 opacity-70">Created by <span className="underline">{course.instructor}</span></p>
              <p className="text-sm mt-1 opacity-70">Last updated {course.lastUpdated}</p>
            </div>

            {/* Price card on desktop */}
            <div className="hidden lg:block w-[340px] flex-shrink-0">
              <div className="bg-background text-foreground shadow-lg">
                <img src={course.image} alt={course.title} className="w-full aspect-video object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-udemy-heading">${course.price}</span>
                    <span className="text-base text-udemy-text-muted line-through">${course.originalPrice}</span>
                    <span className="text-base font-medium text-udemy-heading">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                    </span>
                  </div>
                  <button className="w-full bg-udemy-purple text-primary-foreground font-bold py-3 text-base hover:bg-udemy-purple-dark transition-colors">
                    Add to cart
                  </button>
                  <button className="w-full border border-foreground font-bold py-3 text-base mt-2 text-foreground hover:bg-muted transition-colors">
                    Buy now
                  </button>
                  <p className="text-xs text-center text-udemy-text-muted mt-3">30-Day Money-Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile price bar */}
      <div className="lg:hidden sticky bottom-0 bg-background border-t border-border p-4 flex items-center gap-3 z-50">
        <div>
          <span className="text-xl font-bold text-udemy-heading">${course.price}</span>
          <span className="text-sm text-udemy-text-muted line-through ml-2">${course.originalPrice}</span>
        </div>
        <button className="flex-1 bg-udemy-purple text-primary-foreground font-bold py-3 text-sm">
          Add to cart
        </button>
      </div>

      {/* Course content */}
      <div className="udemy-container py-8 max-w-4xl">
        {/* What you'll learn */}
        <div className="border border-border p-6 mb-8">
          <h2 className="text-xl font-bold text-udemy-heading mb-4">What you'll learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.whatYouLearn.map((item) => (
              <div key={item} className="flex gap-2">
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-udemy-text" />
                <span className="text-sm text-udemy-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course includes */}
        <h2 className="text-xl font-bold text-udemy-heading mb-4">This course includes:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            { icon: <PlayCircle size={18} />, text: `${course.hours} hours on-demand video` },
            { icon: <BookOpen size={18} />, text: `${course.lectures} lectures` },
            { icon: <Clock size={18} />, text: "Full lifetime access" },
            { icon: <Award size={18} />, text: "Certificate of completion" },
            { icon: <Users size={18} />, text: `${course.students.toLocaleString()} students enrolled` },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-sm text-udemy-text">
              <span className="text-udemy-text-muted">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Instructor */}
        <h2 className="text-xl font-bold text-udemy-heading mb-4">Instructor</h2>
        <div className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-udemy-purple rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
            {course.instructor.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <h3 className="font-bold text-udemy-link underline">{course.instructor}</h3>
            <p className="text-sm text-udemy-text-muted mt-1">
              Professional instructor with extensive teaching experience
            </p>
            <div className="flex gap-4 mt-2 text-sm text-udemy-text-muted">
              <span>⭐ {course.rating} Instructor Rating</span>
              <span>👥 {course.students.toLocaleString()} Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related courses */}
      {relatedCourses.length > 0 && (
        <CourseCarousel title="More courses you might like" courses={relatedCourses} />
      )}

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetails;

