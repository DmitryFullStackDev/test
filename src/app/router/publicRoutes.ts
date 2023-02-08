import React from 'react'
import { routes } from '../../shared'
import { AddUser, Home, SpecificUser } from '../../pages'

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
    Component: AddUser,
    path: routes.addUser,
  },
] as IRoutes[]
