import React from "react";
import { RepositoryListBase } from "./RepositoryList.base";
import { IMainPageFragment } from "../../../pages/MainPage/MainPage.base";

interface IRepositoryList extends IMainPageFragment {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  goBack: () => void;
  goNext: () => void;
}

export function RepositoryList({
  hasPreviousPage,
  hasNextPage,
  goBack,
  goNext,
  user,
  repositories,
}: IRepositoryList) {
  return (
    <>
      <div>
        <span>
          <b>Repository list:</b>
        </span>
        {hasPreviousPage && <button onClick={goBack}>Prev Page</button>}
        {hasNextPage && <button onClick={goNext}>Next Page</button>}
      </div>
      <RepositoryListBase repositories={repositories} user={user} />
    </>
  );
}
