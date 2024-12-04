import { httpClient } from "@/plugins";
import { useMutation } from "@tanstack/vue-query";
import { useRouter } from "vue-router";
// import { storeToRefs } from "pinia";
import { userAuthStore } from "@/store";

export function useLogin() {
  const router = useRouter();
  const { authenticate } = userAuthStore();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: Record<string, string>) =>
      httpClient.post("/auth/jwt/create", data),
    onSuccess: (data: any) => {
      // localStorage.setItem("token", data.data.token);
      authenticate(data.data.token);
      router.push({ name: "home" });
    },
    onError: (data: any) => {
      console.log({ data });
      console.log("error signing up");
    },
  });

  function login(values: Record<string, string>) {
    mutate(values);
  }

  console.log(isLoading);

  return {
    login,
    isLoading,
  };
}
