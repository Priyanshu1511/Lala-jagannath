"use client"

import Link from "next/link"
import { ArrowRight, Phone, Users, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Lotus Pattern SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg
          width="600"
          height="600"
          viewBox="0 0 100 100"
          className="text-primary"
          fill="currentColor"
        >
          <path d="M50 10 C60 30, 80 40, 90 50 C80 60, 60 70, 50 90 C40 70, 20 60, 10 50 C20 40, 40 30, 50 10 Z" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">25+ Years of Excellence</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t("hero.title")}
              </h1>
              <p className="text-lg sm:text-xl text-accent font-medium">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="tel:+919999999999">
                  <Phone className="mr-2 w-5 h-5" />
                  {t("hero.callNow")}
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-white text-xs font-medium"
                    >
                      {i}L+
                    </div>
                  ))}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-foreground">{t("hero.trustedBy")}</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 animate-pulse" />
              
              {/* Inner Content */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-background to-secondary border border-border/50 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-5xl text-primary">ॐ</span>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold text-foreground">Vedic Healing</p>
                    <p className="text-muted-foreground">Mind • Body • Soul</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="text-center">
                  <p className="font-serif text-xl font-bold text-primary">25+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 w-24 h-20 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-xs text-muted-foreground mt-1">1 Lakh+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
