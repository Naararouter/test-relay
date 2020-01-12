import { graphql } from "relay-runtime";

export const RepositoryListRequest = graphql`
    query RepositoryListQuery($repositoryName: String!) {
        search(query: $repositoryName, type: REPOSITORY, last:20) {
            nodes {
                ... on Repository {
                    id
                    name
                }
            }
        }
    }
`;
