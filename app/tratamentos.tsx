import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Heading,
  Input,
  Spinner,
  Text,
  VStack,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { useTratamentos } from "../context/TratamentosContext";

export default function TratamentosScreen() {
  const { estado, dispatch } = useTratamentos();
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    duracao: "",
  });
  const [erro, setErro] = useState("");
  const toast = useToast();

  const adicionarTratamento = () => {
    if (!form.nome || !form.descricao || !form.preco || !form.duracao) {
      setErro("Preencha todos os campos!");
      return;
    }
    if (Number(form.preco) <= 0) {
      setErro("O preço deve ser maior que 0!");
      return;
    }

    const novo = {
      id: Date.now(),
      nome: form.nome,
      descricao: form.descricao,
      preco: Number(form.preco),
      duracao: form.duracao,
    };

    dispatch({ type: "ADD", payload: novo });

    toast.show({
      title: "Tratamento adicionado!",
      bg: "emerald.500",
      placement: "top",
    });

    setForm({ nome: "", descricao: "", preco: "", duracao: "" });
    setErro("");
  };

  const removerTratamento = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <Box flex={1} p={6} bg="white">
      <Heading mb={4}>Tratamentos</Heading>

      {estado.carregando ? (
        <HStack space={2} justifyContent="center" alignItems="center" mt={10}>
          <Spinner accessibilityLabel="Carregando tratamentos" />
          <Text>Carregando...</Text>
        </HStack>
      ) : (
        <>
          <VStack space={3} mb={4}>
            <FormControl>
              <FormControl.Label>Nome</FormControl.Label>
              <Input
                value={form.nome}
                onChangeText={(v) => setForm({ ...form, nome: v })}
                placeholder="Nome do tratamento"
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Descrição</FormControl.Label>
              <Input
                value={form.descricao}
                onChangeText={(v) => setForm({ ...form, descricao: v })}
                placeholder="Descrição"
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Preço</FormControl.Label>
              <Input
                value={form.preco}
                keyboardType="numeric"
                onChangeText={(v) => setForm({ ...form, preco: v })}
                placeholder="R$"
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Duração</FormControl.Label>
              <Input
                value={form.duracao}
                onChangeText={(v) => setForm({ ...form, duracao: v })}
                placeholder="Ex: 45 min"
              />
            </FormControl>

            {erro ? <Text color="red.500">{erro}</Text> : null}

            <Button onPress={adicionarTratamento}>Adicionar</Button>
          </VStack>

          <Divider my={4} />

          {estado.tratamentos.length === 0 ? (
            <Text color="gray.500" textAlign="center">
              Nenhum tratamento cadastrado.
            </Text>
          ) : (
            <>
              <FlatList
                data={estado.tratamentos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Box
                    borderWidth={1}
                    borderRadius="lg"
                    borderColor="gray.300"
                    p={4}
                    mb={3}
                    bg="gray.50"
                  >
                    <Heading size="sm">{item.nome}</Heading>
                    <Text color="gray.600">{item.descricao}</Text>
                    <Text mt={1}>R$ {item.preco}</Text>
                    <Text>Duração: {item.duracao}</Text>
                    <Button
                      colorScheme="red"
                      size="sm"
                      mt={2}
                      onPress={() => removerTratamento(item.id)}
                    >
                      Remover
                    </Button>
                  </Box>
                )}
              />              
            </>
          )}
        </>
      )}
    </Box>
  );
}
