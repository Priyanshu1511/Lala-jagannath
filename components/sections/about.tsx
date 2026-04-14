"use client"

import { Award, Users, Stethoscope, Heart } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const stats = [
  { key: "experience", value: "25+", icon: Award },
  { key: "patients", value: "1,00,000+", icon: Users },
  { key: "therapies", value: "50+", icon: Stethoscope },
  { key: "doctors", value: "15+", icon: Heart },
]

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary to-accent/10">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Concentric Circles */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
                  <div className="absolute inset-4 rounded-full border-2 border-primary/30" />
                  <div className="absolute inset-8 rounded-full border-2 border-primary/40" />
                  <div className="absolute inset-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-6xl text-primary">ॐ</span>
                  </div>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/40 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/40 rounded-br-xl" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl border border-border p-6 max-w-xs">
              <p className="font-serif text-lg font-semibold text-foreground">{t("about.mission")}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Heart className="w-4 h-4" />
              {t("about.subtitle")}
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t("about.title")}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about.description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.key}
                    className="bg-secondary rounded-2xl p-5 text-center hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 mx-auto text-primary mb-3" />
                    <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t(`about.${stat.key}` as const)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
