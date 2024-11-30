import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ManagementLayout() {
    return (
        <Stack>
            <Stack.Screen name='rollMaterial' options={{ headerShown: true, title: 'Agregar Rollo' }} />
            <Stack.Screen name='rawMaterial' options={{ headerShown: true, title: 'Gestionar Materiales' }} />
            <Stack.Screen name='process' options={{ headerShown: true, title: 'Gestionar Procesos' }} />
        </Stack>
    )
}