import { ReactNode } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  illustration: ReactNode;
  isReversed: boolean;
}

export function ServiceItem({ title, description, illustration, isReversed }: ServiceItemProps) {
  return (
    <div 
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-20"
      data-service-item
    >
      {/* Text Content */}
      <div
        className={`space-y-4 ${isReversed ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      {/* Illustration */}
      <div
        className={`${isReversed ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}
      >
        <div className="w-full max-w-md mx-auto lg:max-w-full">
          {illustration}
        </div>
      </div>
    </div>
  );
}

