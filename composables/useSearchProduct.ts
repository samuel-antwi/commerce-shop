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

  const searchProducts = (query) => {
    console.log(query)
  }

  return {
    search,
    showSearchProducts,
    closeSearchProducts,
    searchProducts,
  }
}

export default useSearchProduct
