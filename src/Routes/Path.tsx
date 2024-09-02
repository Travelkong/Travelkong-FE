import { lazy } from "react"
import { DefaultLayout } from "@/Layouts"

export type RouteConfig = {
  path: string
  component: React.FC
  layout: any
}

const routes: RouteConfig[] = [
  {
    path: "/",
    component: lazy(() => import("@/Modules/Home/home.page")),
    layout: DefaultLayout,
  },
]

export default routes
