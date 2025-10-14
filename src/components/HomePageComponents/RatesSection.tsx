const RatesSection = () => {
  const directions = [
    "USDT → RUB",
    "BTC → RUB", 
    "ETH → RUB",
    "RUB → USDT",
    "USD → USDT"
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-default-700 mb-8">
          Популярные направления обмена
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {directions.map((direction, index) => (
            <div 
              key={index}
              className="bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl font-semibold text-default-700">
                {direction}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-lg text-emerald-400">
          Курс обновляется в реальном времени. При крупных суммах — персональные условия.
        </p>
      </div>
    </section>
  );
};

export default RatesSection;
