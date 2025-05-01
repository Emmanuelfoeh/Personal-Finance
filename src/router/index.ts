import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/auth/SignUp.vue"),
      meta: {
        titleTag: "Sign up | Personal Finance"
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/LogIn.vue"),
      meta: {
        titleTag: "Login | Personal Finance "
      }
    },

    {
      path: "/transactions",
      name: "transactions",
      component: () => import("../views/TransactionsView.vue")
    },
    {
      path: "/budgets",
      name: "budgets",
      component: () => import("../views/BudgetsView.vue")
    },
    {
      path: "/pots",
      name: "pots",
      component: () => import("../views/PotsView.vue")
    },
    {
      path: "/recurring-bills",
      name: "recurring-bills",
      component: () => import("../views/RecurringBillsView.vue")
    }
  ]
});

export default router;
