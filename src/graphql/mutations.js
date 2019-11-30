/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPet = `mutation CreatePet(
  $input: CreatePetInput!
  $condition: ModelPetConditionInput
) {
  createPet(input: $input, condition: $condition) {
    id
    name
    breed
    age
  }
}
`;
export const updatePet = `mutation UpdatePet(
  $input: UpdatePetInput!
  $condition: ModelPetConditionInput
) {
  updatePet(input: $input, condition: $condition) {
    id
    name
    breed
    age
  }
}
`;
export const deletePet = `mutation DeletePet(
  $input: DeletePetInput!
  $condition: ModelPetConditionInput
) {
  deletePet(input: $input, condition: $condition) {
    id
    name
    breed
    age
  }
}
`;
