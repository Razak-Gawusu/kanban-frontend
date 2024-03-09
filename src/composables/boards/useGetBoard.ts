import { httpClient } from "@/plugins";
import { IBoard } from "@/interfaces";
import { useQuery } from "@tanstack/vue-query";
import { MaybeRef, toValue } from "vue";

type Response = {
  message: string;
  data: IBoard;
};
export function useGetBoard(boardId: MaybeRef<string | string[]>) {
  const { data } = useQuery<Response, Error, Response>({
    queryKey: ["board", boardId],
    queryFn: () => httpClient.get(`/boards/${toValue(boardId)}`),
  });

  return {
    data,
  };
}

//toRefs
