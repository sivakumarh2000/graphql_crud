const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema");
const resolvers = require("./resolvers");

const app = express();

mongoose.connect("mongodb://localhost:27017/graphqlcrud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
