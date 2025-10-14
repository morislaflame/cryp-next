import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight">
          Обмен криптовалют в Москве — быстро, безопасно и выгодно
        </h1>
        
        <p className="text-xl md:text-2xl text-default-700 mb-8 leading-relaxed">
          Обменяйте USDT, BTC, ETH и другие криптовалюты на рубли.<br />
          Наличными в офисе или онлайн переводом.<br />
          Курс выше рынка, без скрытых комиссий, 24/7.
        </p>

        <div className="mb-8">
          <Link href="/exchange">
            <Button 
              size="lg" 
              className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg text-emerald-400 hover:text-emerald-300 transition-all duration-300 backdrop-blur-sm cursor-pointer text-lg"
            >
              Начать обмен
            </Button>
          </Link>
        </div>

        <p className="text-sm text-default-700">
          Без верификации • Конфиденциально • Более 5000 успешных сделок
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
