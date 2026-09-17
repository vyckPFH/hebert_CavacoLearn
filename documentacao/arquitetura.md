# Arquitetura

## Introdução
Descrição da arquitetura do aplicativo: camadas utilizadas, responsabilidade de cada camada e o padrão de nomenclatura adotado para pastas/arquivos de cada camada.

### Camadas e suas responsabilidades

#### Camadas principais:

* CavacoLearn-Codigo/   --> Código fonte do projeto, e demais camadas.

* documentacao/     --> Documentação do projeto, incluindo casos de uso, tabelas de requisito e regras de negócio, informações sobre interface e arquitetura, documento de visão e diagramas de BD. 

* README/   --> Readme coisas.

#### Camadas secundárias:

CavacoLearn-Codigo/
├── Cavaco_Learn 
├── node_modules 

```
app-diario/
├── assets/                   # Imagens, fontes, etc
├── app.json                  # Configuração do Expo
├── App.tsx                   # Componente raiz (TypeScript)
├── index.ts                  # Entry point
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
└── node_modules/             # Dependências instaladas
```

### Padrões de nomenclatura