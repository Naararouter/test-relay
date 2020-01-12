import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../../../relay.env";
import { RepositoryListQuery } from "./__generated__/RepositoryListQuery.graphql";
import { RepositoryListBase } from "./RepositoryList";
import { RepositoryListRequest } from "./RepositoryList.query";

export function RepositoryList({ repositoryName }) {
  return (
    <QueryRenderer<RepositoryListQuery>
      environment={environment}
      query={RepositoryListRequest}
      variables={{ repositoryName }}
      render={RepositoryListBase}
    />
  );
}
