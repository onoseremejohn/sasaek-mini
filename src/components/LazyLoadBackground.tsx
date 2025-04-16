import React, { useEffect, useRef, useState } from "react";

interface LazyLoadBackgroundProps {
  backgroundImage: string;
  children?: React.ReactNode;
  className?: string;
  backgroundFallback?: string;
}

const LazyLoadBackground: React.FC<LazyLoadBackgroundProps> = ({
  backgroundImage,
  children,
  className,
  backgroundFallback,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
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
  }, [ref]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: isVisible ? `url(${backgroundImage})` : "none",
        backgroundColor: backgroundFallback,
      }}
    >
      {children}
    </div>
  );
};

export default LazyLoadBackground;
