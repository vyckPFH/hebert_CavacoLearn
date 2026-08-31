# Aula de dependências e Git para o projeto Cavaco Learn

Este arquivo foi criado para te ajudar a entender:
- onde cada dependência do projeto fica;
- quais comandos usar em ordem correta;
- como instalar e rodar o app;
- como usar Git para versionar, criar branches, commits, merges e pulls.

---

## 1) Onde o projeto está e onde cada arquivo importa

No seu projeto, existem dois arquivos `package.json` importantes:

1. `CavacoLearn-Codigo/package.json`
   - está na raiz da pasta do código;
   - é um arquivo de nível do workspace;
   - não é o principal do app em execução.

2. `CavacoLearn-Codigo/Cavaco_Learn/package.json`
   - é o arquivo principal do projeto React Native / Expo;
   - aqui ficam as dependências do app que realmente roda.

Se você vai instalar pacotes ou rodar o app, a regra é:

- abrir o terminal dentro de `CavacoLearn-Codigo/Cavaco_Learn`
- e não na pasta raiz do projeto, se o objetivo for executar a aplicação

Comando base:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
```

---

## 2) Entendendo o `package.json` do app

O arquivo principal do app está em:

`CavacoLearn-Codigo/Cavaco_Learn/package.json`

Ele contém isso:

```json
{
  "name": "cavaco_learn",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~54.0.35",
    "expo-status-bar": "~3.0.9",
    "react": "19.1.0",
    "react-native": "0.81.5"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "typescript": "~5.9.2"
  },
  "private": true
}
```

### 2.1) O que cada parte significa

#### `scripts`
São atalhos para comandos do projeto.

Exemplo:

```bash
npm run start
```

Isso executa:

```bash
expo start
```

E esses também existem:

```bash
npm run android
npm run ios
npm run web
```

#### `dependencies`
São as bibliotecas necessárias para o app funcionar em execução.

- `expo`
  - framework principal para criar e rodar app React Native
  - ele gerencia SDK, emuladores, Metro, ferramentas e runtime

- `expo-status-bar`
  - componente para controlar a barra de status no app
  - útil para iPhone/Android

- `react`
  - biblioteca de interface do React
  - base da UI do app

- `react-native`
  - framework da interface mobile nativa
  - responsável pelas telas, componentes e renderização

#### `devDependencies`
São dependências usadas só no desenvolvimento, não no app em produção.

- `@types/react`
  - tipos TypeScript para React
  - ajuda o editor e o compilador

- `typescript`
  - linguagem e compilador TypeScript
  - permite tipagem e menos erros em desenvolvimento

#### `private: true`
- indica que esse projeto não é uma biblioteca pública
- é um app local/privado

---

## 3) Como instalar as dependências do projeto

### Passo 1: abrir o terminal na pasta correta

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
```

### Passo 2: instalar tudo do `package.json`

```bash
npm install
```

Esse comando lê o arquivo `package.json`, baixa as dependências e cria o `node_modules`.

### Passo 3: se quiser instalar um pacote novo

Exemplo com biblioteca externa:

```bash
npm install nome-do-pacote
```

Se for uma dependência de desenvolvimento:

```bash
npm install -D nome-do-pacote
```

### Passo 4: se a biblioteca for do Expo

Quando a dependência é do ecossistema Expo, prefira:

```bash
npx expo install nome-do-pacote
```

Por quê?
- porque o Expo verifica compatibilidade com a versão do SDK atual;
- evita versões quebradas entre `expo`, `react-native` e o pacote instalado.

---

## 4) Como rodar o projeto

Dentro da pasta do app:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
```

### Rodar no navegador/web

```bash
npm run web
```

### Rodar no Android

```bash
npm run android
```

### Rodar no iOS

```bash
npm run ios
```

### Rodar o projeto em modo geral

```bash
npm start
```

Esse comando é o mais usado e abre o Metro Bundler do Expo.

---

## 5) Ordem correta de comandos para começar o projeto

Aqui vai a sequência recomendada, na ordem certa:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
npm install
npm start
```

