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

export interface Album {
    id: string
    imageUri: string
    artistsHeadline: string
}
