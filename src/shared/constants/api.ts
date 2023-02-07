import { request, urls } from '../'

export const API = {
  getAllUsers: () => request.get(urls.getAllUsers),
}
