export interface Genre {
    id : number,
    name : string,
}

export interface GenreResultArray {
    results : Genre[],
    count: number,
    statutCode: number 
}

export interface GenreResult {
    result : Genre,
    statusCode : number
}