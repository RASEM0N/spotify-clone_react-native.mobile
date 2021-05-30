import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Album as AlbumType } from '../../types'
import styles from './AlbumCategory.style'
import Album from '../Album/Album'

export interface AlbumCategory {
    title: string
    albums: AlbumType[]
}

interface PropsType extends AlbumCategory {}

const AlbumCategory: React.FC<PropsType> = ({ title, albums }) => {
    return (
        <View style={styles.container}>
            {/*Title of category*/}
            <Text style={styles.title}>{title}</Text>
            {/*List of albums*/}
            <FlatList
                horizontal={true}
                data={albums}
                renderItem={({ item }) => <Album {...item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default AlbumCategory
