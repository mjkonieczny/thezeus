import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import neo4j from 'neo4j-driver'
// @ts-ignore
import { makeAugmentedSchema } from 'neo4j-graphql-js'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from './config'

const driver = neo4j.driver(`${config.db.host}:${config.db.port}`, neo4j.auth.basic(config.db.username, config.db.password))

const app = express()
app.use(cors({ allowedHeaders: '*' }))
app.use(bodyParser.json())

const typeDefs = `
  type Vertex {
    name: String
    adjacents: [Vertex] @relation(name: "Edge", direction: OUT)
  }
`

const schema = makeAugmentedSchema({ typeDefs })

const server = new ApolloServer({ schema, context: { driver }, playground: true })
server.applyMiddleware({ app })

app.listen(config.port, () => process.stdout.write(`Running on :${config.port} ${server.graphqlPath}\n`))

if (module.hot) {
  module.hot.accept()
}
