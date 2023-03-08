export interface Artsit {
    id: number;
    firstname: string;
    lastname: string;
    birthdate: Date;
    deathdate: Date;
}

export interface ArtistResultArray {
    results : Artsit[],
    count: number,
    statutCode: number 
}

export interface ArtistResult {
    result : Artsit,
    statusCode : number
}