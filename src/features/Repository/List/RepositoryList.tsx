import React from "react";
import { createFragmentContainer } from "react-relay";
import { RepositoryListFragment } from "./RepositoryList.query";
import { RepositoryItem } from "./RepositoryItem";

export const RepositoryListBase = createFragmentContainer<{
  repositories?: any;
  user?: any;
  setPageInfo: (pageInfo: any) => void;
}>(
  ({ repositories, setPageInfo, user }) => {
    React.useEffect(() => {
      // console.log("RepositoryListBase - useEffect", { repository, user });
      repositories?.search?.pageInfo &&
        setPageInfo(repositories.search.pageInfo);
    }, [repositories]);

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
  },
  {
    repositories: RepositoryListFragment,
  }
);
