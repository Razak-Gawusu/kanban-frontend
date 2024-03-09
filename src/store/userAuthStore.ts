import { IUser } from "@/interfaces";
import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";
import { ref } from "vue";

type State = {
  token: string;
  user: IUser | null;
  isAuthenticated: boolean;
};

const initialState: State = {
  token: "",
  user: null,
  isAuthenticated: false,
};

export const userAuthStore = defineStore("user", () => {
  const state = ref<State | null>(initialState);

  function reset() {
    state.value = initialState;
  }

  function authenticate(token: string) {
    state.value = { user: jwtDecode(token), token, isAuthenticated: true };
  }

  function getToken() {
    return state.value?.token;
  }

  function getUser() {
    return state.value?.user;
  }

  return { reset, authenticate, getToken, getUser };
});
