import { ref } from "vue";

const hideSidebar = ref(false);

function toggleSidebar() {
  hideSidebar.value = !hideSidebar.value;
  console.log(hideSidebar.value);
}

export function useSidebar() {
  return {
    hideSidebar,
    toggleSidebar,
  };
}
