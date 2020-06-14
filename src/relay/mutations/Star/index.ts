import { commitMutation } from "react-relay";
import environment from "../../../relay.env";
import { addStarMutation } from "./AddStar.query";
import { removeStarMutation } from "./RemoveStar.query";

export function addStarCommit(targetId, currentUserId) {
  return commitMutation(environment, {
    mutation: addStarMutation,
    variables: {
      targetId,
      currentUserId,
    },
  });
}

export function removeStarCommit(targetId, currentUserId) {
  return commitMutation(environment, {
    mutation: removeStarMutation,
    variables: {
      targetId,
      currentUserId,
    },
  });
}
