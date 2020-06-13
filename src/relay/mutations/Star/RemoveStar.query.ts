import { graphql } from "react-relay";

export const removeStarMutation = graphql`
  mutation RemoveStarMutation($targetId: ID!, $currentUserId: String!) {
    removeStar(
      input: { starrableId: $targetId, clientMutationId: $currentUserId }
    ) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
