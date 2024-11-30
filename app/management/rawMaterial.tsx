import { View } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'
import ThemedText from '@/components/ThemedText'
import ThemedButton from '@/components/ThemedButton'

export default function rawMaterial() {
    return (
        <ThemedView>
            <View style={{ marginHorizontal: 12 }}>
                <ThemedText type='title'>Materiales</ThemedText>
                <ThemedText>Gestiona los materiales del sistema</ThemedText>

                <ThemedButton title='Registrar Entrada' styles={{ marginTop: 10 }} onPress={() => console.log('Agregando')} />
            </View>
        </ThemedView>
    )
}