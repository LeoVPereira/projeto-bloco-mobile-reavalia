// app/index.tsx
import { Box, Text, VStack } from "native-base";

export default function HomeScreen() {
  return (
    <Box flex={1} bg="white" justifyContent="center" alignItems="center" px={6}>
      <VStack space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color="rose.600">
          Bem-vindo à Clínica BelaVida
        </Text>
        <Text fontSize="md" textAlign="center" color="gray.700">
          Nossa clínica oferece tratamentos modernos para realçar sua beleza e
          promover bem-estar. Agende sua visita e descubra o melhor de você!
        </Text>
      </VStack>
    </Box>
  );
}
