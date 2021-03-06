import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../style'

export default function GButton({ title, clickFun,style}) {
    return (
        <Pressable
        onPress={clickFun}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#1e9e1e7d'
                        : '#1e9e1e'
                },
                styles.wrapperCustom,style
            ]}>
            {({ pressed }) => (
                <Text style={[styles.text, styles.textWhite]}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
}