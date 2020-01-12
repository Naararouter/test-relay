import React from "react";

export function RepositoryListBase({ error, props }) {
  if (error) {
    return <div>Error!</div>;
  }
  if (!props) {
    return <div>Loading repositories...</div>;
  }
  return (
    <div>
      <span>
        <b>Repository list:</b>
      </span>
      <ul>
        {props.search.nodes.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
