import React from 'react'
import { routes } from '../../shared'
import { Home, SpecificUser } from '../../pages'

interface IRoutes {
  Component: React.FC<any>
  path: string
}

export const publicRoutes = [
  {
    Component: Home,
    path: routes.homePage,
  },
  {
    Component: SpecificUser,
    path: routes.specificUser,
  },
  {
    Component: Home,
    path: routes.addUser,
  },
] as IRoutes[]
