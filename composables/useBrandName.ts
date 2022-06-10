export const useBrandName = () => {
  const brandName = useState("brand", () => "Trendo")

  return { brandName }
}
