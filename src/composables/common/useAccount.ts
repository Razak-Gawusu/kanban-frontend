import { userAuthStore } from "@/store";
import { useModal } from ".";

const accountOptions = [{ label: "Logout", value: "logout" }];

export function useAccount() {
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
  }

  return {
    accountOptions,
    isOpen,
    closeModal,
    logout,
    performDropdownActions,
  };
}
