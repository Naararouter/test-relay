module.exports = {
  src: "./src",
  schema: "./schema.public.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**", "**/@types/**"],
  extensions: ["query.ts"],
  language: "typescript",
}
