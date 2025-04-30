import { Navigate } from "react-router-dom"

export default function NotFound(): React.JSX.Element {
  return (
    <div className="flex items-start justify-center">
      <h1 className="font-sans text-xl">404 Not Found</h1>
      <p>This page doesn't exist.</p>
      <button type="button">
        <Navigate to="/" />
        Go back to home page
      </button>
    </div>
  )
}
