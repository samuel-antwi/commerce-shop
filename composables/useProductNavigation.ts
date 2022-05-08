const useProductNavigation = () => {
  const index = useState("index", () => 0)
  const imgSrc = useState("imgSrc", () => "")

  const nextImage = (product) => {
    imgSrc.value = ""
    const lastItem = product.assets.length - 1
    if (lastItem === index.value) {
      index.value = 0
    } else {
      index.value++
    }
  }
  const previousImage = (product) => {
    imgSrc.value = ""
    const lastItem = product.assets.length - 1
    if (index.value === 0) {
      index.value = lastItem
    } else {
      index.value--
    }
  }

  const getProductImageInView = (product, img) => {
    const url = product.assets.find((p) => p === img)
    imgSrc.value = url.name
  }

  return { index, nextImage, previousImage, getProductImageInView, imgSrc }
}

export default useProductNavigation
