//#region other
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
    Home: undefined
    Album: undefined
}

export type TabTwoParamList = {
    TabTwoScreen: undefined
}
//#endregion

export interface Album {
    id: string
    imageUrl: string
    artistHeadline: string
}
