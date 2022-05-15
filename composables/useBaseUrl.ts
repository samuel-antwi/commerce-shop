export const useBaseUrl = () => {
  const baseUrl = useState("baseUrl", () => "http://localhost:9000")

  return {
    baseUrl,
  }
}
