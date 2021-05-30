import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Album from '../components/Album/Album'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Album
                id={'1'}
                imageUrl={
                    'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb7cf464906961.5ae1ab010eeb5.png'
                }
                artistHeadline={'W I N T E R - S P R I N G 2018 COMPILATION on Behance\n'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
