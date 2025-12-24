import { useState, useEffect } from "react";

const slides = [
  {
    tag: "#Big Fashion Sale",
    title1: "Limited Time Offer!",
    title2: "Up to ",
    highlight: "50% OFF!",
    description: "Redefine Your Everyday Style with our premium collection.",
    image: "/src/assets/hero_tshirts_1766560516438.png",
    bgGradient: "from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900",
  },
  {
    tag: "#Step Up Your Style",
    title1: "Premium Footwear",
    title2: "Exclusive ",
    highlight: "New Arrivals",
    description:
      "Walk with confidence in our latest designer footwear collection.",
    image: "/src/assets/footwear_showcase_1766567306963.png",
    bgGradient:
      "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
  },
  {
    tag: "#Luxury Essentials",
    title1: "Elegant Accessories",
    title2: "Style Meets ",
    highlight: "Perfection",
    description:
      "Complete your look with our curated range of premium accessories.",
    image: "/src/assets/accessories_showcase_1766567327766.png",
    bgGradient:
      "from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden min-h-[400px] flex items-center mb-8 sm:mb-12">
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        <div
          className={`w-full h-full bg-gradient-to-r ${slides[currentSlide].bgGradient}`}
        ></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 sm:px-12 py-10 transition-all duration-700">
        <div className="space-y-4 sm:space-y-6 text-center md:text-left transition-all duration-700 transform">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs sm:text-sm font-semibold tracking-wide animate-pulse">
            {slides[currentSlide].tag}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {slides[currentSlide].title1}
            <br />
            {slides[currentSlide].title2}
            <span className="italic font-extrabold text-gray-800 dark:text-gray-200">
              {slides[currentSlide].highlight}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
            {slides[currentSlide].description}
          </p>
          <div className="flex justify-center md:justify-start space-x-2 pt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary w-6 sm:w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center h-64 sm:h-80 overflow-hidden">
          <img
            key={currentSlide}
            alt={slides[currentSlide].title1}
            className="object-contain h-full drop-shadow-2xl transform rotate-[-3deg] sm:rotate-[-5deg] hover:rotate-0 transition-all duration-700 animate-in fade-in slide-in-from-right-8"
            src={slides[currentSlide].image}
          />
        </div>
      </div>
    </section>
  );
}
