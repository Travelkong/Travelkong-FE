import { lazy } from "react"
import { DefaultLayout } from "@/layouts"

export type RouteConfig = {
  path: string
  component: React.FC
  layout: any
}

const routes: RouteConfig[] = [
  {
    path: "/",
    component: lazy(() => import("@/modules/home/home.page")),
    layout: DefaultLayout,
  },
]

export default routes
