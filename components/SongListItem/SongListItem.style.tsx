import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.02)',
        flexDirection: 'row',
        borderColor: '#262626',
        padding: 15,
    },
    secondContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    },
})
