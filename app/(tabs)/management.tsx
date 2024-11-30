import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'
import ThemedText from '@/components/ThemedText'
import ContainerList from '@/components/ContainerList'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function management() {
    const color = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, 'text')
    const navigate = useRouter()

    return (
        <ThemedView>
            <ScrollView>
                <View style={{ paddingHorizontal: 12 }}>
                    <ThemedText type='title'>Administración</ThemedText>
                    <ThemedText>Selecciona una de las opciones administrativas</ThemedText>
                </View>

                <ContainerList>
                    <ContainerList.Item onPress={() => navigate.push('/management/rawMaterial')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons color={color} name='grid-outline' size={28} />
                        <ThemedText style={{ marginStart: 10 }} type='subtitle'>Materias Primas</ThemedText>
                    </ContainerList.Item>

                    <ContainerList.Item onPress={() => navigate.push('/management/rollMaterial')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons color={color} name='cube-outline' size={28} />
                        <ThemedText style={{ marginStart: 10 }} type='subtitle'>Bobinados</ThemedText>
                    </ContainerList.Item>

                    <ThemedText type='subtitle' style={{ marginTop: 15 }}>Procesos</ThemedText>

                    <ContainerList.Item onPress={() => navigate.push('/management/process')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons color={color} name='build-outline' size={28} />
                        <ThemedText style={{ marginStart: 10 }} type='subtitle'>Procesos</ThemedText>
                    </ContainerList.Item>

                    <ContainerList.Item style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons color={color} name='barcode-outline' size={28} />
                        <ThemedText style={{ marginStart: 10 }} type='subtitle'>Leer codigo</ThemedText>
                    </ContainerList.Item>
                </ContainerList>
            </ScrollView>
        </ThemedView>
    )
}