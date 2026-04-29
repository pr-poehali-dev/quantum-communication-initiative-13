import Icon from "@/components/ui/icon"

export function InfoSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12">

        {/* Сертификат + ЩРД */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-muted/50 p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-background border shadow-sm shrink-0">
                <Icon name="BadgeCheck" className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Сертификат устроит любую инстанцию</h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Наши щиты производятся в полном соответствии с ГОСТ и техническими регламентами. Сертификат соответствия принимается без замечаний во всех контролирующих органах, на государственных и коммерческих объектах.
            </p>
          </div>

          <div className="rounded-xl border bg-primary/5 p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-background border shadow-sm shrink-0">
                <Icon name="FileText" className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">В вашем проекте прописан щит ЩРД?</h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Наш щит — идеальное решение, если в вашем проекте прописан щит <strong className="text-foreground">ЩРД Петро Мобил</strong>. Мы производим именно то изделие, которое указано в проектной документации — точно по спецификации, с нужными сертификатами и в срок.
            </p>
            <div className="mt-auto pt-2">
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full">
                ЩРД Петро Мобил — официальный производитель
              </span>
            </div>
          </div>
        </div>

        {/* Время работы */}
        <div className="rounded-xl border bg-muted/50 p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-background border shadow-sm">
              <Icon name="Clock" className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Время работы</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-foreground">Пн, Вт, Чт, Пт</span>
              <span>Не приёмный день</span>
            </div>
            <div className="w-px bg-border hidden sm:block self-stretch" />
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-primary">Среда</span>
              <span className="text-foreground font-medium">13:00 — 14:00</span>
            </div>
            <div className="w-px bg-border hidden sm:block self-stretch" />
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-foreground">Менеджер</span>
              <span>Егор</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
