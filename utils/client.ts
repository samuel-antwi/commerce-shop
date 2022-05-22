import Medusa from "@medusajs/medusa-js"

export const client = new Medusa({
  maxRetries: 3,
  baseUrl: "http://localhost:9000",
})
