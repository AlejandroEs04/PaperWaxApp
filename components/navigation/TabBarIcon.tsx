import React, { ComponentProps } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { IconProps } from '@expo/vector-icons/build/createIconSet'

export default function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
    return <Ionicons size={30} style={[{}, style]} {...rest} />
}