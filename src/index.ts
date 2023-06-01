import { createServer } from "node:http"
import { createYoga } from "graphql-yoga"
import { schema } from "./schema"

// grab port number from .env, if not set, use 4000
const port = Number(process.env.API_PORT) || 4000

// provide a graphql schema
const yoga = createYoga({ schema })

const server = createServer(yoga)

server.listen(port, () => {
  console.log(`GraphQL server started at http://localhost:${port}/graphql`)
})