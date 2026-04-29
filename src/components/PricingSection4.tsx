import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const pricingData = {
  plans: [
    {
      name: "Стандарт",
      description: "Типовые щиты диспетчеризации для небольших объектов.",
      features: [
        {
          name: "Щит учёта и управления до 12 модулей",
          tooltip: "Стандартная конфигурация для небольших объектов",
        },
        {
          name: "Комплект технической документации",
          tooltip: "Паспорт изделия, схемы, сертификаты",
        },
        {
          name: "Гарантия 12 месяцев",
          tooltip: "Гарантийное обслуживание в течение года",
        },
      ],
      price: "По запросу",
      variant: "secondary",
    },
    {
      name: "Расширенный",
      description: "Щиты с расширенной комплектацией для средних объектов.",
      badge: "Популярный",
      features: [
        {
          name: "Щит до 36 модулей с релейной защитой",
          tooltip: "Расширенная конфигурация с защитными устройствами",
        },
        {
          name: "Интеграция с системой диспетчеризации",
          tooltip: "Подключение к SCADA и АСУ ТП",
        },
        {
          name: "Пусконаладочные работы",
          tooltip: "Специалисты выполнят настройку на объекте",
        },
        {
          name: "Гарантия 18 месяцев",
          tooltip: "Расширенное гарантийное обслуживание",
        },
      ],
      price: "По запросу",
      variant: "default",
    },
    {
      name: "Под проект",
      description: "Индивидуальное проектирование для крупных и сложных объектов.",
      features: [
        {
          name: "Любая конфигурация и компоновка",
          tooltip: "Полностью кастомное решение под ваш проект",
        },
        {
          name: "Разработка проектной документации",
          tooltip: "Полный пакет рабочей документации",
        },
        {
          name: "Шеф-монтаж и обучение персонала",
          tooltip: "Выезд специалиста на объект, обучение операторов",
        },
        {
          name: "Персональный менеджер — Егор",
          tooltip: "Сопровождение от заявки до сдачи объекта",
        },
      ],
      price: "По запросу",
      variant: "secondary",
    },
  ],
}

export function PricingSection4() {
  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Комплектации</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Решения под любой объект
            </h2>
            <p className="text-base text-muted-foreground">Выберите подходящую комплектацию или запросите индивидуальное предложение.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {pricingData.plans.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-0.5">
                    <span className="text-2xl font-semibold leading-10">{plan.price}</span>
                  </div>

                  <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                    Запросить КП
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">
                    {index === 0 ? "Что включено:" : `Всё из «${pricingData.plans[index - 1].name}», плюс:`}
                  </p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info
                                className={`h-4 w-4 ${index === 2 ? "opacity-40" : "text-muted-foreground opacity-70"}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
