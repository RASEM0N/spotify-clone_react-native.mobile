//#region НАВИГАЦИЯ
export type RootStackParamList = {
    Root: undefined
    NotFound: undefined
}

export type BottomTabParamList = {
    Home: undefined
    'Your Library': undefined
    Premium: undefined
    Search: undefined
}

export type HomeParamList = {
    HomeScreen: undefined
    AlbumScreen: undefined
}

export type TabTwoParamList = {
    TabTwoScreen: undefined
}
//#endregion

export interface ID {
    id: string
}

export interface Album extends ID {
    imageUri: string
    artistsHeadline: string
}

export interface Song extends ID {
    title: string
    imageUri: string
    artist: string
}

export interface AlbumCategory extends ID {
    title: string
    albums: Album[]
}

export interface AlbumInfoHeader extends Album {
    name: string
    by: string
    numberOfLikes: number
}

export interface AlbumDetails extends AlbumInfoHeader {
    backgroundImage?: string
    songs: Song[]
}
