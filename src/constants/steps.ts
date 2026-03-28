export interface StepConfig {
  number: number
  name: string
  path: string
}

export const STEPS:StepConfig[] = [
  { 
    number: 1, 
    name: 'Config', 
    path: '/configuracao-sorteio' 
  },
  { 
    number: 2, 
    name: 'Times', 
    path: '/escolha-selecoes' 
  },
  { 
    number: 3, 
    name: 'Resultado', 
    path: '/resultado-sorteio' 
  },
]