# Sorteio Copa — Simulador

Simulador de Sorteio da Copa do Mundo.

Aplicação web onde o usuário configura a estrutura dos grupos, seleciona as seleções participantes e realiza o sorteio com distribuição aleatória.

[🔗 Visualizar Projeto Online](https://sorteio-copa.vercel.app/)

## Como rodar

```bash
# instalar dependências
npm install

# rodar em desenvolvimento
npm run dev

# build de produção
npm run build

# preview do build
npm run preview
```

## Como testar

```bash
# rodar testes
npm run test

# rodar com cobertura
npm run test:coverage

# lint
npm run lint

# formatar código
npm run format
```

## Decisões Arquiteturais

### Vite

Escolhido por ser um dos indicados atualmente para projetos React client-side. Comparado ao CRA (que foi descontinuado) e Next.js (que traz SSR, mas pelo escopo se torna desnecessário), o Vite oferece um bom pacote para que seja feita a criação do projeto. A aplicação é uma SPA 'simples', o que torna o Vite a escolha ideal.

### Zustand (gerenciamento de estado)

Mediante ao escopo do projeto e o tempo disponível, a prioridade foi uma ferramenta de gerenciamento global que pudesse me atender sem grandes complexidades, mas que priorizasse performance também, diferente do Context API que é uma alternativa ok, mas existe um caso de re-renderização não tão legal. Após pesquisas foi entendido que a Zustand atenderia melhor ao projeto.

### Vitest

Escolha pelo Vitest por ter integração direta com o Vite, facilitando a configuração. 


### SCSS + BEM

O uso de SCSS oferece uma extensão poderosa do CSS, facilitando configuração global de variáveis, mixins, etc, que ajudam no desenvolvimento, além de ser isolado do JSX. Ao utilizar junto ao padrão BEM o código se torna mais legível e de fácil manutenção.

### React Router — Modo Declarativo (SPA)

O projeto possui apenas 4 rotas, logo para esse contexto o modo declarativo do React Router (v7) atendeu melhor ao ser o mais simples e eficiente.

### Escopo: Opção A (Fase de Grupos)

A "Opção A - Fase de grupos" foi a escolhida para ser implementada por conta do tempo disponível. Foi priorizado fazer a primeira opção de uma forma funcional e organizada em vez de integrar a "Opção B" de forma que pudesse comprometer a qualidade da entrega no prazo disponível.

## Estrutura de Pastas

```
src/
├── assets/ # Imagens (flags SVG)
├── components/ #Componentes reutilizáveis
│   ├── Banner/
│   │   ├── Banner.tsx
│   │   ├── index.ts
│   │   └── styles.scss
│   ├── Button/
│   ├── Card/
│   ├── CounterRing/
│   ├── CountriesCarousel/
│   ├── EmptyState/
│   ├── FilterChip/
│   ├── GroupCard/
│   ├── Header/
│   ├── Layout/
│   ├── Preset/
│   ├── ProgressBar/
│   ├── SearchInput/
│   ├── Spinner/
│   ├── Stepper/
│   ├── SwapModal/
│   ├── TeamRow/
│   ├── Tooltip/
│   └── index.ts # Barrel export
├── constants/ # Dados estáticos
├── data/ # Dataset JSON
├── hooks/ # Custom hooks 
│   ├── useDrawStore.ts # Store Zustand principal
│   └── useTotalNeeded.ts # Cálculo derivado
├── pages/ # Telas da aplicação
│   ├── ConfigPage/
│   ├── HomePage/
│   ├── ResultPage/
│   └── TeamsPage/
├── repositories/  # Camada de acesso a dados
│   ├── localStorageRepo.ts # Persistência
│   └── teamRepository.ts # Acesso ao dataset
├── services/ # Regras de domínio
│   ├── drawGroups.ts # Lógica do sorteio
│   ├── drawGroups.test.ts # Testes unitários
│   └── shuffle.ts  # Fisher-Yates
├── styles/  # SCSS global
├── types/ # Interfaces e tipos
│   ├── draw.ts
│   ├── index.ts
│   └── team.ts
├── utils/  # Helpers genéricos
test/
├── setup.ts
└── integration/
    ├── draw-flow.test.tsx
    └── persistence.test.tsx
```

Convenções:
- **Co-location**: testes unitários vivem ao lado do arquivo que testam
- **Barrel exports**: `index.ts` em cada pasta de componente + barrel geral
- **Path alias**: `@/` aponta para `src/`
- **Hooks por componente**: lógica extraída em `useNomeDoComponente.ts` quando o componente tem estado ou efeitos

## Regras do Sorteio Implementadas

- Garantia de Unicidade: Sem duplicidade de seleção 
- Distribuição uniforme: Todos os grupos preenchidos com o mesmo tamanho
- Validação de quantidade: O sorteio só é habilitado quando o número de seleções escolhidas é exatamente igual a `grupos * tamanho`
- Sortear automaticamente e preencher os grupos
- Persistência de Estado: Recuperação dos dados via LocalStorage
- Edição Pós-Sorteio: Permitir re-sortear + ajuste manual das seleções entre os times pós-sorteio

## Limitações e Melhorias Futuras

### Limitações atuais
- Sem Opção B (mata-mata / chaves)
- Regras opcionais (restrição por confederação, potes) removidas do escopo para priorizar qualidade da entrega
- Sem animações de transição entre telas
- Sem seed de aleatoriedade para reproduzir sorteios
- Sem compartilhamento de resultado (Web Share API)

### Melhorias futuras
- Implementar Opção B (mata-mata) com componente de bracket
- Regra de restrição por confederação (máx. 2 da mesma região por grupo)
- Sistema de potes (distribuição por nível de força)
- Seed de aleatoriedade para sorteios reproduzíveis
- Mais animações
- Histórico de sorteios (salvar múltiplos resultados)
- Compartilhar resultado via Web Share API
