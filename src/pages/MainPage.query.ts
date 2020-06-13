import { graphql } from "relay-runtime";

export const MainPageRequest = graphql`
  query MainPageQuery(
    $repositoryName: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    viewer {
      ...WelcomeUser_user
    }
    ...RepositoryList_repositories
      @arguments(
        repositoryName: $repositoryName
        first: $first
        after: $after
        last: $last
        before: $before
      )
  }
`;
