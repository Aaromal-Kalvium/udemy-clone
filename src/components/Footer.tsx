import { Link } from "react-router-dom";

const footerLinks = {
  col1: [
    "Udemy Business", "Teach on Udemy", "Get the app", "About us", "Contact us"
  ],
  col2: [
    "Careers", "Blog", "Help and Support", "Affiliate", "Investors"
  ],
  col3: [
    "Terms", "Privacy policy", "Cookie settings", "Sitemap", "Accessibility statement"
  ],
};

const Footer = () => (
  <footer className="bg-udemy-heading text-primary-foreground">
    <div className="udemy-container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.values(footerLinks).map((links, i) => (
          <ul key={i} className="space-y-2">
            {links.map((link) => (
              <li key={link}>
                <Link to="/" className="text-sm hover:underline opacity-80 hover:opacity-100 transition-opacity">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <div className="flex flex-col items-start gap-4">
          <button className="border border-primary-foreground px-4 py-2 text-sm font-medium flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            English
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20">
      <div className="udemy-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-extrabold tracking-tight">udemy</span>
        <span className="text-sm opacity-60">© 2024 Udemy, Inc.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
