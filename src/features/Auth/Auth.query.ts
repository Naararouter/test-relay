import { graphql } from "relay-runtime";

export const AuthRequest = graphql`
  query AuthQuery {
    viewer {
      ...Auth_user
    }
  }
`;

export const AuthRequestFragment = graphql`
  fragment Auth_user on User {
    id
    login
  }
`;
