import React from "react";
import {
  mainPageReducer,
  initialState,
  PAGE_SIZE,
  SET_REPOSITORY_NAME,
} from "./MainPage.slice";
import { MainPageQueryRenderer } from "./MainPage.query-render";

export function MainPage() {
  const [state, dispatch] = React.useReducer(mainPageReducer, initialState);
  const { pageInfo, repositoryName, isBack } = state;

  const variables = React.useMemo(() => {
    return isBack
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
  }, [isBack, pageInfo, repositoryName]);

  const onSubmit = React.useCallback((value) => {
    dispatch({ type: SET_REPOSITORY_NAME, value });
  }, []);

  return (
    <MainPageQueryRenderer
      dispatch={dispatch}
      onSubmit={onSubmit}
      isSubmitTouched={state.isSubmitTouched}
      variables={variables}
    />
  );
}
