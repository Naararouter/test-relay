import React from "react";
import { createFragmentContainer } from "react-relay";
import { RepositoryListFragment } from "./RepositoryList.query";
import { RepositoryItem } from "./RepositoryItem";

export const RepositoryListBase =
  ({ repositories, user }) => {
    console.log("RepositoryListBase", user);
    return repositories?.search ? (
      <div>
        <ul>
          {repositories.search.edges?.map(
            ({ node }, idx) => (
              <RepositoryItem
                key={idx}
                userId={user.id}
                repository={node}
              />
            )
          )}
        </ul>
      </div>
    ) : (
      <span>Loading...</span>
    );
  }
