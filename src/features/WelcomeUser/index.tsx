import React from "react";

export const WelcomeUser = React.memo(({ login }: { login: string }) => {
  return <span>Hello, {login}!</span>;
});

WelcomeUser.displayName = "WelcomeUser";
