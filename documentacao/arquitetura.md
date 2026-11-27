# Arquitetura 

## 1. Introdução

Este documento apresenta a arquitetura do sistema CavacoLearn, descrevendo a organização geral do projeto, as camadas utilizadas, as responsabilidades de cada uma e os padrões de nomenclatura adotados para pastas e arquivos.

O projeto é organizado em diretórios principais, que agrupam o código-fonte do aplicativo, a documentação e os materiais de apoio necessários para o desenvolvimento e a utilização do sistema.

---

## 2. Visão geral da arquitetura

O CavacoLearn é um sistema composto por dois módulos, o aplicativo móvel destinado ao acesso ao conteúdo e o painel Web para administração.

O aplicativo móvel é desenvolvido com React Native, utilizando Expo e TypeScript. Para o armazenamento e a comunicação com os dados, o projeto utiliza os serviços do Firebase, incluindo Firebase Authentication e Cloud Firestore. As operações de leitura e escrita são realizadas por meio dos serviços implementados no projeto. Esses serviços utilizam o SDK do Firebase para acessar os dados armazenados no Firestore e os recursos de autenticação.

O painel Web será responsável pelas funcionalidades administrativas do sistema, permitindo o gerenciamento dos conteúdos e das informações utilizadas pelo aplicativo. É desenvolvido com [...] 

De maneira geral, a arquitetura pode ser representada pelo seguinte fluxo:

- **Aplicativo móvel / Painel Web → Camadas de serviços → Infraestrutura de dados.**

---

## 3. Estrutura geral 

O projeto está organizado em três áreas principais:

- **CavacoLearn-Codigo/**: contém o código-fonte do projeto e os arquivos relacionados ao desenvolvimento dos módulos do sistema.
- **documentacao/**: reúne os documentos de especificação e análise do sistema, incluindo casos de uso, requisitos, regras de negócio, informações sobre as interfaces, arquitetura, visão do produto e diagramas de banco de dados.
- **README.md**: apresenta uma breve introdução ao projeto, as instruções iniciais e orientações para utilização e execução do projeto.

A estrutura geral do repositório pode ser representada da seguinte maneira:

```text
CavacoLearn/
├── CavacoLearn-Codigo/
│   ├── Cavaco_Learn/
│   │   ├── src/
│   │   │   ├── componentes/
│   │   │   └── services/
│   │   │   └── telas/
│   │   │   └── types/
│   │   │   └── utils/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── app.json
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── CavacoLearn-Web/
│   │   └── [Estrutura a ser definida após a implementação]
│   │
│   └── package.json
│
├── documentacao/
│   ├── casos_de_uso/
│   │   ├── [...]
│   ├── interfaces/
│   │   ├── interfaceWeb.md
│   │   └── interfaceApp.md
│   ├── arquitetura.md
│   ├── BD.md
│   ├── requisitos.md
│   ├── regras_de_negocio.md
│   └── visao.md
│
├── LICENSE
└── README.md
```

A pasta `CavacoLearn-Codigo/` concentra os arquivos relacionados ao desenvolvimento. Dentro dela, a pasta `Cavaco_Learn/` contém o projeto do aplicativo móvel, desenvolvido com Expo e React Native.

A pasta `CavacoLearn-Web/` está reservada para o projeto do painel administrativo Web. Sua estrutura interna será documentada após a implementação e análise dos arquivos correspondentes.

Caso sejam identificados módulos ou recursos compartilhados entre as aplicações, sua organização também será apresentada nesta estrutura.

A pasta `documentacao/` reúne os materiais utilizados para especificar e descrever o sistema. Nela estão organizados documentos como casos de uso, requisitos, regras de negócio, informações sobre as interfaces, arquitetura e banco de dados.

O arquivo `README.md`, localizado na raiz do repositório, contém orientações gerais sobre o projeto. Já o arquivo `AULA_DEPENDENCIAS_E_GIT.md` apresenta material de apoio relacionado às dependências e ao Git.

A pasta `node_modules/`, quando gerada pela instalação das dependências, armazena as bibliotecas utilizadas pelo projeto. Como seu conteúdo é gerado automaticamente, não é considerado parte da estrutura principal do código-fonte e normalmente não deve ser versionado.

