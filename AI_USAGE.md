# Uso de IA no Projeto

## Ferramenta utilizada

- **Claude (Anthropic)** — utilizado como ferramenta de consulta e suporte ao longo do desenvolvimento.


## Como foi utilizado

O Claude foi usado como **ferramenta de consulta**, similar a consultar documentação, artigos técnicos ou um dev mais experiente. Todas as decisões foram tomadas por mim, com base nas explicações e alternativas apresentadas. O código final passou por adaptações manuais.


## Etapas em que ajudou:

### 1. Escolha de tecnologias e arquitetura
- Comparação entre alternativas de estado (Context API vs Redux Toolkit vs Zustand vs Jotai), para entender prós e contras, e escolher a mais adequada ao escopo.
- Decisão sobre uso do Zustand vs outra ferramenta.


### 2. Configuração do projeto
- Setup inicial do projeto.
- Configuração do Vitest separado do Vite para evitar conflitos em dev.
- Resolução de problemas de configuração (CRLF vs LF, tipos do Node, referência do Vitest).


### 3. Entendimento de conceitos
- Funcionamento do Zustand (create, set, get, imutabilidade com Set, referências).


### 4. Esboço de componentes
- Acesso facilitado no desenvolvimento dos componentes pois as telas (layouts - UI) foram geradas pelo Claude e ajustadas visualmente por mim.
- Os esboços gerados foram revisados, adaptados e refatorados por mim antes de serem incorporados ao projeto.
- Exemplos: Button (ajuste de variantes e modificadores) e ProgressBar (extração de hook).


### 5. Lógica de domínio
- Suporte para estruturar o algoritmo Fisher-Yates (shuffle).
- Estruturação da função `drawGroups` com validações.
- Configuração do Zustand


### 6. Testes
- Estruturação dos testes unitários e de integração conforme requisitos do desafio.


### 7. Documentação
- Exemplo de arquitetura/divisões do READ.ME


## Prompts representativos

Os prompts seguiram um padrão de conversa iterativa. Exemplos representativos:


- "Quero entender a diferença entre Context API e Zustand, me de exemplo prático"
- "Represente o Fisher-Yates em passo a passo”
- "Revise esse componente, há algo que possa ser melhorado?"


## Conclusão

A IA foi utilizada como ferramenta de aprendizado e produtividade, não como substituto de entendimento. Cada decisão arquitetural, escolha de tecnologia e linha de código foi compreendida antes de ser incorporada. O processo envolveu questionamento constante sobre as sugestões recebidas, adaptações para o contexto do projeto e validação através de testes e revisão manual.
