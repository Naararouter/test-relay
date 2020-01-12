import React from "react";

export function AuthBase({ props, error, children }) {
    if (error) {
        return <div>Error!</div>;
    }
    if (!props) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <span>Hello, {props.viewer.login}!</span>
            {children}
        </div>
    );
}
