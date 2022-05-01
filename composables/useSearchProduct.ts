const useSearchProduct = () => {
  const search = useState("searchTerm", () => false)

  const showSearchProducts = () => {
    search.value = true
  }
  const closeSearchProducts = () => {
    if (search.value) {
      search.value = false
    }
    return
  }

  return {
    search,
    showSearchProducts,
    closeSearchProducts,
  }
}

export default useSearchProduct
