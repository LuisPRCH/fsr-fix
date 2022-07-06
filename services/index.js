import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAllProducts = async () => {
	const query = gql`
		query MyQuery {
			productosConnection(first: 100, orderBy: publishedAt_DESC) {
				edges {
					node {
						codigo
						destacado
						nombre
						precio
						publicado
						id
						categorias {
							slug
							nombre
							id
						}
						descripcion {
							html
						}
						imagen {
							url
							width
							height
						}
						slug
					}
				}
			}
		}
	`
	const results = await request(graphqlAPI, query)

	return results.productosConnection.edges
}

export const getLastProducts = async () => {
	const query = gql`
		query MyQuery {
			productosConnection(last: 8, where: { destacado: true }, orderBy: publishedAt_DESC) {
				edges {
					node {
						id
						nombre
						precio
						publicado
						slug
						imagen {
							url
							width
							height
						}
						categorias {
							nombre
							slug
							id
						}
						destacado
						codigo
					}
				}
			}
		}
	`
	const results = await request(graphqlAPI, query)

	return results.productosConnection.edges
}

export const getAllCategories = async () => {
	const query = gql`
		query MyQuery {
			categoriasConnection(first: 100, orderBy: publishedAt_DESC) {
				edges {
					node {
						id
						nombre
						slug
						imagen {
							url
							height
							width
						}
						productos {
							codigo
							destacado
							nombre
							precio
							publicado
							id
							categorias {
								slug
								nombre
								id
							}
							descripcion {
								html
							}
							imagen {
								url
								width
								height
							}
							slug
						}
					}
				}
			}
		}
	`
	const results = await request(graphqlAPI, query)

	return results.categoriasConnection.edges
}

export const getLastCategories = async () => {
	const query = gql`
		query MyQuery {
			categoriasConnection(first: 4) {
				edges {
					node {
						id
						nombre
						slug
						imagen {
							url
							width
							height
						}
					}
				}
			}
		}
	`
	const results = await request(graphqlAPI, query)

	return results.categoriasConnection.edges
}
