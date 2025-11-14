import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";

import tratamentosData from "../assets/tratamentos.json";


export interface Tratamento {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  duracao: string;
}

type Estado = {
  tratamentos: Tratamento[];
  carregando: boolean;
};

type Acao =
  | { type: "SET"; payload: Tratamento[] }
  | { type: "ADD"; payload: Tratamento }
  | { type: "REMOVE"; payload: number }
  | { type: "LOADING"; payload: boolean };

const TratamentosContext = createContext<{
  estado: Estado;
  dispatch: React.Dispatch<Acao>;
}>({
  estado: { tratamentos: [], carregando: true },
  dispatch: () => {},
});

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.type) {
    case "LOADING":
      return { ...estado, carregando: acao.payload };
    case "SET":
      return { ...estado, tratamentos: acao.payload, carregando: false };
    case "ADD":
      return { ...estado, tratamentos: [...estado.tratamentos, acao.payload] };
    case "REMOVE":
      return {
        ...estado,
        tratamentos: estado.tratamentos.filter((t) => t.id !== acao.payload),
      };
    default:
      return estado;
  }
}

export const TratamentosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [estado, dispatch] = useReducer(reducer, {
    tratamentos: [],
    carregando: true,
  });

  // Carregar dados iniciais do JSON (em assets) - "Dados assíncronos"
  useEffect(() => {
  const carregarDados = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      // Simula atraso para visualização do loading
      await new Promise((res) => setTimeout(res, 1000));
      dispatch({ type: "SET", payload: tratamentosData });
    } catch (error) {
      console.error("Erro ao carregar tratamentos:", error);
      dispatch({ type: "LOADING", payload: false });
    }
  };
  carregarDados();
}, []);
  // Efeito visual simples (exemplo: log no console)
  const [novoAdicionado, setNovoAdicionado] = useState(false);
  useLayoutEffect(() => {
    if (novoAdicionado) {
      console.log("Novo tratamento adicionado!");
      const timer = setTimeout(() => setNovoAdicionado(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [novoAdicionado]);

  return (
    <TratamentosContext.Provider value={{ estado, dispatch }}>
      {children}
    </TratamentosContext.Provider>
  );
};

export const useTratamentos = () => useContext(TratamentosContext);
