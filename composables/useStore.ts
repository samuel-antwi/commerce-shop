export const useStore = () => {
  const { $medusa } = useNuxtApp()

  const getRegions = async () => {
    const { regions } = await $medusa.regions.list()
    return regions[0].id
  }

  return { getRegions }
}
