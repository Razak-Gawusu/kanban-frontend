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

    localStorage.setItem("kanban-auth", JSON.stringify(initialState));
  }

  function authenticate(token: string) {
    state.value = { user: jwtDecode(token), token, isAuthenticated: true };

    localStorage.setItem("kanban-auth", JSON.stringify(state.value));
  }

  function getToken() {
    const state = localStorage.getItem("kanban-auth");

    if (state) {
      return JSON.parse(state)?.token;
    }
  }

  function getUser() {
    const state = localStorage.getItem("kanban-auth");

    if (state) {
      return JSON.parse(state)?.user;
    }
  }

  return { reset, authenticate, getToken, getUser };
});
