const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Вы оставляете заявку",
      description: "Выбираете направление и сумму."
    },
    {
      number: "2", 
      title: "Мы фиксируем курс",
      description: "Подтверждаем условия."
    },
    {
      number: "3",
      title: "Производим обмен",
      description: "Наличными в офисе или переводом онлайн."
    },
    {
      number: "4",
      title: "Вы получаете результат",
      description: "Подтверждение и результат за считанные минуты."
    }
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-default-700 mb-12">
          Как проходит обмен криптовалют
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="text-5xl w-fit aspect-square mb-4 rounded-full flex items-center justify-center bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 p-4">{step.number}</div>
              <h3 className="text-2xl font-semibold text-default-700 mb-3">
                {step.title}
              </h3>
              <p className="text-emerald-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-default-700 font-medium">
            Всё прозрачно, безопасно и без посредников.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
