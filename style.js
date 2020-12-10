import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // marginTop: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loading: {
        flex: 1
    },
    textBig: {
        fontSize: 35, backgroundColor: "red"
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
    },
    searchContainer: {
        flex: 0,
        padding: 8,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse"
    },
    searchInput: {
        width: '70%',
        height: 40, borderColor: 'gray', borderWidth: 1,
        borderRadius: 12,
        margin: 3,
        padding: 10
    },
    product: {
        flex: 1,
        flexDirection: "column",
        width: '80%',
        height: 260,
        alignSelf: 'center',
        margin: 30,
        padding: 70,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        elevation: 50,
        alignItems: 'center'
    },

    text: {
        textAlign: 'center',
        fontFamily: 'Antic_400Regular'
    },
    textWhite: {
        color: '#fff',
    },
    buttonBuyView: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    wrapperCustom: {
        width: "40%",
        margin: "5%",
        borderRadius: 12,
        padding: 8,
    }
});

const productStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        padding: 30
    },
    buttonsView: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    },
    headerView: {
        marginBottom: 10,
        flex: 0.10,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    header: {
        fontSize: 28,
        marginBottom: 7
    },
    textPrice: {
        marginTop: 25
    },
    textView: {
        flex: 0.07,
        width: '70%'
    },
    imageView: {
        borderRadius: 350,
        backgroundColor: '#fff',
        padding: 10,
        flex: 0.4, width: '80%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    image: {
        flex: 0.8,
        width: '75%',
    },
    text: {
        fontSize: 20
    }
});
export { styles, productStyles };  