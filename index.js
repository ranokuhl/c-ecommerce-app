const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
	type Query {
		hello: String
		products: [Product!]!
	}

	type Product {
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		onSale: Boolean!
	}
`

const resolvers = {
	Query: {
		hello: () => {
			return 'Hello World!'
		},
		products: () => {
			return [
				{
					name: 'Bike',
					description: 'Mountain Bike',
					quantity: 3,
					price: 99.99,
					onSale: false,
				},
			]
		},
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.listen().then(({url}) => {
	console.log(`Server is ready at ${url}`)
})
