# Clínica de Estética – Aplicação Mobile/Web (Expo + React Native)

Aplicação desenvolvida para gerenciar tratamentos de uma clínica de estética, incluindo:
- Cadastro de tratamentos
- Listagem dinâmica
- Validações de formulário
- Contato com validação onBlur
- Dados carregados de arquivo JSON
- Estado global com Context + useReducer
- Interface responsiva com NativeBase
- Navegação com Expo Router

---

## Tecnologias utilizadas

- **Expo (React Native)**
- **TypeScript**
- **Expo Router**
- **NativeBase** (UI responsiva web + mobile)
- **React Hooks** (useState, useEffect, useReducer, useLayoutEffect)
- **Context API**
- **React Native FlatList**
- **Validação de formulários**
- **Armazenamento local via JSON**

---

## Estrutura do Projeto

app/

   ├── index.tsx → Home
   
   ├── tratamentos.tsx → Cadastro e listagem de tratamentos
   
   ├── contato.tsx → Formulário de contato
   
   └── _layout.tsx → Navegação
   

assets/

   └── tratamentos.json → Dados locais carregados com fetch/import
   

components/

   └── Navbar.tsx → Componente de navegação
   

context/

   └── TratamentosContext.tsx → Estado global com useReducer

   

## Para rodar em seu ambiente

1- Instalar em seu ambiente

   ```bash
   npm install
   ```

2- Iniciar a aplicação
   
   ```bash
   npx expo start
   ```

  2.1- Web:
  CRTL + Clique no link localhost que aparecerá no terminal.
  
  2.2- Mobile:
  Baixe o aplicativo Expo Go em seu celular; 
  Com app aberto, toque em Scan QR Code e aponte para o QR que aparece no terminal.




