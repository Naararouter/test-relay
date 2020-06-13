import React from "react";
import { WelcomeUser } from "../features/WelcomeUser";
import { RepositorySearch } from "../features/Repository/Search";
import environment from "../relay.env";
import { createFragmentContainer, QueryRenderer } from "react-relay";
import { MainPageRequest } from "./MainPage.query";
import { MainPageQuery } from "./__generated__/MainPageQuery.graphql";
import { usePrevious } from "../hooks/usePrevious";
import { RepositoryList } from "../features/Repository/List";
import { WelcomeUserFragment } from "../features/WelcomeUser/WelcomeUser.query";
import { RepositoryListFragment } from "../features/Repository/List/RepositoryList.query";

const PAGE_SIZE = 10;

const initialState = {
  isBack: null,
  pageInfo: {
    startCursor: null,
    endCursor: null,
    hasNextPage: null,
    hasPreviousPage: null,
  },
};
const GET_NEXT_PAGE = "GET_NEXT_PAGE";
const GET_PREV_PAGE = "GET_PREV_PAGE";

function reducer(state, action) {
  switch (action.type) {
    case GET_NEXT_PAGE: {
      return { ...state, isBack: false, pageInfo: action.pageInfo };
    }
    case GET_PREV_PAGE: {
      return { ...state, isBack: true, pageInfo: action.pageInfo };
    }
    default:
      throw new Error();
  }
}

const MainPageBase = createFragmentContainer(
  ({
    error,
    onSubmit,
    isSubmitTouched,
    dispatch,
    user,
    repositories,
  }: any) => {
    const prevUser = usePrevious(user);

    if (error) {
      return <div>Error!</div>;
    }

    let pageInfo = repositories?.search?.pageInfo;
    const login = user ? user.login : prevUser?.login;

    const goBack = () => dispatch({ type: GET_PREV_PAGE, pageInfo });
    const goNext = () => dispatch({ type: GET_NEXT_PAGE, pageInfo });

    console.log({ user, repositories });
    return (
      <>
        <WelcomeUser login={login} />
        <RepositorySearch onSubmit={onSubmit} />
        {isSubmitTouched && (
          <RepositoryList
            hasNextPage={pageInfo?.hasNextPage}
            hasPreviousPage={pageInfo?.hasPreviousPage}
            user={user}
            repositories={repositories}
            goBack={goBack}
            goNext={goNext}
          />
        )}
      </>
    );
  },
  {
    user: WelcomeUserFragment,
    repositories: RepositoryListFragment,
  }
);

const Test = React.memo(
  ({
    variables,
    onSubmit,
    isSubmitTouched,
    dispatch,
  }: any) => {
    return (
      <QueryRenderer<MainPageQuery>
        environment={environment}
        query={MainPageRequest}
        variables={variables}
        render={({ props, error }) => {
          console.log({ props }, "!");
          return (
            <MainPageBase
              repositories={props}
              user={props?.viewer}
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

export function MainPage() {
  const [repositoryName, setRepositoryName] = React.useState("");
  const [isSubmitTouched, setSubmitTouch] = React.useState(false);

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { pageInfo } = state;

  const variables = React.useMemo(() => {
    console.log("calculate variables", pageInfo);
    return state.isBack
      ? {
          repositoryName,
          last: PAGE_SIZE,
          before: pageInfo.startCursor,
        }
      : {
          repositoryName,
          first: PAGE_SIZE,
          after: pageInfo.endCursor,
        };
  }, [pageInfo, repositoryName]);

  const onSubmit = React.useCallback((value) => {
    setSubmitTouch(true);
    setRepositoryName(value);
  }, []);

  return (
    <Test
      dispatch={dispatch}
      onSubmit={onSubmit}
      isSubmitTouched={isSubmitTouched}
      variables={variables}
    />
  );
}
