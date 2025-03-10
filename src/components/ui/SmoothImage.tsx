
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt,
  className,
  imgClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`image-${props.id}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [props.id]);
  
  return (
    <div
      id={`image-${props.id}`}
      className={cn(
        'overflow-hidden relative',
        className
      )}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'transition-all duration-700 ease-in-out',
            isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105',
            imgClassName
          )}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
      {(!isLoaded || !isInView) && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
    </div>
  );
};

export default SmoothImage;
