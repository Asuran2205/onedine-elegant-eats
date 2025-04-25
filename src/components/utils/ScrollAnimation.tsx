
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  animation?: "fade-up" | "fade-right" | "fade-left" | "zoom" | "slide-up";
}

export function ScrollAnimation({
  children,
  threshold = 0.1,
  delay = 0,
  animation = "fade-up",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-right":
        return "translate-x-[-50px]";
      case "fade-left":
        return "translate-x-[50px]";
      case "zoom":
        return "scale-95";
      case "slide-up":
        return "translate-y-[30px]";
      default:
        return "translate-y-[20px]";
    }
  };

  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll opacity-0 transition-all duration-700 ease-out ${getAnimationClass()}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: `${getAnimationClass()}`,
      }}
    >
      {children}
    </div>
  );
}

