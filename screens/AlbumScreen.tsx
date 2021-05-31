import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import albumDetails from '../data/albumDetails'
import SongListItem from '../components/SongListItem/SongListItem'

interface PropsType {}

const AlbumScreen: React.FC<PropsType> = ({}) => {
    const route = useRoute<RouteProp<{ params: { albumId: string } }, 'params'>>()

    useEffect(() => {}, [])

    return (
        <View>
            <Text
                style={{
                    color: 'white',
                }}
            >
                <SongListItem {...albumDetails.songs[0]} />
            </Text>
        </View>
    )
}

export default AlbumScreen
