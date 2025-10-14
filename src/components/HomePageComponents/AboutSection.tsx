const AboutSection = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-default-700 mb-12">
          О нашем сервисе
        </h2>
        
        <div className="bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="prose prose-lg max-w-none text-default-700 leading-relaxed">
            <p className="text-2xl mb-6 font-bold">
              Мы — команда профессионалов, специализирующихся на обмене криптовалют в Москве.
            </p>
            
            <p className="mb-2">
              Наш приоритет — скорость, честность и безопасность.<br />
              Каждая сделка проходит под контролем опытных специалистов.
            </p>
            
            <p className="mb-6">
              Мы помогаем клиентам обменять USDT, BTC, ETH, TON и другие криптовалюты на рубли, доллары и евро —
              наличными или безналично.
            </p>
            
            <p className="text-lg font-medium text-emerald-400">
              Работаем круглосуточно и гарантируем конфиденциальность каждой операции.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
