import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { AlbumInfoHeader } from '../../types'
import styles from './AlbumHeader.style'
import flatten = StyleSheet.flatten

interface PropsType extends AlbumInfoHeader {}

const AlbumHeader: React.FC<PropsType> = ({
    name,
    imageUri,
    id,
    by,
    artistsHeadline,
    numberOfLikes,
}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUri }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.artist}>{artistsHeadline}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {by}</Text>
                <Text style={styles.likes}>{numberOfLikes}</Text>
            </View>
            <TouchableOpacity onPress={() => console.warn('PRESS')}>
                <View
                    style={[
                        styles.button,
                        {
                            backgroundColor: true ? '#d2313b' : '#13b050',
                        },
                    ]}
                >
                    <Text style={styles.buttonText}>{true ? 'STOP' : 'PLAY'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader
