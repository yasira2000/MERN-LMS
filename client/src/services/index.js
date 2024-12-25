import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data;
}
export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", {
    ...formData,
    role: "user",
  });

  return data;
}
export async function checkAuthService() {
  const { data } = await axiosInstance.get("/auth/check-auth");

  return data;
}
