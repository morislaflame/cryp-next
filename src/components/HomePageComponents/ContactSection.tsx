const ContactSection = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Свяжитесь с нами
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Адрес офиса</h3>
            <p className="text-emerald-400 text-lg">Москва, [указать адрес]</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Время работы</h3>
            <p className="text-emerald-400 text-lg">24/7</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Telegram / WhatsApp</h3>
            <p className="text-emerald-400 text-lg">[ссылка]</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-emerald-400 text-lg">[email]</p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-xl font-medium ">
            Быстрый обмен. Реальные люди. Настоящий сервис
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
