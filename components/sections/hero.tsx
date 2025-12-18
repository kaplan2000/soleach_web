export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Building Digital Solutions That Matter
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Professional web development focused on creating fast, modern, and SEO-optimized websites. 
            Let's bring your ideas to life with clean code and thoughtful design.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent-hover"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="rounded-lg border border-muted px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

