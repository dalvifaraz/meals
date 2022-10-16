import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';

const IconButton = ({onPress, icon, color, size}) => {
  return (
    <View>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.65,
    }
})