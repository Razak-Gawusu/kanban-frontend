import { httpClient } from "@/plugins";
import { useMutation } from "@tanstack/vue-query";
import { useRouter } from "vue-router";

export function useSignup() {
  const router = useRouter();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: Record<string, string>) =>
      httpClient.post("/auth/signup", data),
    onSuccess: (data: any) => {
      console.log({ data });
      console.log("signup successful");
      router.push({ name: "home" });
    },
    onError: (data: any) => {
      console.log({ data });
      console.log("error signing up");
    },
  });

  function signup(values: Record<string, string>) {
    mutate(values);
  }

  console.log(isLoading);

  return {
    signup,
    isLoading,
  };
}
