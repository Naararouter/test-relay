import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../../relay.env";
import { AuthQuery } from "./__generated__/AuthQuery.graphql";
import { AuthBase } from "./Auth";
import { AuthRequest } from "./Auth.query";

export function Auth({ children }) {
  return (
    <QueryRenderer<AuthQuery>
      environment={environment}
      query={AuthRequest}
      variables={{}}
      render={({ error, props }) => (
        <AuthBase props={props} error={error}>
          {children}
        </AuthBase>
      )}
    />
  );
}
