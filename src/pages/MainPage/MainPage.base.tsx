import { createFragmentContainer } from "react-relay";
import { usePrevious } from "../../hooks/usePrevious";
import { WelcomeUser } from "../../features/WelcomeUser";
import { RepositorySearch } from "../../features/Repository/Search";
import { RepositoryList } from "../../features/Repository/List";
import { WelcomeUserFragment } from "../../features/WelcomeUser/WelcomeUser.query";
import { RepositoryListFragment } from "../../features/Repository/List/RepositoryList.query";
import React from "react";
import { GET_PREV_PAGE, GET_NEXT_PAGE } from "./MainPage.slice";
import { IMainPageQueryRenderer } from "./MainPage.query-render";
import { WelcomeUser_user } from "../../features/WelcomeUser/__generated__/WelcomeUser_user.graphql";
import { RepositoryList_repositories } from "../../features/Repository/List/__generated__/RepositoryList_repositories.graphql";

export interface IMainPageFragment {
  user: WelcomeUser_user;
  repositories: RepositoryList_repositories;
}

interface IMainPageBase
  extends Omit<IMainPageQueryRenderer, "variables">,
    IMainPageFragment {
  error: INTENTIONAL_ANY;
}

export const MainPageBase = createFragmentContainer(
  ({
    error,
    onSubmit,
    isSubmitTouched,
    dispatch,
    user,
    repositories,
  }: IMainPageBase) => {
    if (error) {
      return <div>Error!</div>;
    }
    const prevUser = usePrevious(user);

    const pageInfo = repositories?.search?.pageInfo;
    const login = user ? user.login : prevUser?.login;

    const goBack = () => dispatch({ type: GET_PREV_PAGE, pageInfo });
    const goNext = () => dispatch({ type: GET_NEXT_PAGE, pageInfo });

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
