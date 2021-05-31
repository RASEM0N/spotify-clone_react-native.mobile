import React from 'react'
import { Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

interface PropsType {}

const AlbumScreen: React.FC<PropsType> = ({}) => {
    const route = useRoute<RouteProp<{ params: { albumId: string } }, 'params'>>()
    return (
        <View>
            <Text
                style={{
                    color: 'white',
                }}
            >
                AlbumScreen {route.params.albumId}
            </Text>
        </View>
    )
}

export default AlbumScreen
