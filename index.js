const {ApolloServer, gql} = require('apollo-server')

const products = [
	{
		id: '1234',
		name: 'Bike',
		description: 'Mountain Bike',
		quantity: 3,
		price: 99.99,
		onSale: false,
	},
]

const typeDefs = gql`
	type Query {
		hello: String
		products: [Product!]!
		product(id: ID!): Product
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

		product: (parent, args, context) => {
			const productId = args.id

			const product = products.find(p => p.id === productId)

			if (!product) return null
			return product
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
