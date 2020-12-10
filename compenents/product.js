import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { productStyles } from '../style';
import GButton from './Gbutton';


export default function ProductPage({ route, navigation }) {
    const product = route.params.product;
    return (
        <View style={productStyles.container}>
            <View style={productStyles.headerView}>
                <Text style={[productStyles.header]}>{product.title}</Text>
            </View>
            <View style={productStyles.imageView}>
                <Image style={productStyles.image} source={{ uri: product.image }} />
            </View>
            <View style={[productStyles.textView, productStyles.textPrice]}>
                <Text style={[productStyles.text]}>price: {product.price} $</Text>
            </View>
            <View style={productStyles.textView}>
                <Text style={[productStyles.text]}>quantity: {product.quantity}</Text>
            </View>
            <View style={productStyles.buttonsView}>
                <GButton style={{width:'80%',height:40}} title="Buy" onPress={() => { console.log("buy"); }}></GButton>
            </View>
        </View>
    )
}

