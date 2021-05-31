import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { AlbumCategory as AlbumCategoryType } from '../../types'
import styles from './AlbumCategory.style'
import Album from '../Album/Album'

interface PropsType extends AlbumCategoryType {}

const AlbumCategory: React.FC<PropsType> = ({ title, albums, id }) => {
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
