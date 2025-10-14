'use client'

import { useContext } from 'react';
import { Context, type IStoreContext } from '@/store/StoreProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdminChatsPageClient = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Управление чатами</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Активные чаты</CardTitle>
              <CardDescription>Чаты, требующие внимания</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">12</div>
              <p className="text-sm text-gray-500">Новых сообщений</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Всего чатов</CardTitle>
              <CardDescription>За все время</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <p className="text-sm text-gray-500">Чатов обработано</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Среднее время ответа</CardTitle>
              <CardDescription>За последний месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">2.5 мин</div>
              <p className="text-sm text-gray-500">Время ответа</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Список активных чатов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Гость #1234</h3>
                      <p className="text-sm text-gray-500">Последнее сообщение: 2 минуты назад</p>
                    </div>
                    <div className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm">
                      Активен
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Пользователь: alex@example.com</h3>
                      <p className="text-sm text-gray-500">Последнее сообщение: 5 минут назад</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      В ожидании
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminChatsPageClient;
