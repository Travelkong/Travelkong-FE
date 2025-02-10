import "@/Styles/index.css"
import routes from "./Path"
import { DefaultLayout } from "@/Layouts"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { Fragment } from "react"

interface DefaultLayoutProps {
  children: React.ReactNode
}

interface RouteConfig {
  path: string
  component: React.ComponentType
  layout?: React.ComponentType<DefaultLayoutProps> | null
}

function App() {
  return (
    <Routes>
      {routes.map((route: RouteConfig, index: number) => {
        let Layout

        if (route.layout) {
          Layout = route.layout
        } else if (route.layout === null) {
          Layout = Fragment
        } else {
          Layout = DefaultLayout
        }

        const Element = route.component

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Element />
              </Layout>
            }
          />
        )
      })}
    </Routes>
  )
}

export default App
