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
│   │   │   └── theme/
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

No aplicativo Mobile, a organização contempla:

- `telas/`: reúne as telas completas do aplicativo, associadas aos fluxos de navegação.
- `componentes/`: reúne componentes reutilizáveis da interface, como botões, campos de entrada e outros elementos visuais.

No painel Web, esta camada é responsável pela apresentação das funcionalidades administrativas, incluindo suas páginas, componentes visuais e elementos de interação. 
A organização contempla:

- ``:
- ``: 

### 6.2. Camada de serviços

Responsável por concentrar operações relacionadas às funcionalidades do sistema e à comunicação com serviços externos.

Essa responsabilidade é representada principalmente pela pasta `src/services/`, que contém os arquivos responsáveis pelas operações com usuários, níveis, tópicos, exercícios e músicas, além da configuração do Firebase.

No painel web, não existe necessariamente uma camada de serviços.

### 6.3. Camada de tipos

Responsável por definir interfaces, tipos e estruturas de dados utilizados pelas funcionalidades do sistema mobile. É representada pela pasta `src/types/`.

No painel web, não existe necessariamente uma camada de tipos.

### 6.4. Camada de utilitários

Contém funções auxiliares e reutilizáveis, como formatações, conversões e outras operações que possam ser utilizadas em diferentes partes do sistema. É representada pela pasta `utils/`.

No painel web, não existe necessariamente uma camada de utilitários.

### 6.5. Camada de recursos visuais

Representada pela pasta `assets/` no sistema mobile, responsável por armazenar imagens, fontes e demais recursos utilizados na apresentação visual do aplicativo. 

### 6.6. Camada de [...]

---

## 7. Integração com o Firebase

O aplicativo utiliza o Firebase como infraestrutura de autenticação e armazenamento de dados.

A configuração dos serviços está no arquivo `src/services/firebase.ts`.

### 7.1. Firebase Authentication

O Firebase Authentication é utilizado para gerenciar a autenticação dos usuários.

A configuração considera ambientes Web e React Native. No ambiente React Native, é utilizada a persistência de autenticação com AsyncStorage, permitindo manter o estado de autenticação entre inicializações do aplicativo.

### 7.2. Cloud Firestore

O Cloud Firestore é utilizado como banco de dados para armazenar as informações do sistema.

Os serviços utilizam operações disponibilizadas pelo SDK do Firebase, como `collection`, `doc`, `getDoc`, `getDocs`, `addDoc`, `setDoc`, `updateDoc`, `deleteDoc`, `query`, `where`, e `orderBy`.

### 7.3. Integração do painel Web com o Firebase

**[A ser preenchido após a implementação e análise do painel Web.]**

Nesta seção serão descritos:

- A configuração do Firebase no painel Web.
- Os recursos de autenticação utilizados.
- A comunicação com o Cloud Firestore.
- As operações de leitura e escrita realizadas pelo painel.
- A relação entre as operações administrativas e os dados consumidos pelo aplicativo Mobile.

### 7.4. Integração compartilhada entre os módulos

**[A ser preenchido caso sejam identificadas configurações ou serviços compartilhados entre Mobile e Web.]**

---

## 8. Organização dos blocos de conteúdo

O projeto possui definições de tipos para organizar os blocos de conteúdo utilizados no aplicativo. Essas definições estão concentradas principalmente no arquivo `src/types/bloco.ts`.

Entre os tipos de bloco identificados estão:

- `texto`;
- `diagrama_acorde`;
- `audio`;
- `video`;
- `cifra`;
- `enunciado`.

A estrutura `BlocoConteudo` permite representar informações relacionadas ao conteúdo, como tipo, ordem e configuração, sendo possível definir diferentes formatos de conteúdo dentro da estrutura de aprendizagem. 

### 8.1. Gerenciamento dos blocos pelo painel Web

**[A ser preenchido após a implementação do painel Web.]**

Nesta seção será descrita a forma como os blocos de conteúdo serão cadastrados, editados, organizados e disponibilizados por meio do painel administrativo.

Também será documentada a relação entre a estrutura dos blocos cadastrados no painel e os tipos de dados utilizados pelo aplicativo Mobile.

---

## 9. Fluxo de dados e funcionamento dos serviços

A comunicação entre o aplicativo e o banco de dados ocorre por meio dos serviços implementados na pasta `src/services/`.

De maneira geral, o fluxo de dados acontece da seguinte forma:

