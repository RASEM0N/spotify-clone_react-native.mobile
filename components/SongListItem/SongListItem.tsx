import React from 'react'
import { View, Text, Image } from 'react-native'
import { Song } from '../../types'
import styles from './SongListItem.style'

interface PropsType extends Song {}

const SongListItem: React.FC<PropsType> = ({ id, imageUri, title, artist }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <View style={styles.secondContainer}>
                <Text style={styles.title}>
                    {title.length > 21 ? `${title.slice(0, 20)}...` : title}
                </Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
        </View>
    )
}

export default SongListItem
