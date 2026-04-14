"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: { en: "Rajesh Kumar", hi: "राजेश कुमार" },
    location: { en: "Panipat", hi: "पानीपत" },
    text: {
      en: "After years of chronic back pain, the naturopathy treatment here gave me a new life. The doctors are incredibly knowledgeable and caring.",
      hi: "कई सालों की पीठ दर्द के बाद, यहां की प्राकृतिक चिकित्सा ने मुझे नया जीवन दिया। डॉक्टर बहुत जानकार और देखभाल करने वाले हैं।",
    },
    rating: 5,
  },
  {
    name: { en: "Sunita Sharma", hi: "सुनीता शर्मा" },
    location: { en: "Delhi", hi: "दिल्ली" },
    text: {
      en: "The yoga therapy program transformed my health. I feel more energetic and peaceful than ever before. Highly recommend!",
      hi: "योग चिकित्सा कार्यक्रम ने मेरे स्वास्थ्य को बदल दिया। मैं पहले से कहीं अधिक ऊर्जावान और शांत महसूस करती हूं। अत्यधिक अनुशंसित!",
    },
    rating: 5,
  },
  {
    name: { en: "Amit Verma", hi: "अमित वर्मा" },
    location: { en: "Karnal", hi: "करनाल" },
    text: {
      en: "The Panchkarma treatment was life-changing. The detox program helped me lose weight and improve my digestion significantly.",
      hi: "पंचकर्म उपचार जीवन बदलने वाला था। डिटॉक्स कार्यक्रम ने मुझे वजन कम करने और पाचन में काफी सुधार करने में मदद की।",
    },
    rating: 5,
  },
  {
    name: { en: "Priya Gupta", hi: "प्रिया गुप्ता" },
    location: { en: "Sonipat", hi: "सोनीपत" },
    text: {
      en: "As a working professional, the stress management program was exactly what I needed. The meditation sessions are truly transformative.",
      hi: "एक कामकाजी पेशेवर के रूप में, तनाव प्रबंधन कार्यक्रम ठीक वही था जो मुझे चाहिए था। ध्यान सत्र वास्तव में परिवर्तनकारी हैं।",
    },
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { language } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            {language === "en" ? "What Our Patients Say" : "हमारे रोगी क्या कहते हैं"}
          </h2>
          <p className="opacity-80">
            {language === "en"
              ? "Thousands of lives transformed through natural healing"
              : "प्राकृतिक उपचार से हजारों जीवन बदले"}
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-0 lg:-left-8 opacity-20">
            <Quote className="w-16 h-16" />
          </div>

          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                      &ldquo;{testimonial.text[language]}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="font-serif text-xl text-accent">
                          {testimonial.name[language][0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">
                          {testimonial.name[language]}
                        </p>
                        <p className="opacity-70">{testimonial.location[language]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
