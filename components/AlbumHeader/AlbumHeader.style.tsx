import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },

    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 18,
        color: '#9ea09f',
    },
    creatorContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})
