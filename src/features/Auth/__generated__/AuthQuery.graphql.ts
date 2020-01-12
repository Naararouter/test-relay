/* tslint:disable */
/* @relayHash 1b77f3efcb98d676d950f8a6ede286a3 */

import { ConcreteRequest } from "relay-runtime";
export type AuthQueryVariables = {};
export type AuthQueryResponse = {
    readonly viewer: {
        readonly login: string;
    };
};
export type AuthQuery = {
    readonly response: AuthQueryResponse;
    readonly variables: AuthQueryVariables;
};



/*
query AuthQuery {
  viewer {
    login
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AuthQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AuthQuery",
    "id": null,
    "text": "query AuthQuery {\n  viewer {\n    login\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f5d2285745a4611c9ed760abb4b0cbb7';
export default node;
