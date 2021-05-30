import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './Album.style'
import { Album as AlbumType } from '../../types'

interface PropsType extends AlbumType {}

const Album: React.FC<PropsType> = ({ id, imageUrl, artistHeadline }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: imageUrl,
                }}
                style={styles.image}
            />
            <Text style={styles.text}>{artistHeadline}</Text>
        </View>
    )
}

export default Album
