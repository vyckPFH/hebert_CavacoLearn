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
│   ├── Cavaco_Learn-Web/
│   │   │   ├── 
│   │   │   └── 
│   │   │   └── 
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
│   │   ├── UC01.md
│   │   ├── [...]
│   ├── interfaces/
│   │   ├── interfaceApp.md
│   │   └── interfaceWeb.md
│   ├── arquitetura.md
│   ├── BD.md
│   ├── requisitos.md
│   ├── regras_de_negocio.md
│   └── visao.md
│
├── LICENSE
└── README.md
```

A pasta `CavacoLearn-Codigo/` concentra os arquivos relacionados ao desenvolvimento. Dentro dela, a pasta `Cavaco_Learn/` contém o projeto do aplicativo móvel, desenvolvido com Expo e React Native. A pasta `CavacoLearn-Web/` contém o projeto do painel administrativo Web. Sua estrutura é desenvolvida com [...]

A pasta `documentacao/` reúne os materiais utilizados para especificar e descrever o sistema. Nela estão organizados documentos como casos de uso, requisitos, regras de negócio, informações sobre as interfaces, arquitetura e banco de dados.

O arquivo `README.md`, localizado na raiz do repositório, contém orientações gerais sobre o projeto. 

A pasta `node_modules/`, quando gerada pela instalação das dependências, armazena as bibliotecas utilizadas pelo projeto. Como seu conteúdo é gerado automaticamente, não é considerado parte da estrutura principal do código-fonte e geralmente não deve ser versionado.

---

## 4. Organização dos módulos do sistema

O sistema CavacoLearn é organizado em módulos que possuem responsabilidades específicas, permitindo separar as funcionalidades destinadas aos usuários das funcionalidades administrativas.

### 4.1. Aplicativo Mobile

O aplicativo móvel é responsável por disponibilizar os conteúdos de aprendizagem, exercícios, músicas e demais funcionalidades destinadas aos usuários.

Sua estrutura utiliza React Native, Expo e TypeScript, com organização interna em diretórios responsáveis pelos serviços, tipos de dados e recursos visuais.

### 4.2. Painel Web

O painel Web será responsável pela administração e pelo gerenciamento das informações utilizadas pelo sistema.

Entre suas responsabilidades estão:

- Gerenciamento de níveis de aprendizagem.
- Gerenciamento de tópicos.
- Cadastro e manutenção de exercícios.
- Gerenciamento de músicas.
- Organização e manutenção dos blocos de conteúdo.
- Administração de informações utilizadas pelo aplicativo.
- Cadastro e gerenciamento de usuários alunos.

---

## 5. Estrutura do código do aplicativo Mobile

Dentro da pasta `Cavaco_Learn/`, encontra-se a estrutura específica do aplicativo móvel. O código está organizado em diretórios e arquivos responsáveis pela implementação das funcionalidades, comunicação com o Firebase, definição dos tipos de dados e configuração do ambiente de desenvolvimento.

```text
Cavaco_Learn/
├── src/
│   ├── componentes/
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── services/
│   │   ├── exercicios.ts
│   │   ├── firebase.ts
│   │   ├── musicas.ts
│   │   ├── niveis.ts
│   │   ├── topicos.ts
│   │   └── usuarios.ts
│   └── types/
│   │   ├── bloco.ts
│   │   ├── exercicio.ts
│   │   ├── index.ts
│   │   ├── missao.ts
│   │   ├── musica.ts
│   │   ├── nivel.ts
│   │   ├── topico.ts
│   │   └── usuario.ts
│   └── telas/
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── 
│   └── utils/
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └──
├── assets/
├── App.tsx
├── app.json
├── index.ts
├── package.json
└── tsconfig.json
```

As pastas e os arquivos possuem as seguintes responsabilidades:

### 5.1. Pasta `src/`

A pasta `src/` concentra o código-fonte principal do aplicativo. Nela ficam organizados os serviços e as definições de tipos utilizados pelas funcionalidades do sistema.

### 5.2. Pasta `services/`

Responsável por concentrar os serviços que realizam operações de negócio e comunicação com o Firebase.

### 5.3. Pasta `types/`

Responsável por definir as estruturas e os tipos de dados utilizados no aplicativo, contribuindo para a organização e a tipagem do código TypeScript.

### 5.4. Pasta `assets/`

Armazena recursos utilizados pelo aplicativo, como imagens, fontes e outros arquivos visuais necessários à interface.

### 5.5. Arquivo `App.tsx`

Representa o componente principal da aplicação React Native, funcionando como ponto de entrada da interface do aplicativo.

### 5.6. Arquivo `app.json`

Contém configurações do projeto Expo, como informações e parâmetros utilizados na execução e compilação do aplicativo.

### 5.7. Arquivo `index.ts`

Define o ponto de entrada utilizado para registrar e iniciar a aplicação.

### 5.8. Arquivo `package.json`

Armazena informações do projeto, dependências utilizadas e scripts disponíveis para execução de comandos.

### 5.9. Arquivo `tsconfig.json`

Contém as configurações do TypeScript, definindo parâmetros utilizados na verificação e compilação do código.

### 5.10. Pasta `componentes/`

Contém os componentes reutilizáveis, como pedaços de tela, botões, inputs, entre outros.

### 5.11. Pasta `telas/`

Contém a organização e estrutura completa das telas, conectando os componentes e funções oferecidas. 

### 5.12. Pasta `utils/`

Contém funções utilitárias, como helpers e formatações.

---

## 6. Camadas e suas responsabilidades

A organização interna do sistema utiliza camadas com responsabilidades distintas, buscando separar a implementação das funcionalidades, a comunicação com serviços externos e a definição das estruturas de dados.

### 6.1. Camada de interface

Responsável pela apresentação das informações ao usuário e pela interação com as funcionalidades do sistema.

No aplicativo Mobile, a organização prevista contempla:

- `telas/`: reúne as telas completas do aplicativo, associadas aos fluxos de navegação.
- `componentes/`: reúne componentes reutilizáveis da interface, como botões, campos de entrada e outros elementos visuais.

Esses diretórios fazem parte da organização arquitetural descrita na documentação, mas não foram identificados na estrutura de código disponibilizada para análise.

No painel Web, esta camada será responsável pela apresentação das funcionalidades administrativas, incluindo suas páginas, componentes visuais e elementos de interação.

**Organização do painel Web:**

```text
[Diretórios de interface do painel Web]
├── [Páginas]
├── [Componentes]
└── [Elementos de navegação]
```

A estrutura definitiva será preenchida após a análise do código do painel.

### 6.2. Camada de serviços

Responsável por concentrar operações relacionadas às funcionalidades do sistema e à comunicação com serviços externos.

No aplicativo analisado, essa responsabilidade é representada principalmente pela pasta `src/services/`, que contém os arquivos responsáveis pelas operações com usuários, níveis, tópicos, exercícios e músicas, além da configuração do Firebase.

No painel Web, os serviços responsáveis pelas operações administrativas serão documentados neste espaço após sua implementação.

### 6.3. Camada de tipos

Responsável por definir interfaces, tipos e estruturas de dados utilizados pelas funcionalidades do sistema.

No aplicativo, essa responsabilidade é representada pela pasta `src/types/`, que contém as definições de tipos relacionadas aos principais elementos do sistema.

A utilização de tipos compartilhados entre o Mobile e o Web será descrita após a análise das respectivas implementações.

### 6.4. Camada de utilitários

Prevista para concentrar funções auxiliares e reutilizáveis, como formatações, conversões e outras operações que possam ser utilizadas em diferentes partes do sistema.

A pasta `utils/` está prevista na organização arquitetural do aplicativo, mas não foi identificada no código disponibilizado.

Os utilitários do painel Web e possíveis recursos compartilhados serão acrescentados nesta seção conforme a estrutura final do projeto.

### 6.5. Camada de recursos visuais

Representada pela pasta `assets/` no aplicativo Mobile, responsável por armazenar imagens, fontes e demais recursos utilizados na apresentação visual do aplicativo.

Os recursos visuais utilizados pelo painel Web serão documentados separadamente após a análise de sua estrutura.
