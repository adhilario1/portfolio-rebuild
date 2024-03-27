/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPosts = /* GraphQL */ `mutation CreatePosts(
  $input: CreatePostsInput!
  $condition: ModelPostsConditionInput
) {
  createPosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostsMutationVariables,
  APITypes.CreatePostsMutation
>;
export const updatePosts = /* GraphQL */ `mutation UpdatePosts(
  $input: UpdatePostsInput!
  $condition: ModelPostsConditionInput
) {
  updatePosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostsMutationVariables,
  APITypes.UpdatePostsMutation
>;
export const deletePosts = /* GraphQL */ `mutation DeletePosts(
  $input: DeletePostsInput!
  $condition: ModelPostsConditionInput
) {
  deletePosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostsMutationVariables,
  APITypes.DeletePostsMutation
>;
export const createGames = /* GraphQL */ `mutation CreateGames(
  $input: CreateGamesInput!
  $condition: ModelGamesConditionInput
) {
  createGames(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGamesMutationVariables,
  APITypes.CreateGamesMutation
>;
export const updateGames = /* GraphQL */ `mutation UpdateGames(
  $input: UpdateGamesInput!
  $condition: ModelGamesConditionInput
) {
  updateGames(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGamesMutationVariables,
  APITypes.UpdateGamesMutation
>;
export const deleteGames = /* GraphQL */ `mutation DeleteGames(
  $input: DeleteGamesInput!
  $condition: ModelGamesConditionInput
) {
  deleteGames(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGamesMutationVariables,
  APITypes.DeleteGamesMutation
>;
