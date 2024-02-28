import { ref } from "vue";
import { getItem } from "@/helpers";

const theme = ref<"light" | "dark">(getItem("theme"));

function toggleTheme() {
  switch (theme.value) {
    case "light":
      theme.value = "dark";
      break;
    case "dark":
      theme.value = "light";
      break;
    default:
      theme.value = "light";
  }
}
export function useTheme() {
  return {
    theme,
    toggleTheme,
  };
}
