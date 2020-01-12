/* tslint:disable */
/* @relayHash 714dfc9c92c00fc0b9e69ec7760ca792 */

import { ConcreteRequest } from "relay-runtime";
export type RepositoryListQueryVariables = {
    repositoryName: string;
};
export type RepositoryListQueryResponse = {
    readonly search: {
        readonly nodes: ReadonlyArray<{
            readonly id?: string;
            readonly name?: string;
        } | null> | null;
    };
};
export type RepositoryListQuery = {
    readonly response: RepositoryListQueryResponse;
    readonly variables: RepositoryListQueryVariables;
};



/*
query RepositoryListQuery(
  $repositoryName: String!
) {
  search(query: $repositoryName, type: REPOSITORY, last: 20) {
    nodes {
      __typename
      ... on Repository {
        id
        name
      }
      ... on Node {
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "repositoryName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "repositoryName"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "REPOSITORY"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RepositoryListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "search",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nodes",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "Repository",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RepositoryListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "search",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nodes",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Repository",
                "selections": [
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RepositoryListQuery",
    "id": null,
    "text": "query RepositoryListQuery(\n  $repositoryName: String!\n) {\n  search(query: $repositoryName, type: REPOSITORY, last: 20) {\n    nodes {\n      __typename\n      ... on Repository {\n        id\n        name\n      }\n      ... on Node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'fb2a36ea364bf93b3780dcc90f394f4d';
export default node;
