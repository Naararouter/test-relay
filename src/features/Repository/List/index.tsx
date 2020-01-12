import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../../../relay.env";
import { RepositoryListQuery } from "./__generated__/RepositoryListQuery.graphql";
import { RepositoryListBase } from "./RepositoryList";
import { RepositoryListRequest } from "./RepositoryList.query";

const PAGE_SIZE = 10;

const initialState = { isBack: false, startCursor: null, endCursor: null };
const GET_NEXT_PAGE = "GET_NEXT_PAGE";
const GET_PREV_PAGE = "GET_PREV_PAGE";
const SET_CURSOR = "SET_CURSOR";

function reducer(state, action) {
  switch (action.type) {
    case GET_NEXT_PAGE: {
      return { ...state, isBack: false };
    }
    case GET_PREV_PAGE: {
      return { ...state, isBack: true };
    }
    case SET_CURSOR:
      state.endCursor = action.endCursor;
      state.startCursor = action.startCursor;
      return state;
    default:
      throw new Error();
  }
}

export function RepositoryList({ repositoryName }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const goBack = () => dispatch({ type: GET_PREV_PAGE });
  const goNext = () => dispatch({ type: GET_NEXT_PAGE });
  const setCursor = (startCursor, endCursor) =>
    dispatch({ type: SET_CURSOR, startCursor, endCursor });

  const variables = React.useMemo(() => {
    return state.isBack
      ? {
          repositoryName,
          last: PAGE_SIZE,
          before: state.startCursor,
        }
      : {
          repositoryName,
          first: PAGE_SIZE,
          after: state.endCursor,
        };
  }, [state, repositoryName]);

  return (
    <>
      <div>
        <span>
          <b>Repository list:</b>
        </span>
        <button onClick={goBack}>Prev Page</button>
        <button onClick={goNext}>Next Page</button>
      </div>
      <QueryRenderer<RepositoryListQuery>
        environment={environment}
        query={RepositoryListRequest}
        variables={variables}
        render={({ props, error }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading repositories...</div>;
          }
            console.log({ props });
          return (
            <RepositoryListBase repository={props} user={props.viewer} setCursor={setCursor} />
          );
        }}
      />
    </>
  );
}
