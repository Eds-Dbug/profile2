import React from 'react'
import {useRouteError} from "react-router-dom"

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>404 Error</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
