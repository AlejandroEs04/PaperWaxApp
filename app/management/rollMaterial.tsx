import { View } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'
import ThemedText from '@/components/ThemedText'
import ThemedButton from '@/components/ThemedButton'

export default function rollMaterial() {
    return (
        <ThemedView>
            <View style={{ marginHorizontal: 12 }}>
                <ThemedText type='title'>Bobinados</ThemedText>
                <ThemedText>Gestiona los bobinados del sistema</ThemedText>

                <ThemedButton title='Registrar Bobinado' styles={{ marginTop: 10 }} onPress={() => console.log('Agregando')} />
            </View>
        </ThemedView>
    )
}