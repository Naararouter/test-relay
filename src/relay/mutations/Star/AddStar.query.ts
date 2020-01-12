import {graphql} from "react-relay";

export const addStarMutation = graphql`
    mutation AddStarMutation($targetId: ID!, $currentUserId: String!) {
        addStar(
            input: { starrableId: $targetId, clientMutationId: $currentUserId }
        ) {
            starrable {
                id
                viewerHasStarred
            }
        }
    }
`;
