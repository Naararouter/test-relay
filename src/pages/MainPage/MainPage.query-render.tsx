import React from "react";
import { QueryRenderer } from "react-relay";
import { MainPageQuery } from "./__generated__/MainPageQuery.graphql";
import environment from "../../relay.env";
import { MainPageRequest } from "./MainPage.query";
import { MainPageBase } from "./MainPage.base";

export interface IMainPageQueryRenderer {
  onSubmit: (value: string) => void;
  isSubmitTouched: boolean;
  dispatch: (action: {
    type: string;
    [field: string]: INTENTIONAL_ANY;
  }) => void;
  variables: {
    repositoryName: string;
    first?: number;
    last?: number;
    before?: string;
    start?: string;
  };
}

export const MainPageQueryRenderer = React.memo(
  ({
    variables,
    onSubmit,
    isSubmitTouched,
    dispatch,
  }: IMainPageQueryRenderer) => {
    return (
      <QueryRenderer<MainPageQuery>
        environment={environment}
        query={MainPageRequest}
        variables={variables}
        render={({ props, error }) => {
          return (
            <MainPageBase
              repositories={props}
              user={props ? props.viewer : null}
              error={error}
              onSubmit={onSubmit}
              isSubmitTouched={isSubmitTouched}
              dispatch={dispatch}
            />
          );
        }}
      />
    );
  }
);

MainPageQueryRenderer.displayName = "MainPageQueryRenderer";
