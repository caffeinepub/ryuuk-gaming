import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Video {
    title: string;
    thumbnail: ExternalBlob;
    description: string;
    videoLink: string;
}
export interface Game {
    title: string;
    description: string;
    coverImage: ExternalBlob;
}
export interface backendInterface {
    addGame(title: string, coverImage: ExternalBlob, description: string): Promise<void>;
    addVideo(title: string, thumbnail: ExternalBlob, description: string, videoLink: string): Promise<void>;
    getAllGames(): Promise<Array<Game>>;
    getAllVideos(): Promise<Array<Video>>;
    getGame(title: string): Promise<Game>;
    getVideo(title: string): Promise<Video>;
}
