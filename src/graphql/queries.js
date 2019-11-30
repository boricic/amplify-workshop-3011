/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = `query GetPet($id: ID!) {
  getPet(id: $id) {
    id
    name
    breed
    age
    owner
  }
}
`;
export const listPets = `query ListPets($filter: ModelPetFilterInput, $limit: Int, $nextToken: String) {
  listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      breed
      age
      owner
    }
    nextToken
  }
}
`;
