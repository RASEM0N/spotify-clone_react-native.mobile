//#region other
export type RootStackParamList = {
    Root: undefined
    NotFound: undefined
}

export type BottomTabParamList = {
    TabOne: undefined
    TabTwo: undefined
}

export type TabOneParamList = {
    TabOneScreen: undefined
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
