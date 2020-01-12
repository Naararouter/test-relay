import React from "react";
import { createFragmentContainer } from "react-relay";
import { RepositoryList_repository } from "./__generated__/RepositoryList_repository.graphql";
import {
  RepositoryListRequest,
  RepositoryListRequestFragment,
} from "./RepositoryList.query";
import { addStarCommit } from "../../../relay/mutations/Star/addStar";
import { AuthRequestFragment } from "../../Auth/Auth.query";
import { Auth_user } from "../../Auth/__generated__/Auth_user.graphql";

export const RepositoryListBase = createFragmentContainer<{
    repository?: RepositoryList_repository;
    user?: Auth_user;
    setCursor: (startCursor: string, endCursor: string) => void;
}>(({ repository, setCursor, user }) => {
    React.useEffect(() => {
        console.log({ repository, user });
        const { endCursor, startCursor } = repository.search.pageInfo;
        setCursor(startCursor, endCursor);
    }, [repository]);
    if (!repository) return null;
    return (
        <div>
            <ul>
                {repository?.search?.edges?.map(
                    ({ node: { id, name, viewerHasStarred } }) => (
                        <li key={id}>
                            <span>{name}</span>
                            <span>
                  {viewerHasStarred ? (
                      "Unstar"
                  ) : (
                      <span onClick={addStarCommit}>Star</span>
                  )}
                </span>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}, {
    repository: RepositoryListRequestFragment,
    user: AuthRequestFragment,
})
