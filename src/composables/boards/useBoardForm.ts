import { httpClient } from "@/plugins";
import { IBoard } from "@/interfaces";
import { useQuery } from "@tanstack/vue-query";
import { reactive } from "vue";
import { boardServices } from "@/services";

type Response = {
  message: string;
  data: IBoard[];
};
export function useBoardForm() {
  const {
    onCreateBoard,
    onEditBoard,
    isLoadingCreateBoard,
    isLoadingEditBoard,
  } = boardServices();
  const boardFormData = reactive<IBoard>({
    id: 1,
    title: "",
    columns: [],
  });

  // Fetching all Boards
  const { data, isPending: isLoading } = useQuery<Response, Error, Response>({
    queryKey: ["boards"],
    queryFn: () => httpClient.get("/boards"),
  });

  async function createBoard(values: any) {
    onCreateBoard(values);
  }

  async function editBoard(values: any) {
    onEditBoard(values);
  }

  return {
    data: data ?? [],
    isLoading,
    boardFormData,
    createBoard,
    editBoard,
    isLoadingEditBoard,
    isLoadingCreateBoard,
  };
}
