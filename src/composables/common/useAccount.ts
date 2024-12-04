import { userAuthStore } from "@/store";
import { useModal } from ".";
import { useRouter } from "vue-router";
import { ROUTES } from "@/helpers";

const accountOptions = [{ label: "Logout", value: "logout" }];

export function useAccount() {
  const router = useRouter();
  const { reset } = userAuthStore();
  const { isOpen, openModal, closeModal } = useModal();
  function performDropdownActions(action: string) {
    switch (action) {
      case "logout":
        console.log("open modal");
        openModal();
        break;
      default:
        throw new Error("Action doesn't exit");
    }
  }

  function logout() {
    reset();
    closeModal();
    router.push(ROUTES.auth.login);
  }

  return {
    accountOptions,
    isOpen,
    closeModal,
    logout,
    performDropdownActions,
  };
}
