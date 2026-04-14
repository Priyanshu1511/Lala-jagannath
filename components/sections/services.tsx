"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

const services = [
  {
    key: "yoga",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4m-4 6l4-6 4 6m-8 0h8M8 17v4m8-4v4" />
      </svg>
    ),
  },
  {
    key: "diet",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    key: "physio",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M12 11v6m-3-3h6" />
      </svg>
    ),
  },
  {
    key: "panchkarma",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-1.5 3-4 5-4 8a4 4 0 008 0c0-3-2.5-5-4-8z" />
        <path d="M12 15v6m-2-2h4" />
      </svg>
    ),
  },
  {
    key: "acupuncture",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M6 12h12" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    key: "meditation",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="2" />
        <path d="M12 8v2m-6 8c0-3 2-5 6-5s6 2 6 5" />
        <path d="M6 18h12" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {t(`services.${service.key}.title` as const)}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {t(`services.${service.key}.description` as const)}
              </p>

              {/* Link */}
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                {t("services.learnMore")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
