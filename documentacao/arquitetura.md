# Arquitetura

## Introdução
Descrição da arquitetura do aplicativo: camadas utilizadas, responsabilidade de cada camada e o padrão de nomenclatura adotado para pastas/arquivos de cada camada.

### Camadas e suas responsabilidades

#### Camadas principais:
.
├── app-diario/       # Aplicação React Native com Expo
├── aulas/            # Materiais das aulas
└── documentacao/     # Documentação do projeto

#### Camadas secundárias:

app-diario/
├── assets/                   # Imagens, fontes, etc
├── app.json                  # Configuração do Expo
├── App.tsx                   # Componente raiz (TypeScript)
├── index.ts                  # Entry point
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
└── node_modules/             # Dependências instaladas

### Padrões de nomenclatura