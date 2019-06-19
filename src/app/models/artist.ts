import {Image} from "./image";
export interface Artist {
    name: string,
    artist_id: number,
    profile: string,
    releases_url: string,
    urls: string[],
    images: Image[]
}