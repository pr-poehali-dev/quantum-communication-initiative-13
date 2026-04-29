import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Малый щит",
    description: "Для небольших объектов и локальных систем диспетчеризации.",
    price: "10 000",
    image: "https://cdn.poehali.dev/projects/fce335eb-33a4-4ed0-8d6f-a00b27b11042/files/362a1537-5fb9-4baa-b94a-6d1682354003.jpg",
    imageAlt: "Малый электрощит — схема",
    features: [
      "До 12 модулей",
      "Комплект документации",
      "Гарантия 12 месяцев",
    ],
  },
  {
    name: "Средний щит",
    description: "Оптимальное решение для объектов средней сложности.",
    price: "15 000",
    badge: "Популярный",
    image: "https://cdn.poehali.dev/projects/fce335eb-33a4-4ed0-8d6f-a00b27b11042/files/7da54965-d7e7-436b-a022-336ac66db53e.jpg",
    imageAlt: "Средний электрощит — схема",
    features: [
      "До 36 модулей",
      "Релейная защита",
      "Интеграция с диспетчеризацией",
      "Гарантия 18 месяцев",
    ],
  },
  {
    name: "Большой щит",
    description: "Для крупных промышленных объектов и инфраструктуры.",
    price: "20 000",
    image: "https://cdn.poehali.dev/projects/fce335eb-33a4-4ed0-8d6f-a00b27b11042/files/fec23f9e-0d72-4c2a-b141-6f9ef3c78461.jpg",
    imageAlt: "Большой электрощит — схема",
    features: [
      "Любое число модулей",
      "Полный комплект документации",
      "Шеф-монтаж и пусконаладка",
      "Персональный менеджер — Егор",
    ],
  },
]

export function PricingSection4() {
  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Прайс-лист</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Цены на щиты диспетчеризации
            </h2>
            <p className="text-base text-muted-foreground">
              Стоимость указана от — окончательная цена зависит от комплектации и объёма заказа.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`flex flex-col overflow-hidden ${index === 1 ? "ring-2 ring-primary" : ""}`}
              >
                {plan.badge && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5 tracking-wide uppercase">
                    {plan.badge}
                  </div>
                )}
                <div className="overflow-hidden bg-white">
                  <img
                    src={plan.image}
                    alt={plan.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">от {plan.price}</span>
                    <span className="text-muted-foreground text-sm">руб.</span>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant={index === 1 ? "default" : "outline"} className="w-full mt-2">
                    Запросить КП
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
