import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { AlbumDetails } from '../types'

interface PropsType {}

const album: AlbumDetails = {
    id: '2',
    name: 'Пожилая чимичанга',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    artistsHeadline: 'Post Malone, Drake, Eminem',
    songs: [
        {
            id: '1',
            imageUri:
                'https://i.pinimg.com/originals/bb/41/3f/bb413fec71c167588ff6861c4a2e3019.jpg',
            titie: 'Пожилой звон',
            artist: 'Макака',
        },
        {
            id: '2',
            imageUri:
                'https://i.pinimg.com/originals/bb/41/3f/bb413fec71c167588ff6861c4a2e3019.jpg',
            titie: 'Пожилой звон',
            artist: 'Макака',
        },
        {
            id: '3',
            imageUri:
                'https://i.pinimg.com/originals/bb/41/3f/bb413fec71c167588ff6861c4a2e3019.jpg',
            titie: 'Пожилой звон',
            artist: 'Макака',
        },
    ],
}

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
                AlbumScreen {route.params.albumId}
            </Text>
        </View>
    )
}

export default AlbumScreen
