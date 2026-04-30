export function CarouselControls({ canGoPrev, canGoNext, onPrev, onNext }) {
  return (
    <div className="flex justify-end gap-2 mt-8">
      <button
        className={`w-10 h-10 border border-gray-300 bg-white text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${canGoPrev ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={onPrev}
        disabled={!canGoPrev}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className={`w-10 h-10 border border-cyan-500 bg-white text-cyan-500 flex items-center justify-center cursor-pointer hover:bg-cyan-50 transition-colors ${canGoNext ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={onNext}
        disabled={!canGoNext}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}