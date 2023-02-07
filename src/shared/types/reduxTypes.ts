import store from '../../app/store'

export type RootState = ReturnType<typeof store.getState>

export type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type UserSliceType = {
  isLoading: boolean
  data: UserType[]
}
