import { View, Text, StyleSheet, TouchableOpacity, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

type ContainerListProps = {
    children: ReactNode
}

type ItemProps = {
    children: ReactNode, 
    onPress?: () => void
}

const Item: React.FC<ItemProps & ViewProps> = ({ children, onPress }) => {
    const containerItem = useThemeColor({ light: Colors.light.container, dark: Colors.dark.container }, 'container')

    return (
        <TouchableOpacity onPress={onPress} style={[styles.listItem, { backgroundColor: containerItem }]}>
            {children}
        </TouchableOpacity>
    );
};

const ContainerList: React.FC<ContainerListProps> & { Item: typeof Item } = ({ children }) => {
    return (
        <View style={styles.listContainer}>
            {children}
        </View>
    )
}

ContainerList.Item = Item

export default ContainerList

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 12, 
        marginTop: 18, 
        gap: 8
    }, 
    listItem: {
        paddingHorizontal: 12, 
        paddingVertical: 12, 
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})