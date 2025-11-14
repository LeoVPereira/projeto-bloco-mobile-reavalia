// components/Navbar.tsx
import { Link } from "expo-router";
import { HStack, Pressable, Text } from "native-base";

export default function Navbar() {
  return (
    <HStack
      bg="pink.100"
      px={4}
      py={3}
      justifyContent="space-between"
      alignItems="center"
      shadow={2}
    >
      <Text fontSize="lg" fontWeight="bold" color="rose.600">
        Estética BelaVida
      </Text>

      <HStack space={4}>
        <Link href="/" asChild>
          <Pressable>
            <Text fontWeight="medium" color="gray.700">
              Home
            </Text>
          </Pressable>
        </Link>

        <Link href="/tratamentos" asChild>
          <Pressable>
            <Text fontWeight="medium" color="gray.700">
              Tratamentos
            </Text>
          </Pressable>
        </Link>

        <Link href="/contato" asChild>
          <Pressable>
            <Text fontWeight="medium" color="gray.700">
              Contato
            </Text>
          </Pressable>
        </Link>
      </HStack>
    </HStack>
  );
}
