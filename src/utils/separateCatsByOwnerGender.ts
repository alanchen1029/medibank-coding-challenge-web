import { PetItem, PetsOwner } from '../components/CatsList/types';

const getAllCatNamesFromPetList = (pets: PetItem[] | null) => {
    if (!pets) return [];

    return pets.filter((pet) => pet.type === 'Cat').map((cat) => cat.name);
};

export const separateCatsByOwnerGender = (petsOwners: PetsOwner[]) => {
    const catsWithMaleOwner: string[] = [];
    const catsWithFemaleOwner: string[] = [];

    petsOwners.forEach((owner) => {
        if (owner.gender === 'Male') {
            catsWithMaleOwner.push(...getAllCatNamesFromPetList(owner.pets));
        } else if (owner.gender === 'Female') {
            catsWithFemaleOwner.push(...getAllCatNamesFromPetList(owner.pets));
        }
    });

    return {
        catsWithMaleOwner,
        catsWithFemaleOwner
    };
};
