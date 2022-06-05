import axios from "../api"

export const searchBusinesses = () => {
  return axios.get("/businesses/search", {
    params: {
      location: "Las Vegas"
    }
  })
}
