import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/components/ThemedView'
import ThemedText from '@/components/ThemedText'
import Input from '@/components/Input'
import ThemedButton from '@/components/ThemedButton'

export default function account() {
    const [editInfo, setEditInfo] = useState(false)
    const [userName, setUserName] = useState('')
    const [currentPasswords, setCurrentPasswords] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    return (
        <ThemedView>
            <ScrollView>
                <View style={{ paddingHorizontal: 12 }}>
                    <ThemedText type='title'>Cuenta</ThemedText>
                    <ThemedText>Gestiona la información del usuario</ThemedText>

                    <View style={{ marginTop: 20 }}>
                        <Input 
                            name='Nombre de usuario'
                            value={userName}
                            onChange={setUserName}
                        />

                        {editInfo && (
                            <>
                                <Input 
                                    name='Contraseña actual'
                                    value={currentPasswords}
                                    onChange={setCurrentPasswords}
                                />
                            </>
                        )}

                        <ThemedButton 
                            onPress={() => {
                                setEditInfo(!editInfo)
                            }}
                            title={editInfo ? 'Cancelar' : 'Cambiar Contraseña'}
                        />
                        
                        <ThemedButton 
                            onPress={() => {
                                setEditInfo(!editInfo)
                            }}
                            type='danger'
                            styles={{
                                marginTop:10
                            }}
                            title='Cerrar Sesión'
                        />
                    </View>
                </View>
            </ScrollView>
        </ThemedView>
    )
}