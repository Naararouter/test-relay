import { graphql } from "relay-runtime";

export const AuthRequest = graphql`
    query AuthQuery {
        viewer {
            login
        }
    }
`;

