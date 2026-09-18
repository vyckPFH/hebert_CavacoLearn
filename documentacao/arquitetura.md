# Arquitetura

## Introdução
Descrição da arquitetura do aplicativo: camadas utilizadas, responsabilidade de cada camada e o padrão de nomenclatura adotado para pastas/arquivos de cada camada.

### Camadas e suas responsabilidades

#### Camadas principais:

* CavacoLearn-Codigo/   --> Código fonte do projeto, e demais camadas.

* documentacao/     --> Documentação do projeto, incluindo casos de uso, tabelas de requisito e regras de negócio, informações sobre interface e arquitetura, documento de visão e diagramas de BD. 

* README/   --> Mini tutorial, como rodar o app.

#### Camadas secundárias:
```
CavacoLearn-Codigo/
├── Cavaco_Learn              # Pasta...
└── node_modules/             # Dependências instaladas
```

```
Cavaco_Learn/
├── assets/                   # Recuros visuais: imagens, fontes, etc.
├── services/                 # Código de comunicação com APIs e outros serviços
├── types/                    # Definições de tipos e estruturas de dados
├── app.json                  # Configuração do Expo
├── App.tsx                   # Componente raiz (TypeScript)
├── index.ts                  # Entry point
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
```

### Padrões de nomenclatura
- 1° letra das pastas -> Minúscula.
- 1° letra das classes -> Maiúscula.
- 