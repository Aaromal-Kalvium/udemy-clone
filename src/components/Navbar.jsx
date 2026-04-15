import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/mockCourses";

const Navbar = ({ searchQuery, onSearchChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <>
      {/* Top promo bar */}
      <div className="bg-udemy-top-bar text-primary-foreground text-center py-2.5 text-sm">
        Learn all year |{" "}
        <span className="underline font-medium cursor-pointer">
          Save 25% on Personal Plan
        </span>
        . Terms apply.
      </div>

      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="flex items-center h-[72px] px-6 gap-3">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-extrabold tracking-tight text-udemy-heading">
              udemy
            </span>
          </Link>

          {/* Explore dropdown */}
          <div className="hidden lg:block relative">
            <button
              className="text-sm font-normal text-foreground hover:text-udemy-purple transition-colors px-3 py-2 flex items-center gap-1"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              Explore <ChevronDown size={14} />
            </button>
            {categoriesOpen && (
              <div
                className="absolute left-0 top-full bg-background border border-border shadow-lg w-64 py-2 z-50"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/?category=${encodeURIComponent(cat)}`}
                    className="block px-4 py-2 text-sm text-foreground hover:text-udemy-purple hover:bg-muted transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Search bar */}
          <div className="flex-1 hidden md:flex items-center border border-foreground rounded-full h-12 px-4 gap-2 bg-muted">
            <Search size={18} className="text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Right side links */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              className="text-sm text-foreground hover:text-udemy-purple transition-colors px-3 py-2 whitespace-nowrap"
            >
              Udemy Business
            </Link>
            <Link
              to="/"
              className="text-sm text-foreground hover:text-udemy-purple transition-colors px-3 py-2 whitespace-nowrap"
            >
              Teach on Udemy
            </Link>
          </div>

          {/* Cart */}
          <button className="p-2 relative">
            <ShoppingCart size={22} className="text-foreground" />
          </button>

          {/* Auth buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button className="border border-foreground text-sm font-bold px-4 py-2.5 hover:bg-muted transition-colors text-foreground">
              Log in
            </button>
            <button className="bg-udemy-heading text-primary-foreground text-sm font-bold px-4 py-2.5 hover:bg-udemy-text transition-colors">
              Sign up
            </button>
          </div>

          {/* Globe */}
          <button className="hidden lg:flex border border-foreground p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center border border-foreground rounded-full h-10 px-3 gap-2 bg-muted">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/?category=${encodeURIComponent(cat)}`}
                className="block text-sm text-foreground py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </Link>
            ))}
            <div className="border-t border-border pt-3 space-y-2">
              <button className="w-full border border-foreground text-sm font-bold py-2.5 text-foreground">
                Log in
              </button>
              <button className="w-full bg-udemy-heading text-primary-foreground text-sm font-bold py-2.5">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

