export type PetItem = {
    name: string;
    type: string;
};

export type PetsOwner = {
    name: string;
    age: number;
    gender: string;
    pets: PetItem[] | null;
};
