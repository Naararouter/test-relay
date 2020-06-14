import React from "react";
import { RepositoryItem } from "./RepositoryItem";
import { IMainPageFragment } from "../../../pages/MainPage/MainPage.base";

export const RepositoryListBase = ({
  repositories,
  user,
}: IMainPageFragment) => {
  return repositories?.search ? (
    <div>
      <ul>
        {repositories.search.edges?.map(({ node }, idx) => (
          <RepositoryItem key={idx} userId={user.id} repository={node} />
        ))}
      </ul>
    </div>
  ) : (
    <span>Loading...</span>
  );
};
