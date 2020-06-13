import { graphql } from "relay-runtime";

export const WelcomeUserFragment = graphql`
  fragment WelcomeUser_user on User {
    id
    login
  }
`;
