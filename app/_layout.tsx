import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import { TratamentosProvider } from "../context/TratamentosContext";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <TratamentosProvider>
          <Navbar />
          <Stack screenOptions={{ headerShown: false }} />
        </TratamentosProvider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
