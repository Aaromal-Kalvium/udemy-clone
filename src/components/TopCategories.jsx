import { categories } from "@/data/mockCourses";

const TopCategories = () => (
  <section className="udemy-container py-10">
    <h2 className="text-2xl font-bold text-udemy-heading">Top categories</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
      {categories.slice(0, 8).map((cat) => (
        <div key={cat} className="group cursor-pointer">
          <div className="bg-muted aspect-[4/3] flex items-center justify-center group-hover:shadow-md transition-shadow">
            <span className="text-5xl opacity-30">📚</span>
          </div>
          <p className="text-sm font-bold text-udemy-heading mt-2">{cat}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TopCategories;

