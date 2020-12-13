import React, { Component, useState } from 'react'
import { Text, View, Image, ActivityIndicator ,TouchableOpacity} from 'react-native';
import { styles } from '../style';
import GButton from './Gbutton';
import { share } from '../sorvices/sharing';


export default function item({ product, navigation }) {
    const [loading, setLoading] = useState(false);
    const shareButton = () => {
        return loading ? <ActivityIndicator style={styles.loading} size="large" color="green" /> :
            <GButton title="Share" clickFun={async () => {
                setLoading(true);
                await share(product.image, product.title);
                setLoading(false);

            }}></GButton>;
    }
    return (

        <View style={styles.product}>
            <TouchableOpacity activeOpacity={.5} onPress={() => { navigation.navigate('Product', { product: product }) }}>
                <Image  style={styles.image} source={{ uri: product.image }} />
            </TouchableOpacity>
            <View>
                <Text style={[styles.text]}>{product.title}</Text>
            </View>
            <View>
                <Text style={[styles.text]}>{product.price} $</Text>
            </View>
            <View style={styles.buttonBuyView}>
                {/* <Button title="Buy" style={styles.buttonBuy}/> */}
                <GButton title="Details" clickFun={() => { navigation.navigate('Product', { product: product }) }}/>
                {shareButton()}
            </View>
        </View>
    );
}