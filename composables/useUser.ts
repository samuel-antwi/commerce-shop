import { useLocalStorage } from "@vueuse/core"
import { client } from "@/utils/client"
import { Customer } from "@medusajs/medusa"

export const useUser = () => {
  const user = useState("user", () => <Customer>{})

  const getUser = async () => {
    try {
      const { customer } = await client.auth.getSession()
      user.value = customer
    } catch (error) {
      console.log(error)
    }
  }
  return { user, getUser }
}
