import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import AlbumCategory from '../components/AlbumCategory/AlbumCategory'
import { Album } from '../types'

const albumsMockData: Album[] = [
    {
        id: '1',
        imageUrl:
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb7cf464906961.5ae1ab010eeb5.png',
        artistHeadline: 'W I N T E R - S P R I N G 2018 COMPILATION on Behance',
    },
    {
        id: '2',
        imageUrl: 'https://i.pinimg.com/originals/bb/41/3f/bb413fec71c167588ff6861c4a2e3019.jpg',
        artistHeadline: 'Funky abstract album cover art designed by Criss_G. #albumco',
    },
    {
        id: '3',
        imageUrl:
            'https://avatars.yandex.net/get-music-content/4716681/1a11b026.a.14648304-1/m1000x1000?webp=false',
        artistHeadline: 'My Name In Vain - Tone G',
    },
    {
        id: '4',
        imageUrl:
            'https://kotofoto.ru/product_img/3100/152280/152280_vinilovaya_plastinka_script_the_freedom_childm.jpg?v=1508414612',
        artistHeadline: 'Виниловая пластинка Script, The, Freedom Child',
    },
    {
        id: '5',
        imageUrl: 'https://img-fotki.yandex.ru/get/15556/19830795.b3/0_ad14f_ec925637_orig.jpg',
        artistHeadline: 'Концерт: Coldplay - Ghost Stories Live 2014 - Apelzin.ru',
    },
]

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://cdn.hipwallpaper.com/i/17/23/Jc2f7Z.jpg',
                }}
                style={styles.image}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <AlbumCategory title="RUSSIA" albums={albumsMockData} />
                <AlbumCategory title="BAN" albums={albumsMockData} />
                <AlbumCategory title="BAN" albums={albumsMockData} />
                <AlbumCategory title="BAN" albums={albumsMockData} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
})
