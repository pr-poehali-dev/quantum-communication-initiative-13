import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Какие типы щитов вы производите?",
    answer: "Мы производим щиты учёта и управления, вводно-распределительные устройства (ВРУ), щиты автоматики и телемеханики для систем диспетчеризации — как типовые, так и по индивидуальным проектам.",
  },
  {
    question: "Каков минимальный срок изготовления щита?",
    answer: "Срок зависит от сложности и комплектации. Типовые щиты — от 10 рабочих дней, индивидуальные решения — от 3 до 6 недель. Точные сроки согласовываются при оформлении заказа.",
  },
  {
    question: "Вы работаете с юридическими лицами?",
    answer: "Да, работаем только с юридическими лицами и ИП. Заключаем договор, выставляем счёт, предоставляем полный пакет закрывающих документов.",
  },
  {
    question: "Осуществляете ли вы монтаж и пусконаладку?",
    answer: "Да. Наши специалисты выполняют шеф-монтаж, пусконаладочные работы и обучение персонала заказчика на объекте. Услуга согласовывается отдельно.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Часто задаваемые вопросы
          </h1>
          <p className="text-muted-foreground">
            Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Свяжитесь с Егором.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Готовы обсудить проект?</h2>
            <p className="text-base text-muted-foreground">
              Оставьте заявку — Егор свяжется с вами и поможет подобрать оптимальное решение!
            </p>
          </div>
          <Button aria-label="Связаться с менеджером">Связаться с Егором</Button>
        </div>
      </div>
    </section>
  )
}
