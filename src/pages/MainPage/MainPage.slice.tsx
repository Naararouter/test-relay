export const PAGE_SIZE = 10;

export const initialState = {
  isBack: null,
  repositoryName: "",
  isSubmitTouched: false,
  pageInfo: {
    startCursor: null,
    endCursor: null,
    hasNextPage: null,
    hasPreviousPage: null,
  },
};

export const GET_NEXT_PAGE = "GET_NEXT_PAGE";
export const GET_PREV_PAGE = "GET_PREV_PAGE";
export const SET_REPOSITORY_NAME = "SET_REPOSITORY_NAME";

export function mainPageReducer(state: typeof initialState, action) {
  switch (action.type) {
    case GET_NEXT_PAGE: {
      return { ...state, isBack: false, pageInfo: action.pageInfo };
    }
    case GET_PREV_PAGE: {
      return { ...state, isBack: true, pageInfo: action.pageInfo };
    }
    case SET_REPOSITORY_NAME: {
      return { ...state, repositoryName: action.value, isSubmitTouched: true };
    }
    default:
      throw new Error();
  }
}
