import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.01)',
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
        color: '#bcc3c1',
        fontWeight: 'bold',
        fontSize: 22,
    },
    artist: {
        color: 'rgba(186,186,186,0.86)',
        fontSize: 18,
    },
})
