export interface Ability {
    ability: {
        name: string;
        url?: string | undefined;
    };
    is_hidden?: boolean | undefined;
    slot?: number | undefined;
}

export interface Pokemon {
    id: number;
    name: string;
    abilities: Ability[];
    sprites: {
        front_default: string;
    }
}