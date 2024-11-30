import React from 'react'
import { Tabs } from 'expo-router'
import TabBarIcon from '@/components/navigation/TabBarIcon'
import CustomTabBar from '@/components/navigation/CustomTabBar'

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                animation: 'shift',
                headerShown: false, 
                tabBarIconStyle: {
                    marginBottom: 2
                }, 
                tabBarStyle: {
                    minHeight: 60, 
                    height: 'auto'
                }, 
                tabBarLabelStyle: {
                    fontWeight: 800, 
                    fontSize: 12
                }
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen 
                name='account'
                options={{
                    title: 'Cuenta',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name='index'
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name='management'
                options={{
                    title: 'Administración',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'cube' : 'cube-outline'} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}