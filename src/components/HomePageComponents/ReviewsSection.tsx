const ReviewsSection = () => {
  const reviews = [
    {
      text: "Обменял USDT на рубли за 10 минут. Всё быстро, безопасно и без комиссий.",
      author: "Алексей, Москва"
    },
    {
      text: "Работаю с ними уже больше года. Всегда стабильный курс и честные условия.",
      author: "Михаил, трейдер"
    },
    {
      text: "Приехала в офис, всё организовано и удобно. Теперь только сюда.",
      author: "Ольга, Москва"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-default-700 mb-12">
          Отзывы наших клиентов
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <blockquote className="text-lg text-default-700 mb-4 italic">
              "&ldquo;{review.text}&rdquo;"
              </blockquote>
              <cite className="text-emerald-400 font-medium">
                — {review.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
