import React from "react";
import { RepositoryListBase } from "./RepositoryList";

export function RepositoryList({
  hasPreviousPage,
  hasNextPage,
  goBack,
  goNext,
  user,
  repositories,
}) {
  // console.log("RepositoryList");
  return (
    <>
      <div>
        <span>
          <b>Repository list:</b>
        </span>
        {hasPreviousPage && <button onClick={goBack}>Prev Page</button>}
        {hasNextPage && <button onClick={goNext}>Next Page</button>}
      </div>
      <RepositoryListBase
        repositories={repositories}
        user={user}
      />
    </>
  );
}
