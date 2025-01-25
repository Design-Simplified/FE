import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getToken = (): string => cookies.get("accessToken");

export const setToken = (token: string) => {
  cookies.set("accessToken", token, { path: "/" });
};

export const removeToken = () => cookies.remove("accessToken", { path: "/" });