Se você quiser abrir diretamente no Android:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
npm install
npm run android
```

Se quiser abrir diretamente no web:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
npm install
npm run web
```

---

## 6) Entendendo o Git e o versionamento de código

Git serve para controlar versões do projeto e salvar o histórico de mudanças.

### Git básico: o que ele faz
- salva versões do código;
- permite voltar atrás;
- separa trabalho por branch;
- ajuda em times e projetos;
- organiza commits e merge.

---

## 7) Ordem correta para iniciar o Git no projeto

Se o projeto ainda não for um repositório Git:

```bash
cd CavacoLearn-Codigo
git init
```

Depois, verifique o estado:

```bash
git status
```

Esse comando mostra:
- arquivos modificados;
- arquivos na área de staging;
- branch atual; 
- arquivos não rastreados.

---

## 8) Como criar commits corretamente

### Passo 1: ver o que mudou

```bash
git status
```

### Passo 2: preparar arquivos para commit

```bash
git add .
```

Isso coloca tudo no stage.

### Passo 3: criar o commit

```bash
git commit -m "Inicializa projeto Cavaco Learn"
```

Regra importante:
- a mensagem do commit deve ser clara;
- use frases curtas e objetivas;
- exemplo: `"Adiciona tela inicial do app"`

### Exemplo real de sequência

```bash
cd CavacoLearn-Codigo
git status
git add .
git commit -m "Inicializa estrutura do app React Native"
```

---

## 9) Como criar branches

Branch é uma ramificação do projeto.

Você cria uma branch para trabalhar em uma funcionalidade sem mexer na principal.

### Criar e trocar para nova branch

```bash
git checkout -b feature/tela-inicial
```

ou a versão mais moderna:

```bash
git switch -c feature/tela-inicial
```

### Listar branches

```bash
git branch
```

### Trocar de branch existente

```bash
git checkout feature/tela-inicial
```

ou:

```bash
git switch feature/tela-inicial
```

### Exemplo de fluxo real

```bash
cd CavacoLearn-Codigo
git checkout -b feature/cadastro-usuario
```

Depois de terminar, você pode voltar para a branch principal:

```bash
git checkout main
```

ou:

```bash
git switch main
```

---

## 10) Como fazer merge de branches

O merge une o trabalho de uma branch com outra.

### Ordem correta

1. volte para a branch principal
2. faça o merge da branch de funcionalidade

```bash
git checkout main
git merge feature/tela-inicial
```

ou:

```bash
git switch main
git merge feature/tela-inicial
```

### Quando aparece conflito

Se o Git apontar conflitos, ele para e pede que você resolva manualmente.

Você precisa:
- abrir os arquivos conflitantes;
- decidir qual conteúdo manter;
- marcar como resolvido;
- continuar o merge.

Para finalizar um merge após resolver manualmente:

```bash
git add .
git commit -m "Resolve conflitos do merge"
```

---

## 11) Como fazer `pull`

O `pull` baixa atualizações do repositório remoto para a sua máquina.

### Sintaxe

```bash
git pull origin main
```

Isso significa:
- buscar atualizações do remoto `origin`
- na branch `main`
- integrar no seu código local

### Quando usar
- quando o time já enviou alterações;
- antes de continuar trabalhando numa branch;
- antes de fazer merge ou push.

### Ordem recomendada

```bash
git status
git pull origin main
```

---

## 12) Como fazer `push`

O `push` envia seus commits para o repositório remoto.

### Enviar branch principal

```bash
git push origin main
```

### Enviar uma branch nova

```bash
git push -u origin feature/tela-inicial
```

Depois da primeira vez, pode usar só:

```bash
git push
```

---

## 13) Sequência prática para trabalho em equipe

Aqui está um fluxo simples e seguro:

