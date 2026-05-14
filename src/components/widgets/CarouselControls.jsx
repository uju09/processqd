export function CarouselControls({ canGoPrev, canGoNext, onPrev, onNext }) {
  return (
    <div className="flex justify-end gap-3 mt-8 pr-4 md:pr-0">
      <button
        className={`w-10 h-10 md:w-12 md:h-12 min-w-10 min-h-10 flex-shrink-0 border border-gray-300 bg-white text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors rounded-lg ${canGoPrev ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className={`w-10 h-10 md:w-12 md:h-12 min-w-10 min-h-10 flex-shrink-0 border border-blue-500 bg-white text-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors rounded-lg ${canGoNext ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}