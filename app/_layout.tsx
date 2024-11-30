import { Colors } from "@/constants/Colors";
import AppProvider from "@/context/AppContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const backgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background')

  return (
    <ThemeProvider value={colorScheme == 'dark' ? DarkTheme : DefaultTheme}>
      <AppProvider>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundColor}
        />

        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='management' options={{ headerShown: false }} />
        </Stack>
      </AppProvider>
    </ThemeProvider>
  )
}
