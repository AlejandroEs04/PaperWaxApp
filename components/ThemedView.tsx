import { Platform, StatusBar, StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    header?: boolean;
  };

export default function ThemedView({ style, lightColor, darkColor, header = false, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <View style={[styles.container, { backgroundColor }]} {...otherProps} />
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      paddingTop: 20
    }
  });