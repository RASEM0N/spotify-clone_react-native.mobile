import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './PlayerWidget.style'
import { Song } from '../../types'
import { Audio, AVPlaybackStatus } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'

interface PropsType {}

const song: Song = {
    id: '1',
    imageUri:
        'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget: React.FC<PropsType> = ({}) => {
    const [sound, setSound] = useState<Sound | null>(null)
    const [duration, setDuration] = useState<number | null>(null)
    const [position, setPosition] = useState<number | null>(null)
    const [isPlaying, setIsPlyaing] = useState<boolean>(true)

    const onPlaybackStatusUpdate = (status: any) => {
        setIsPlyaing(status.isPlaying as boolean)
        setPosition(status.positionMillis as number)
        setDuration(status.durationMillis as number)
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync()
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            {
                uri: 'https://musify.club/track/dl/4248952/infernal-uri-balagan-hava-nagila.mp3',
            },
            {
                shouldPlay: isPlaying,
            },
            onPlaybackStatusUpdate,
        )
        setSound(newSound)
    }

    useEffect(() => {
        playCurrentSong()
    }, [])

    const onPlayPausePress = async () => {
        if (!sound) {
            return
        }

        if (isPlaying) {
            await sound.stopAsync()
        } else {
            await sound.playAsync()
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0
        }

        return (position / duration) * 100
    }

    if (!song) {
        return null
    }

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.progress,
                    {
                        width: `${getProgress()}%`,
                    },
                ]}
            />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        <AntDesign name="hearto" size={30} color={'white'} />
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome
                                name={isPlaying ? 'pause' : 'play'}
                                size={30}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget
