import React from "react";

export const RepositorySearch = React.memo(
  ({ onSubmit }: { onSubmit: (value: string) => void }) => {
    const inputRef = React.useRef(null);

    return (
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(inputRef.current.value);
        }}
      >
        <input ref={inputRef} name="repositoryName" />
        <button type="submit">Search</button>
      </form>
    );
  }
);

RepositorySearch.displayName = "RepositorySearch";
