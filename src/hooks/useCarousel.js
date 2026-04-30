import { useState, useCallback } from 'react';

export function useCarousel(totalItems, visibleItems = 4) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canGoNext = currentIndex + visibleItems < totalItems;
  const canGoPrev = currentIndex > 0;

  const goNext = useCallback(() => {
    if (canGoNext) setCurrentIndex(prev => prev + 1);
  }, [canGoNext]);

  const goPrev = useCallback(() => {
    if (canGoPrev) setCurrentIndex(prev => prev - 1);
  }, [canGoPrev]);

  const goTo = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalItems - visibleItems)));
  }, [totalItems, visibleItems]);

  return { currentIndex, canGoNext, canGoPrev, goNext, goPrev, goTo };
}