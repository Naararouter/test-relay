import React from "react";

export const WelcomeUser = React.memo(({ login }: any) => {
    return <span>Hello, {login}!</span>;
});
