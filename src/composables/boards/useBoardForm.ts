import { Board } from "@/types";
import { reactive } from "vue";

export function useBoardForm() {
  const boardFormData = reactive<Board>({
    id: 1,
    name: "",
    columns: [],
  });
  function createBoard(values: Record<string, unknown>) {
    console.log("board created", values);
  }

  return {
    boardFormData,
    createBoard,
  };
}
