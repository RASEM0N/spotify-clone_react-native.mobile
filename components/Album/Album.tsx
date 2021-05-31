import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './Album.style'
import { Album as AlbumType } from '../../types'

interface PropsType extends AlbumType {}

const Album: React.FC<PropsType> = ({ id, imageUri, artistsHeadline }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: imageUri,
                }}
                style={styles.image}
            />
            <Text style={styles.text}>{artistsHeadline}</Text>
        </View>
    )
}

export default Album
