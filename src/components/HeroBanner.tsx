const HeroBanner = () => (
  <section className="relative bg-udemy-banner-bg overflow-hidden">
    <div className="udemy-container relative z-10 py-8 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Text card */}
        <div className="bg-background shadow-md p-8 max-w-md my-6 lg:my-12 z-10 relative">
          <h1 className="text-3xl lg:text-[2rem] font-bold text-udemy-heading leading-tight mb-3">
            Save 25% on your Personal Plan today
          </h1>
          <p className="text-base text-udemy-text mb-5">
            Build AI and career skills all year with Personal Plan.
          </p>
          <button className="bg-udemy-purple text-primary-foreground font-bold text-base px-6 py-3 hover:bg-udemy-purple-dark transition-colors">
            Save now
          </button>
        </div>

        {/* Hero illustration area */}
        <div className="hidden lg:block flex-1 h-[300px] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Decorative shapes */}
            <div className="w-48 h-48 bg-udemy-banner-accent/30 rotate-12 absolute right-20 top-8" />
            <div className="w-32 h-32 bg-udemy-success/20 rounded-full absolute right-40 bottom-4" />
            <div className="w-24 h-24 bg-udemy-star/20 rotate-45 absolute right-64 top-12" />
          </div>
        </div>
      </div>
    </div>

    {/* Background decorative elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-udemy-banner-accent/10 to-transparent hidden lg:block" />
  </section>
);

export default HeroBanner;
