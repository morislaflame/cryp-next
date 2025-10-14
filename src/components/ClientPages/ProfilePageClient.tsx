'use client'

import { useContext, useEffect } from 'react';
import { Context, type IStoreContext } from '@/store/StoreProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePageClient = () => {
  const { user } = useContext(Context) as IStoreContext;

  useEffect(() => {
    if (user.isAuth) {
      user.fetchMyInfo();
    }
  }, [user]);

  const handleLogout = () => {
    user.logout();
  };

  if (!user.isAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Доступ запрещен</CardTitle>
            <CardDescription className="text-center">
              Для доступа к профилю необходимо войти в аккаунт
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a href="/auth">Войти в аккаунт</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Профиль</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Информация о пользователе</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-lg">{user.user?.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Имя пользователя</label>
                  <p className="text-lg">{user.user?.username}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Роль</label>
                  <p className="text-lg">{user.user?.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Действия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full"
                >
                  Выйти из аккаунта
                </Button>
                
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <a href="/exchange">Перейти к обмену</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageClient;
