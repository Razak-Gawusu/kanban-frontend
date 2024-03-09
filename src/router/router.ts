import { createWebHistory, createRouter } from "vue-router";
import { AuthLayout, KanbanLayout } from "@/layouts";
import { Signup, Home, Login, Board } from "@/views";
import { ROUTES } from "@/helpers";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTES.home,
      component: KanbanLayout,
      children: [
        { path: "", name: "home", component: Home },
        {
          path: "board/:boardId",
          name: "board",
          component: Board,
          props: true,
        },
      ],
    },
    {
      path: ROUTES.auth.index,
      redirect: ROUTES.auth.signup,
      component: AuthLayout,
      children: [
        { path: "signup", name: "signup", component: Signup },
        { path: "login", name: "login", component: Login },
      ],
    },
  ],
});

export { router };