```bash
cd CavacoLearn-Codigo
git checkout main
git pull origin main
git checkout -b feature/minha-funcionalidade
# trabalha no código
# salva arquivos

git status
git add .
git commit -m "Adiciona funcionalidade X"
git push -u origin feature/minha-funcionalidade
```

Depois, quando a funcionalidade estiver pronta, o responsável pode fazer merge na branch principal.

---

## 14) Fluxo completo de versionamento do projeto

### Exemplo completo do dia a dia

```bash
cd CavacoLearn-Codigo
git status
git checkout main
git pull origin main
git checkout -b feature/novo-modulo
# desenvolve e testa
git add .
git commit -m "Cria modulo inicial"
git push -u origin feature/novo-modulo
```

Se necessário, depois:

```bash
git checkout main
git merge feature/novo-modulo
```

---

## 15) Dicas importantes para não errar no Git

### 1. Sempre veja o status antes de commit

```bash
git status
```

### 2. Faça commits pequenos e específicos

Exemplo:
- `"Ajusta layout da home"`
- `"Adiciona botão de login"`
- `"Corrige erro de renderização"`

### 3. Não faça commit de arquivos temporários

Evite mandar:
- `node_modules`
- arquivos de build temporários
- caches
- arquivos de ambiente local

### 4. Antes de começar a trabalhar, atualize a branch principal

```bash
git pull origin main
```

### 5. Antes de subir trabalho, confirme que está tudo certo

```bash
git status
git add .
git commit -m "Mensagem clara"
git push
```

---

## 16) Como usar o Git no seu projeto em ordem de aprendizado

Aqui vai a ordem mais didática para você memorizar:

```bash
cd CavacoLearn-Codigo
git init
git status
git add .
git commit -m "Primeiro commit"
git branch
git checkout -b feature/teste
git push -u origin feature/teste
git checkout main
git pull origin main
git merge feature/teste
```

Essa sequência mostra o ciclo real de trabalho:
- iniciar;
- atualizar;
- criar branch;
- commitar;
- enviar para remoto;
- atualizar main;
- integrar mudanças.

---

## 17) Resumo prático de dependências do projeto

### Dependências do app atual
- `expo` → base do projeto mobile
- `expo-status-bar` → barra de status
- `react` → renderização de interface
- `react-native` → app mobile

### Ferramentas de desenvolvimento
- `typescript` → tipagem do código
- `@types/react` → tipos do React para TS

### Onde rodar cada comando

#### Na pasta do app:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
```

#### Instalar dependências:

```bash
npm install
```

#### Rodar app:

```bash
npm start
```

#### Rodar web:

```bash
npm run web
```

#### Rodar Android:

```bash
npm run android
```

#### Rodar iOS:

```bash
npm run ios
```

---

## 18) Resumo final: comando da aula em ordem

Se você quiser uma sequência pronta para uso:

```bash
cd CavacoLearn-Codigo/Cavaco_Learn
npm install
npm start
```

Depois para Git:

```bash
cd CavacoLearn-Codigo
git status
git add .
git commit -m "Mensagem do commit"
git checkout -b feature/nova-funcionalidade
git push -u origin feature/nova-funcionalidade
git checkout main
git pull origin main
git merge feature/nova-funcionalidade
```

---

## 19) Dica final

O mais importante é entender a diferença entre:

- `npm install` → instala dependências do projeto
- `git add` → prepara arquivos para commit
- `git commit` → salva uma versão no histórico
- `git branch` → cria caminhos diferentes de desenvolvimento
- `git merge` → junta alterações
- `git pull` → baixa atualizações do remoto
- `git push` → envia seu código para o repositório

Esses três pilares fazem o projeto funcionar e também ficarem organizados:

1. instalar dependências corretamente
2. rodar o app no ambiente certo
3. versionar o código com Git de forma segura

---

Se quiser, no próximo passo eu também posso criar um segundo arquivo com:
- um passo a passo de setup do projeto do zero;
- um guia de `gitignore`;
- um mini tutorial de branch + merge + pull request;
- ou um resumo em formato de checklist para você seguir em cada nova tarefa.
