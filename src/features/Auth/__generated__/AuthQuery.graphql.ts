/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AuthQueryVariables = {};
export type AuthQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"Auth_user">;
    };
};
export type AuthQuery = {
    readonly response: AuthQueryResponse;
    readonly variables: AuthQueryVariables;
};



/*
query AuthQuery {
  viewer {
    ...Auth_user
    id
  }
}

fragment Auth_user on User {
  id
  login
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Auth_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "login",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AuthQuery",
    "operationKind": "query",
    "text": "query AuthQuery {\n  viewer {\n    ...Auth_user\n    id\n  }\n}\n\nfragment Auth_user on User {\n  id\n  login\n}\n"
  }
};
(node as any).hash = '27ed09f9e9c263906d7ce947ba3d8b69';
export default node;
