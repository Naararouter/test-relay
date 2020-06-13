import React from "react";
import { createFragmentContainer } from "react-relay";
import {
  RepositoryFragment,
} from "./RepositoryList.query";
import { addStarCommit, removeStarCommit } from "../../../relay/mutations/Star";

export const RepositoryItem = createFragmentContainer<any>(
  ({ repository: { id, viewerHasStarred, name }, userId  }) => {
    return (
      <li>
        <span>{name}</span>
        <span>
          {viewerHasStarred ? (
            <span onClick={() => removeStarCommit(id, userId)}>Unstar</span>
          ) : (
            <span onClick={() => addStarCommit(id, userId)}>Star</span>
          )}
        </span>
      </li>
    );
  },
  {
    repository: RepositoryFragment,
  }
);
