import { graphql } from "relay-runtime";

export const RepositoryFragment = graphql`
  fragment RepositoryList_repository on Repository {
    id
    name
    viewerHasStarred
  }
`;

export const RepositoryListFragment = graphql`
  fragment RepositoryList_repositories on Query
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
            ...RepositoryList_repository
          }
        }
        cursor
      }
    }
  }
`;
