import React from "react"
import { Navigate } from "react-router-dom"

export default function NotFound(): React.JSX.Element {
  return (
    <div className="flex justify-center items-start">
      <h1 className="text-xl font-sans">404 Not Found</h1>
      <p>This page doesn't exist.</p>
      <button>
        <Navigate to="/" />
        Go back to home page
      </button>
    </div>
  )
}