1. Uma funcionalidade do aplicativo solicita uma operação.
2. O serviço correspondente recebe a solicitação.
3. O serviço utiliza o SDK do Firebase para realizar a operação necessária.
4. O Firebase executa a leitura ou escrita dos dados.
5. O resultado da operação é retornado ao aplicativo.

### 9.1. Operações relacionadas aos níveis, tópicos e exercícios

Os arquivos `niveis.ts`, `topicos.ts` e `exercicios.ts` concentram operações relacionadas à obtenção e ao gerenciamento dos dados desses elementos.

### 9.2. Operações relacionadas aos usuários

O arquivo `usuarios.ts` concentra operações relacionadas aos perfis dos usuários e ao acompanhamento do progresso.

Entre as operações gerais estão:

- Obtenção ou criação de perfil.
- Sincronização de informações do perfil.
- Registro de conclusão de tópicos.
- Registro de conclusão de exercícios.
- Atualização da pontuação.
- Resgate de missões.
- Desbloqueio de músicas.

As operações de conclusão de tópicos e exercícios possuem valores padrão de pontuação definidos no serviço.

### 9.3. Fluxo de dados do painel Web

**[A ser preenchido após a implementação e análise do painel Web.]**

Nesta seção será apresentado o fluxo das operações administrativas, desde a interação do administrador com a interface até a execução das operações nos serviços e no banco de dados.

### 9.4. Comunicação entre Mobile e Web

**[A ser preenchido após a análise dos dois módulos.]**

Nesta seção será documentada a relação entre o painel administrativo e o aplicativo móvel, considerando a criação, atualização, consulta e utilização dos dados do sistema.

---

## 10. Dependências do aplicativo mobile

As dependências utilizadas pelo aplicativo são declaradas no arquivo `package.json`, localizado na pasta do projeto mobile.

Entre as principais tecnologias e bibliotecas utilizadas estão:

- React Native: desenvolvimento da aplicação móvel.
- Expo: ferramentas e ambiente de desenvolvimento.
- TypeScript: tipagem estática do código.
- Firebase: serviços de autenticação e armazenamento.
- AsyncStorage: persistência local utilizada na configuração da autenticação no ambiente React Native.

As bibliotecas instaladas ficam disponíveis na pasta `node_modules/`, gerada durante a instalação das dependências.

## 11. Dependências do painel web

**[A ser preenchido após a implementação do painel Web.]**

Nesta seção serão apresentadas as bibliotecas, dependências e ferramentas declaradas no projeto Web.

### 10.2. Dependências compartilhadas

**[A ser preenchido caso sejam identificadas dependências utilizadas por mais de um módulo.]**

---

## 11. Padrões de nomenclatura

O projeto adota padrões de nomenclatura para facilitar a identificação de pastas, arquivos, classes e demais elementos do código.

Os padrões definidos são:

- **Pastas:** a primeira letra deve ser minúscula.
- **Classes:** a primeira letra deve ser maiúscula.
- **Variáveis e funções:** utilização do padrão `lowerCamelCase`.
- **Arquivos:** nomes descritivos, preferencialmente em letras minúsculas, podendo utilizar underline (`_`) em alguns casos.

Exemplos:

| Elemento | Exemplo |
| -------- | ---------------------- |
| Pasta | `services/` |
| Pasta | `componentes/` |
| Classe | `UsuarioPerfil` |
| Variável | `nomeUsuario` |
| Função | `obterPerfil()` |
| Arquivo | `usuarios.ts` |
| Arquivo | `regras_de_negocio.md` |

A adoção desses padrões busca manter a consistência e facilitar a manutenção do projeto.

Os padrões de nomenclatura utilizados no painel Web são os mesmos.

---

## 12. Configuração do aplicativo

A configuração do ambiente de desenvolvimento está distribuída entre os arquivos principais do projeto:

- `app.json`: configurações do Expo.
- `package.json`: dependências e scripts.
- `tsconfig.json`: configurações do TypeScript.
- `index.ts`: ponto de entrada da aplicação.
- `App.tsx`: componente raiz do aplicativo.

Esses arquivos permitem configurar e executar o aplicativo dentro do ambiente definido pelo Expo e pelo React Native.

## 13. Configuração do painel Web

**[A ser preenchido após a implementação do painel Web.]**

Nesta seção serão descritos os arquivos de configuração do ambiente Web, incluindo o ponto de entrada, as configurações do projeto, os scripts e os demais parâmetros necessários para sua execução.

### 14. Configuração de integração entre os módulos

**[A ser preenchido caso existam configurações específicas para a comunicação ou utilização conjunta dos módulos Mobile e Web.]**
