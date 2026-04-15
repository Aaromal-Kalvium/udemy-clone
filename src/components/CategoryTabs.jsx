import { useState } from "react";
import CourseCard from "./CourseCard";

const tabs = ["Python", "Excel", "Web Development", "JavaScript", "Data Science", "AWS Certification", "Drawing"];

const CategoryTabs = ({ courses }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Cycle through courses based on tab index
  const displayCourses = courses.slice(activeTab % courses.length).concat(courses.slice(0, activeTab % courses.length)).slice(0, 5);

  return (
    <section className="udemy-container py-10">
      <h2 className="text-2xl font-bold text-udemy-heading">A broad selection of courses</h2>
      <p className="text-base text-udemy-text mt-1">
        Choose from over 220,000 online video courses with new additions published every month
      </p>

      {/* Tabs */}
      <div className="flex gap-0 mt-5 overflow-x-auto border-b border-border" style={{ scrollbarWidth: "none" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`text-sm font-bold whitespace-nowrap px-4 py-3 border-b-2 transition-colors ${
              i === activeTab
                ? "border-udemy-purple text-udemy-purple"
                : "border-transparent text-udemy-text-muted hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-5 border border-border p-6">
        <h3 className="text-xl font-bold text-udemy-heading">
          Expand your career opportunities with {tabs[activeTab]}
        </h3>
        <p className="text-sm text-udemy-text mt-2 max-w-2xl">
          Take one of Udemy's range of {tabs[activeTab]} courses and learn how to code and build projects. Whether you're a beginner or looking to advance your skills, there's a course for you.
        </p>
        <button className="mt-4 border border-foreground text-sm font-bold px-4 py-2.5 text-foreground hover:bg-muted transition-colors">
          Explore {tabs[activeTab]}
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;

