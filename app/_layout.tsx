import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import Navbar from "../components/Navbar";
import { TratamentosProvider } from "../context/TratamentosContext";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <TratamentosProvider>
        <Navbar />
        <Stack screenOptions={{ headerShown: false }} />
      </TratamentosProvider>
    </NativeBaseProvider>
  );
}
