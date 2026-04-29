import { AspectRatio } from "@/components/ui/aspect-ratio"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "ClipboardList",
    title: "Оставьте заявку",
    description: "Опишите объект и задачи диспетчеризации — менеджер Егор свяжется с вами в течение одного рабочего дня.",
  },
  {
    icon: "Ruler",
    title: "Получите проект и КП",
    description: "Подготовим техническое решение, комплектацию и коммерческое предложение под ваши требования.",
  },
  {
    icon: "Truck",
    title: "Производство и поставка",
    description: "Изготовим щит в срок, проведём испытания и доставим на объект с комплектом документации.",
  },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Как мы работаем</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Просто и прозрачно!</h2>
            <p className="text-base text-muted-foreground">Всего 3 шага от заявки до готового щита на вашем объекте:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={step.icon} className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl">
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/getting%20started%20image-d24HhYcHO1wR0mZiMSHMOHz2Z0YrDn.png"
                alt="Производство электрощитов Петро Мобил"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}
