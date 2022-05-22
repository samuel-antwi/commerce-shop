import { client } from "@/utils/client"
import { User, Customer } from "@medusajs/medusa"

export const useAuth = () => {
  const customer = useState("customer", () => null)
  const errorMsg = useState("error", () => "")

  const signup = async (user) => {
    try {
      const { customer: data } = await client.customers.create({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        phone: user.phone,
      })
      customer.value = data
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async (user) => {
    try {
      const { customer: data } = await client.auth.authenticate({
        email: user.email,
        password: user.password,
      })
      console.log(data)
      customer.value = data
      navigateTo("/")
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    try {
      const { data } = await useFetch("http://localhost:9000/store/auth/delete")
      if (data) {
        customer.value = data
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { customer, login, signup, logOut }
}
