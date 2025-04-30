import { FooterComponent } from "@/modules/shared/footer"
import { HeaderComponent } from "@/modules/shared/header"

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
