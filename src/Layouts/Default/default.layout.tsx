import { FooterComponent } from "@/Modules/Shared/Footer"
import { HeaderComponent } from "@/Modules/Shared/Header"

import React from "react"

export type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({
  children,
}: DefaultLayoutProps): React.JSX.Element {
  return (
    <div>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </div>
  )
}
