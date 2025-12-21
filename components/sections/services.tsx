import { ReactNode } from "react";
import MobileDevelopmentIllustration from "@/components/illustrations/mobile-development";
import DesktopDevelopmentIllustration from "@/components/illustrations/desktop-development";
import BackendDevelopmentIllustration from "@/components/illustrations/backend-development";
import { ServiceItem } from "./service-item";

interface Service {
  title: string;
  description: string;
  illustration: ReactNode;
}

export function Services() {
  const services: Service[] = [
    {
      title: "Desktop Application Development",
      description: "Custom desktop applications built with modern frameworks like Electron, React, and TypeScript. We create fast, responsive, and maintainable solutions that work seamlessly across platforms.",
      illustration: <DesktopDevelopmentIllustration />,
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences. Built with React Native, Swift, and Kotlin for performance and reliability.",
      illustration: <MobileDevelopmentIllustration />,
    },
    {
      title: "Web Development",
      description: "Modern web applications using Next.js, React, and TypeScript. SEO-optimized, fast-loading, and built with best practices for long-term maintainability.",
      illustration: <DesktopDevelopmentIllustration />,
    },
    {
      title: "UI/UX Design",
      description: "Clean, intuitive interfaces designed with your users in mind. We focus on accessibility, usability, and creating delightful experiences that drive engagement.",
      illustration: <MobileDevelopmentIllustration />,
    },
    {
      title: "Performance Optimization",
      description: "Speed matters. We optimize your applications for Core Web Vitals, reduce bundle sizes, and ensure smooth interactions that keep users engaged.",
      illustration: <BackendDevelopmentIllustration />,
    },
  ];

  return (
    <section id="services" className="relative bg-surface py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted">
            End-to-end digital solutions crafted with precision and care
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Subtle Vertical Line - Hidden on mobile, visible on desktop */}
          <div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-30"
            aria-hidden="true"
          />

          {/* Services List */}
          <div className="relative space-y-0 divide-y divide-border/20 lg:divide-y-0">
            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                description={service.description}
                illustration={service.illustration}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

