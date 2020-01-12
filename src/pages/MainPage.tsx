import React from "react";
import { Auth } from "../features/Auth";
import { RepositoryList } from "../features/Repository/List";
import { RepositorySearch } from "../features/Repository/Search";

export function MainPage() {
  const [repositoryName, setRepositoryName] = React.useState("");
  const [submitCount, setSubmitCount] = React.useState(0);

  const onSubmit = value => {
    setSubmitCount(submitCount + 1);
    setRepositoryName(value);
  };

  return (
    <Auth>
      <RepositorySearch onSubmit={onSubmit} />
      {submitCount > 0 && <RepositoryList repositoryName={repositoryName} />}
    </Auth>
  );
}
