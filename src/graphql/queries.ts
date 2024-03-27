/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPosts = /* GraphQL */ `query GetPosts($id: ID!) {
  getPosts(id: $id) {
    id
    title
    type
    url
    thumbnail_url
    year
    description
    discipline
    project
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostsQueryVariables, APITypes.GetPostsQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      type
      url
      thumbnail_url
      year
      description
      discipline
      project
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getGames = /* GraphQL */ `query GetGames($id: ID!) {
  getGames(id: $id) {
    id
    title
    preview
    description
    tags
    year
    type
    thumbnail_url
    url
    outbound_url
    outbound_label
    mobile
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGamesQueryVariables, APITypes.GetGamesQuery>;
export const listGames = /* GraphQL */ `query ListGames(
  $filter: ModelGamesFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      preview
      description
      tags
      year
      type
      thumbnail_url
      url
      outbound_url
      outbound_label
      mobile
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGamesQueryVariables, APITypes.ListGamesQuery>;
