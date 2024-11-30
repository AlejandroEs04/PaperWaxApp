import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText'


type InputProps = {
    name: string, 
    value: string, 
    onChange?: React.Dispatch<React.SetStateAction<string>>
}   

export default function Input({name, onChange, value} : InputProps) {
    return (
        <>
            <ThemedText style={styles.label}>{name}</ThemedText>
            <TextInput
                style={styles.input}
                placeholder={name}
                value={value}
                onChangeText={onChange}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 'auto',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 20,
        borderWidth: 0,
        marginBottom: 12,
        paddingHorizontal: 14,
    },
    label: {
        fontSize: 20, 
        fontWeight: '800', 
        marginBottom: 5
    }
})