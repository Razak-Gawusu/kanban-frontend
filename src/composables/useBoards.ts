import { httpClient } from "@/plugins";
import { IBoard } from "@/interfaces";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

type Response = {
  message: string;
  data: IBoard[];
};

const activeBoard = ref<null | number>(0);
function setActiveBoard(id: number) {
  activeBoard.value = id;
}

export function useBoards() {
  // Fetching all Boards
  const { data, isPending: isLoading } = useQuery<Response, Error, Response>({
    queryKey: ["boards"],
    queryFn: () => httpClient.get("/boards"),
  });

  return { activeBoard, setActiveBoard, data: data ?? [], isLoading };
}
