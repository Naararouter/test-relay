import React from "react";

export function RepositorySearch({ onSubmit }) {
  const inputRef = React.useRef(null);

  return (
    <form
      action="#"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(inputRef.current.value);
      }}
    >
      <input ref={inputRef} name="repositoryName" />
      <button type="submit">Search</button>
    </form>
  );
}
