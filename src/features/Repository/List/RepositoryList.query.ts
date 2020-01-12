import { graphql } from "relay-runtime";

export const RepositoryListRequest = graphql`
  query RepositoryListQuery(
    $repositoryName: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    viewer {
      ...Auth_user
    }
    ...RepositoryList_repository
      @arguments(
        repositoryName: $repositoryName
        first: $first
        after: $after
        last: $last
        before: $before
      )
  }
`;

export const RepositoryListRequestFragment = graphql`
  fragment RepositoryList_repository on Query
    @argumentDefinitions(
      repositoryName: { type: "String!" }
      after: { type: "String" }
      before: { type: "String" }
      first: { type: "Int", defaultValue: 10 }
      last: { type: "Int", defaultValue: 10 }
    ) {
    search(
      query: $repositoryName
      type: REPOSITORY
      first: $first
      after: $after
      before: $before
      last: $last
    ) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            viewerHasStarred
          }
        }
        cursor
      }
    }
  }
`;
