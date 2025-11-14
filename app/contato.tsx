import { Box, Button, FormControl, Input, ScrollView, Text, TextArea, VStack } from "native-base";
import React, { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  // Validações simples
  const validateField = (field: string, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = "Campo obrigatório.";
    } else if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email inválido.";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field: string) => {
    validateField(field, form[field as keyof typeof form]);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    Object.values(form).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => e === "");

  const handleSubmit = () => {
    console.log("Mensagem enviada:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box flex={1} p={6} bg="white">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Contato
        </Text>

        <VStack space={4}>
          <FormControl isInvalid={!!errors.nome}>
            <FormControl.Label>Nome</FormControl.Label>
            <Input
              value={form.nome}
              onChangeText={(value) => handleChange("nome", value)}
              onBlur={() => handleBlur("nome")}
              placeholder="Digite seu nome"
            />
            {errors.nome ? <FormControl.ErrorMessage>{errors.nome}</FormControl.ErrorMessage> : null}
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={form.email}
              onChangeText={(value) => handleChange("email", value)}
              onBlur={() => handleBlur("email")}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email ? <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> : null}
          </FormControl>

          <FormControl isInvalid={!!errors.mensagem}>
            <FormControl.Label>Mensagem</FormControl.Label>
            <TextArea
              value={form.mensagem}
              onChange={(e) => handleChange("mensagem", e.nativeEvent.text)}
              onBlur={() => handleBlur("mensagem")}
              placeholder="Escreva sua mensagem"
              totalLines={4}
            />

            {errors.mensagem ? <FormControl.ErrorMessage>{errors.mensagem}</FormControl.ErrorMessage> : null}
          </FormControl>

          <Button
            mt={4}
            colorScheme="primary"
            onPress={handleSubmit}
            isDisabled={!isFormValid}
          >
            Enviar
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
