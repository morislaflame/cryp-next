import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const telegramAuth = async (initData: string) => {
    const { data } = await $host.post('api/user/auth/telegram', { initData });
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
    }
    return {
        ...jwtDecode(data.token),
    };
};

export const registration = async (email: string, password: string) => {
    const { data } = await $host.post('api/user/registration', { email, password });
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
    }
    return {
        ...jwtDecode(data.token),
    };
};

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('api/user/login', { email, password });
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
    }
    return {
        ...jwtDecode(data.token),
    };
};

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token)
    }
    return {
        ...jwtDecode(data.token),
    };
}

export const fetchMyInfo = async () => {
    const { data } = await $authHost.get('api/user/me');
    return data;
};