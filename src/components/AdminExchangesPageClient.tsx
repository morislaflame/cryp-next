'use client'

import { useContext } from 'react';
import { Context, type IStoreContext } from '@/store/StoreProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminExchangesPageClient = () => {
  const { user } = useContext(Context) as IStoreContext;

  if (!user.isAuth || user.user?.role !== 'ADMIN') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Доступ запрещен</CardTitle>
            <CardDescription className="text-center">
              У вас нет прав для доступа к админ панели
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Управление заявками</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Новые заявки</CardTitle>
              <CardDescription>Требуют обработки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">5</div>
              <p className="text-sm text-gray-500">Ожидают подтверждения</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>В обработке</CardTitle>
              <CardDescription>Активные заявки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">12</div>
              <p className="text-sm text-gray-500">Выполняются</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Завершены</CardTitle>
              <CardDescription>За сегодня</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">28</div>
              <p className="text-sm text-gray-500">Успешно выполнены</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Общий объем</CardTitle>
              <CardDescription>За сегодня</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">₽2.4M</div>
              <p className="text-sm text-gray-500">Оборот</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Последние заявки</CardTitle>
            <CardDescription>Требующие внимания</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold">Заявка #1234</h3>
                    <p className="text-sm text-gray-500">BTC → RUB • 0.5 BTC → 2,500,000 ₽</p>
                    <p className="text-sm text-gray-500">Пользователь: alex@example.com</p>
                    <p className="text-sm text-gray-500">Создана: 15 минут назад</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Подтвердить
                    </Button>
                    <Button size="sm" variant="outline">
                      Отклонить
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold">Заявка #1233</h3>
                    <p className="text-sm text-gray-500">USDT → RUB • 10,000 USDT → 950,000 ₽</p>
                    <p className="text-sm text-gray-500">Пользователь: mike@example.com</p>
                    <p className="text-sm text-gray-500">Создана: 1 час назад</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Подтвердить
                    </Button>
                    <Button size="sm" variant="outline">
                      Отклонить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminExchangesPageClient;
