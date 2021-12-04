import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path     : "/tactics",
    component: () => import("../../layouts/nested/nested.layout.vue"),
    props    : {
      topMenuLinks: [
        { label: "Overview", routeTo: "TacticsOverviewPage" },
        { label: "Players", routeTo: "TacticsPlayersPage" },
        { label: "Mental Plan", routeTo: "HomePage", disabled: true },
        { label: "Instructions", routeTo: "HomePage", disabled: true }
      ]
    },
    children : [
      {
        path     : "overview",
        name     : "TacticsOverviewPage",
        component: () => import("./pages/overview/overview.page.vue")
      },
      {
        path     : "players",
        name     : "TacticsPlayersPage",
        component: () => import("./pages/players/index/players.page.vue")
      },
      {
        path     : "players/:id/player",
        name     : "TacticsShowPlayerPage",
        component: () => import("./pages/players/show/showPlayer.page.vue")
      }
    ]
  }
];

export default routes;
