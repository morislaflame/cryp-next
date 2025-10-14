const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "1️⃣",
      title: "Скорость",
      description: "Обмен за 5–10 минут, даже при больших суммах."
    },
    {
      icon: "2️⃣",
      title: "Безопасность",
      description: "Сделки проходят под контролем менеджера и с двойным подтверждением."
    },
    {
      icon: "3️⃣",
      title: "Конфиденциальность",
      description: "Без верификации и без передачи данных третьим лицам."
    },
    {
      icon: "4️⃣",
      title: "Выгодный курс",
      description: "Всегда ориентируемся на Binance и лучшие агрегаторы."
    },
    {
      icon: "5️⃣",
      title: "Крупные суммы",
      description: "Работаем без ограничений."
    },
    {
      icon: "6️⃣",
      title: "Офис в центре Москвы",
      description: "Удобно приехать и завершить сделку лично."
    }
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-default-700 mb-12">
          Почему клиенты выбирают именно нас
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-emerald-800/20 to-emerald-700/20 border border-emerald-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-default-700 mb-3">
                {advantage.title}
              </h3>
              <p className="text-emerald-400 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
