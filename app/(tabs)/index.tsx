import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'
import ThemedText from '@/components/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from '@/constants/Colors'
import ThemedButton from '@/components/ThemedButton'
import ContainerList from '@/components/ContainerList'

export default function home() {
    const appTitleColor = useThemeColor({ light: Colors.light.primary, dark: Colors.dark.primary }, 'text')
    const containerItem = useThemeColor({ light: Colors.light.container, dark: Colors.dark.container }, 'container')

    return (
        <ThemedView style={{ paddingTop: 0 }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 12 }}>
                    <Text style={[{ color: appTitleColor }, styles.appTitle]}>PaperWax App</Text>

                    <ThemedText type='title' style={{ marginTop: 10 }}>Procesos</ThemedText>
                    <ThemedText>Gestiona los procesos activos o pendientes</ThemedText>

                    <ThemedButton 
                        title='Iniciar Proceso'
                        onPress={() => console.log('Creando')}
                        styles={{
                            marginTop: 10
                        }}
                    />
                </View>

                <ContainerList>
                    <ContainerList.Item>
                        <View style={{ gap: 10, width: '50%' }}>
                            <View>
                                <ThemedText>Producto: </ThemedText>
                                <ThemedText style={{ fontWeight: 800 }}>Chasa 500gr</ThemedText>
                            </View>
                            <View>
                                <ThemedText>Rollo: </ThemedText>
                                <ThemedText style={{ fontWeight: 800 }}>ADEBGG182101</ThemedText>
                            </View>
                        </View>

                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <View>
                                <ThemedText style={{ textAlign: 'right' }}>Status: <ThemedText style={{ color: '#ef4444', fontWeight: 800 }}>Pending</ThemedText></ThemedText>
                                
                            </View>
                        </View>
                    </ContainerList.Item>
                    
                    <ContainerList.Item>
                        <View style={{ gap: 10, width: '50%' }}>
                            <View>
                                <ThemedText>Producto: </ThemedText>
                                <ThemedText style={{ fontWeight: 800 }}>Chasa 500gr</ThemedText>
                            </View>
                            <View>
                                <ThemedText>Rollo: </ThemedText>
                                <ThemedText style={{ fontWeight: 800 }}>ADEBGG182101</ThemedText>
                            </View>
                        </View>

                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <View>
                                <ThemedText style={{ textAlign: 'right' }}>Status: <ThemedText style={{ color: '#ef4444', fontWeight: 800 }}>Pending</ThemedText></ThemedText>
                                
                            </View>
                        </View>
                    </ContainerList.Item>
                    
                    <ContainerList.Item>
                        <View style={{ gap: 10, width: '50%' }}>
                            <View>
                                <ThemedText>Producto: </ThemedText>
                                <ThemedText style={{ fontWeight: 800 }}>Chasa 500gr</ThemedText>
                            </View>
                            <View>
                                <ThemedText>Rollo: </ThemedText>
                                <ThemedText style={{ fontWeight: 800 }}>ADEBGG182101</ThemedText>
                            </View>
                        </View>

                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <View>
                                <ThemedText style={{ textAlign: 'right' }}>Status: <ThemedText style={{ color: '#fb923c', fontWeight: 900 }}>In progress</ThemedText></ThemedText>
                                
                            </View>
                        </View>
                    </ContainerList.Item>
                </ContainerList>
            </ScrollView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 40, 
        fontWeight: 900
    }, 
    listContainer: {
        paddingHorizontal: 12, 
        marginTop: 18, 
        gap: 8
    }, 
    listItem: {
        paddingHorizontal: 12, 
        paddingVertical: 12, 
        flexDirection: 'row',
        borderRadius: 10
    }
})