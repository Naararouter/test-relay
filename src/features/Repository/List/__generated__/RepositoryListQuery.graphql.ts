/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoryListQueryVariables = {
    repositoryName: string;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
};
export type RepositoryListQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"Auth_user">;
    };
    readonly " $fragmentRefs": FragmentRefs<"RepositoryList_repository">;
};
export type RepositoryListQuery = {
    readonly response: RepositoryListQueryResponse;
    readonly variables: RepositoryListQueryVariables;
};



/*
query RepositoryListQuery(
  $repositoryName: String!
  $first: Int
  $last: Int
  $after: String
  $before: String
) {
  viewer {
    ...Auth_user
    id
  }
  ...RepositoryList_repository_18xyDe
}

fragment Auth_user on User {
  id
  login
}

fragment RepositoryList_repository_18xyDe on Query {
  search(query: $repositoryName, type: REPOSITORY, first: $first, after: $after, before: $before, last: $last) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    repositoryCount
    edges {
      node {
        __typename
        ... on Repository {
          id
          name
          viewerHasStarred
        }
        ... on Node {
          id
        }
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repositoryName",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before",
    "type": "String"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v3 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v4 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryListQuery",
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
      },
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "Variable",
            "name": "repositoryName",
            "variableName": "repositoryName"
          }
        ],
        "kind": "FragmentSpread",
        "name": "RepositoryList_repository"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoryListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "login",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "repositoryCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerHasStarred",
                        "storageKey": null
                      }
                    ],
                    "type": "Repository"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
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
    "name": "RepositoryListQuery",
    "operationKind": "query",
    "text": "query RepositoryListQuery(\n  $repositoryName: String!\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n) {\n  viewer {\n    ...Auth_user\n    id\n  }\n  ...RepositoryList_repository_18xyDe\n}\n\nfragment Auth_user on User {\n  id\n  login\n}\n\nfragment RepositoryList_repository_18xyDe on Query {\n  search(query: $repositoryName, type: REPOSITORY, first: $first, after: $after, before: $before, last: $last) {\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    repositoryCount\n    edges {\n      node {\n        __typename\n        ... on Repository {\n          id\n          name\n          viewerHasStarred\n        }\n        ... on Node {\n          id\n        }\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '57ff5223c018da4522c63190c2774734';
export default node;
