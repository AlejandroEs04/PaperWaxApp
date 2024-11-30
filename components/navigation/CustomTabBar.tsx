import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const backgroundColor = useThemeColor({ light: Colors.light.container, dark: Colors.dark.container }, 'background')

    return (
        <View style={[styles.tabBar, { backgroundColor }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                    >
                        {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: isFocused ? '#007bff' : '#666', size: 24 })}
                        <Text style={[styles.label, isFocused && styles.focusedLabel]}>{label.toString()}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'auto',
    marginVertical: 10,
    marginHorizontal: 15, 
    borderRadius: 20,
    borderCurve: 'continuous',
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  focusedLabel: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
