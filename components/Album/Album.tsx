import React from 'react'
import { Image, View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './Album.style'
import { Album as AlbumType } from '../../types'
import { useNavigation } from '@react-navigation/native'

interface PropsType extends AlbumType {}

const Album: React.FC<PropsType> = ({ id, imageUri, artistsHeadline }) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('AlbumScreen', { albumId: id })
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <Text style={styles.text}>{artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Album
