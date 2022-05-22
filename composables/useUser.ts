import { client } from "@/utils/client"

export const useUser = () => {
  const user = useState("user", () => null)

  const getUser = async () => {
    const { customer } = await client.auth.getSession()
    user.value = customer
  }

  return { user, getUser }
}
