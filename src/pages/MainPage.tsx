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
const SET_PAGE_INFO = "SET_PAGE_INFO";

function reducer(state, action) {
  switch (action.type) {
    case GET_NEXT_PAGE: {
      return { ...state, isBack: false };
    }
    case GET_PREV_PAGE: {
      return { ...state, isBack: true };
    }
    case SET_PAGE_INFO: {
      return {
        ...state,
        pageInfo: action.pageInfo,
      };
    }
    default:
      throw new Error();
  }
}

const MainPageBase = createFragmentContainer(
  ({ response, error, onSubmit, isSubmitTouched, state, dispatch, user }: any) => {
    const prevResponse = usePrevious(user);
    if (error) {
      return <div>Error!</div>;
    }
    const login = user ? user.login : prevResponse?.login;

    const goBack = () => dispatch({ type: GET_PREV_PAGE });
    const goNext = () => dispatch({ type: GET_NEXT_PAGE });
    const setPageInfo = React.useCallback(
      (pageInfo) => dispatch({ type: SET_PAGE_INFO, pageInfo }),
      []
    );
    // if (!props) {
    //   return <div>Loading repositories...</div>;
    // }
    console.log({ prevResponse, response, user });
    return (
      <>
        <WelcomeUser login={login} />
        <RepositorySearch onSubmit={onSubmit} />
        {isSubmitTouched && (
          <RepositoryList
            hasNextPage={state.hasNextPage}
            hasPreviousPage={state.hasPreviousPage}
            user={user}
            repositories={response}
            goBack={goBack}
            goNext={goNext}
            setPageInfo={setPageInfo}
          />
        )}
      </>
    );
  },
  {
    user: WelcomeUserFragment,
  }
);

const Test = React.memo(
  ({ variables, onSubmit, isSubmitTouched, state, dispatch }: any) => {
    return (
      <QueryRenderer<MainPageQuery>
        environment={environment}
        query={MainPageRequest}
        variables={variables}
        render={({ props, error }) => {
          console.log({ props }, '!');
          return (
              <MainPageBase
                  response={props}
                  user={props?.viewer}
                  error={error}
                  onSubmit={onSubmit}
                  isSubmitTouched={isSubmitTouched}
                  state={state}
                  dispatch={dispatch}
              />
          )
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
    // console.log("calculate variables");
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
  }, [state.isBack, repositoryName]);

  const onSubmit = React.useCallback((value) => {
    setSubmitTouch(true);
    setRepositoryName(value);
  }, []);

  return (
    <Test
      state={state}
      dispatch={dispatch}
      onSubmit={onSubmit}
      isSubmitTouched={isSubmitTouched}
      variables={variables}
    />
  );
}
