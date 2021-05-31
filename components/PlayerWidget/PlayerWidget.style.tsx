import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        backgroundColor: 'rgb(17,17,17)',
        width: '100%',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 5,
        alignSelf: 'flex-start',
        backgroundColor: '#8fef2f',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
        marginRight: 15,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    },
})
