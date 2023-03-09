export interface Album {
    id: number;
    title: string;
    cover: string;
}

export interface AlbumArray {
    results: Album[];
    count: number;
    statusCode: number
}

export interface AlbumResult {
    result : Album;
    statusCode: number
}