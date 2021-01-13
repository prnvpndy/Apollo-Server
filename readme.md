What is GraphQL?

    GraphQL is an API standard. It defines a way of building smart APIs where the client can ask for exactly what data is needed, and the API server returns the same data as requested by the client.

    Basically, GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 

    GraphQL stands for “Graph Query Language”. It’s not a database query language like SQL, it is a way of building standard APIs like REST principles, which allows data queries. It can also be thought of as a smart way of fetching data.

    GraphQL was initially designed in Facebook for their back-end services for web & mobile clients. It was made open source in 2015 and now it’s supported by a large community.

    Since it’s more of a standard than a specific implementation, it’s possible to use them on almost any platform. There is already support in many languages for GraphQL servers & clients including JavaScript, Java, C#/.NET, Go, Python, Scala etc.

    Difference between GraphQL and Rest:  REST APIs and GraphQL are both technologies that allow this new breed of applications and servers to communicate with each other. For end users both accomplish the exact same thing and an application using GraphQL is inherently no better than one that implements REST. In addition it's worth noting that both technologies will continue to exist as they're not complete equivalents.

    As a term REST (for REpresentational State Transfer) is the broader one out of the two. It covers a wide range of implementations and it's not a standard but simply a loose term that defines the way things are done. This is why a client application using a REST API is often very coupled to the application running on the server side.
    While REST is somewhat ambiguous, GraphQL is a much more clear term. As an open protocol protocol that originates from Facebook it's much more clearly defined entity. While the name implies that GraphQL would have something to do with Graph Databases, this is not the case. GraphQL is a higher level communication protocol, rather than a query language for Graph Databases. GraphQL is robust and used by millions of people in billions of requests each day on Facebook mobile applications.
    As said, neither one is superior to the other. While a REST API built on certain ideals can be suboptimal for certain applications. A good example are mobile applications, where a generic REST API implementation tends to result in a large number of small queries. GraphQL by nature steers development towards larger individual requests.
    Each individual network request aways has a cost in overhead. This is highlighted in mobile applications where a single large request results in better performance than ten smaller ones. While this is alleviated by the lower level improvements in HTTP/2, it can still lead to a significantly worse user exparience.

:::::::::::::::::::::::::::::::::::::::::::::::  SCHEMA ____&_____ Resolver  :::::::::::::::::::::::::::::::::::::::::::::

Write down about Schema and Resolvers: 

Schema: GraphQL has its own type language that’s used the write GraphQL schemas: The Schema Definition Language (SDL). 
        In its simplest form, GraphQL SDL can be used to define types looking like this:

    type User {
	    id: ID!
	    Name: String
    }

    The User type alone doesn’t expose any functionality to client applications, it simply defines the structure of a user model in your application. In order to add functionality to the API, you need to add fields to the root types of the GraphQL schema: Query, Mutation and Subscription. These types define the entry points for a GraphQL API.

    For example, consider the following query:

    query {
	    user(id: “abc”) {
		    id
		    name
	    }
    }

    This query is only valid if the corresponding GraphQL schema defines the Query root type with the following user field:

    type Query {
	    user(id:ID!): User
    }

    So, the schema’s root types determine the shape of the queries and mutations that will be accepted by the server.


Resolver: A resolver is a function that's responsible for populating the data for a single field in your schema. It can
    populate that data in any way you define, such as by fetching data from a back-end database or a third-party API

    Defining a resolver: 

        Base syntax: Let's say our server defines the following (very short) schema:

            type Query {
                numberSix: Int! # Should always return the number 6 when queried
                numberSeven: Int! # Should always return 7
            }
        We want to define resolvers for the numberSix and numberSeven fields of the root Query type so that they always return 6 and 7 when they're queried.

            const resolvers = {
                Query: {
                    numberSix() {
                    return 6;
                    },
                    numberSeven() {
                    return 7;
                    }
                }
            };

        As this example shows: 

            => You define all of your server's resolvers in a single JavaScript object (named resolvers above). This      
               object is called the resolver map.
            => The resolver map has top-level fields that correspond to your schema's types (such as Query above).
            => Each resolver function belongs to whichever type its corresponding field belongs to.
        
        
        






