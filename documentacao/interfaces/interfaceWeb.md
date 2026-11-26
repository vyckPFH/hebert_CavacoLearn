# Interface do Painel Web

## 1. Introdução
*Descrição da interface e da identidade visual do painel administrativo: paleta de 
cores, tipografia (fontes), componentes gráficos e diretrizes gerais de UI.*

* A fim de poupar tempo, o painel web foi construído a partir de um conjunto de componentes reutilizáveis, regras visuais e padrões de estilo derivados
da interface do aplicativo do aluno, adaptados às necessidades de gerenciamento de conteúdo.


### Descrição geral
O painel administrativo é o módulo web do CavacoLearn, acessado pelo navegador e destinado exclusivamente ao usuário administrador. Por meio dele, o administrador cadastra, visualiza, edita e exclui os conteúdos que serão exibidos no aplicativo (níveis, tópicos, exercícios, músicas, missões e usuários), define a ordem de apresentação dos itens de cada nível, sem necessidade de alterar o código-fonte do app.

A identidade visual do painel mantém a mesma paleta de cores e a mesma tipografia do aplicativo. Porém, diferente do app, o painel não utiliza imagens decorativas, ilustrações, ícones nem indicadores de progresso, e concentra-se em formulários, listas e botões de ação.

A tela de login apresenta campos para inserção do gmail e da senha, além do botão de entrada e do acesso ao cadastro. Após a autenticação, a tela Home funciona como ponto central de acesso às áreas de gerenciamento de Aulas, Missões, Usuários e Músicas. A área de Aulas possui uma segunda tela central, que dá acesso ao gerenciamento de Níveis, Tópicos e Exercícios.

Todas as telas possuem uma estrutura comum: cabeçalho superior com o título "Área do Administrador", fundo preto e conteúdo centralizado. As telas de gerenciamento seguem um mesmo padrão: título, um formulário de cadastro no topo e, abaixo dele, a lista dos itens já cadastrados, cada um com os botões Editar e Excluir. Conteúdos que possuem blocos (tópicos, exercícios e músicas) são montados em um editor de blocos ordenados, que reflete a estrutura de renderização dinâmica usada pelo aplicativo.

### Diretrizes gerais de UI
* Manter consistência visual com o aplicativo (paleta e tipografia) e entre as diferentes telas do painel;
  
* Utilizar o mesmo padrão de tela para todas as áreas de gerenciamento (formulário no topo, lista abaixo);
  
* Utilizar componentes reutilizáveis para manter a organização da interface;
  
* Identificar claramente as ações que alteram dados e tornar as ações destrutivas (excluir, sair) visualmente distintas das demais;
  
* Exigir confirmação antes de qualquer exclusão;
  
* Dar retorno imediato a toda ação do administrador (sucesso, erro, carregamento);
  
* Permitir a montagem de conteúdos com diferentes tipos de bloco (textos, imagens, áudios, vídeos, links), respeitando a ordem cadastrada;
  
* Manter a estrutura da interface compatível com a inclusão de novos tipos de bloco, sem reformulação das telas.

---

## 2. Princípios do design

A interface do painel web segue os seguintes princípios:

1. **Simplicidade**
2. **Consistência com o aplicativo**
3. **Reutilização**
4. **Clareza das ações disponíveis**
5. **Segurança em ações destrutivas**
6. **Feedback ao administrador**
7. **Eficiência no cadastro de conteúdo**
8. **Conteúdo dinâmico (blocos ordenados)**
9. **Interface preparada para evolução**

---

## 3. Público e contexto de uso
   
O painel é destinado ao administrador do sistema, que cadastra e mantém o conteúdo do curso. Ele utiliza o painel em um navegador de computador, em sessões de trabalho, e não necessariamente possui conhecimento técnico de programação. Por isso, a interface evita termos técnicos (como JSON ou configuração) e apresenta os blocos de conteúdo por meio de campos simples. A experiência busca responder facilmente às perguntas:

- Onde estou?
- O que posso gerenciar?
- O que já está cadastrado?
- O que acontece se eu clicar neste botão?
- Minha alteração foi salva?
- Em que ordem o aluno verá estes itens?
- Por que não consigo excluir este item?

---

## 4. Identidade visual

O visual escolhido é o mesmo do aplicativo: escuro, utilizando tons de verde como cor principal. No painel web, a identidade é transmitida apenas pela paleta e pela tipografia, pois o foco do painel é a leitura de listas e o preenchimento de formulários.

Evitamos:
- imagens ou texturas de fundo;
- elementos decorativos que disputem atenção com os formulários;
- muitos elementos luminosos;
- excesso de cores;
- animações e/ou elementos que distraiam o administrador.

---

## 5. Tema

Tons escuros e apagados de verde, com verde levemente mais claro para detalhes. O fundo principal das telas utiliza a cor preta, enquanto o cabeçalho, os cards, os botões e os blocos de conteúdo apresentam tonalidades esverdeadas levemente mais claras, destacando-os melhor para o usuário. Os textos utilizam tonalidades claras e esverdeadas, criando contraste com o fundo escuro.

Padrão: tons escuros e dessaturados de verde, com detalhes em verde mais claro.

### Fundo principal

```text
#000000
```

### Painel ou Cards flutuantes

```text
#3D4933
```

### Interior dos botões

```text
#282E23
```

### Traçado das bordas (botões, cards, icons)

```text
#3D4933
```

---

## 6. Paleta de cores completa
A paleta é a mesma do aplicativo, porém os usos foram redefinidos para o contexto web.

| Nome | Cor | Uso |
|---|---|---|
| fundo | #000000 | Fundo principal |
| cards | #3D4933 | Painéis principais (Cabeçalho, cards, blocos do editor de conteúdo, faixa de título de seção e janela de confirmação) |
| botoes | #282E23 | Preenchimento de botões e componentes |
| bordas | #3D4933 | Traçado/bordas dos componentes "flutuantes" (cards, botões) |
| titulo | #A8C590 | Texto principal (títulos, nomes dos botões, conteúdos) |
| subTitulo | #7C926A | Texto secundário do app (subtítulos, informações breves, dados do usuário, informações complementares dos itens e textos de apoio) |
| campoInput | #43483E | Fundo do campo de preenchimento |
| placeholder | #7C926A | Texto dentro dos campos de input |
| bordaInput | #596A4C | Traçado/bordas dos campos de input |
| destructive | #531112 | Preenchimento dos botões destrutivos: Sair e Excluir |
| destructiveBordas | #811F20 | Traçado/bordas dos botões destrutivos |
| destructiveTexto | #C93032 | Texto dos botões destrutivos e das mensagens de erro |
| icons | #A8C590 | Preenchimento/cor dos icons "voltar" |

---

## 7. Tipografia

### Fonte principal

#### Calistoga

A mesma fonte do aplicativo, utilizada em todos os textos do painel, por exemplo:
- título do cabeçalho;
- títulos de seção;
- rótulos dos campos;
- nomes dos botões;
- descrição dos itens das listas;
- mensagens de estado, de erro e de confirmação.

---

## 8. Espaçamento

No painel web, os valores foram ampliados para telas largas, com mouse e teclado. Os valores são em pixels CSS e são aplicados em rem (1rem = 16px), para respeitar o zoom e as preferências de fonte do navegador.

```ts
xs: 4,       // 0.25rem
sm: 8,       // 0.5rem
md: 12,      // 0.75rem
lg: 16,      // 1rem
xl: 24,      // 1.5rem
xxl: 32,     // 2rem
xxxl: 40,    // 2.5rem
huge: 56,    // 3.5rem
section: 72  // 4.5rem
```

### Aplicação no painel (valores iniciais, a calibrar durante a implementação):

- entre rótulo e campo: sm (8px);
- entre campos de um formulário: lg (16px);
- entre botões de ação de uma mesma linha: xl (24px);
- entre os botões de um menu (Home e Aulas): xl (24px);
- espaço interno de cards: xl (24px);
- espaço interno de linhas de lista: lg (16px) na vertical e xl (24px) na horizontal;
- entre linhas da lista: md (12px);
- entre blocos do editor de conteúdo: lg (16px);
- entre seções (formulário e lista): xxxl (40px);
- entre o cabeçalho e o conteúdo: huge (56px);
- margem lateral da página: xxl (32px);
- entre grandes áreas da tela (por exemplo, o menu e o botão Voltar no canto): section (72px).

---

## 9. Bordas e cantos

Os componentes possuem cantos arredondados, seguindo a mesma lógica do aplicativo, mas com valores ajustados ao tamanho dos componentes na web, onde botões e campos têm 44px de altura e os cards são maiores:

```ts
export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
};
```

### Aplicação no painel:
- sm: botões pequenos dentro de linhas de lista (Editar, Excluir);
- md: campos de texto longo (áreas de texto dos blocos);
- lg: cards, blocos do editor e linhas de lista;
- xl: janela de confirmação;
- pill: campos de uma linha e botões principais (Entrar, Cadastrar, Voltar, Salvar, Cancelar).

### Sombras e elevação
Para destaque e breve sensação de sombreamento e elevação, foram utilizados tons levemente mais claros em torno da delimitação dos componentes principais, como botões e cards, cabeçalhos e blocos informativos.

---

## 10. Ícones

O painel web utiliza apenas um ícone, o botão "voltar". Além disso, toda ação e todo elemento de navegação são identificados por texto, o que também deixa o significado de cada botão explícito:

Biblioteca escolhida: https://lucide.dev/icons

Ícone escolhido para botão "voltar": https://lucide.dev/icons/arrow-big-left

- Sair: botão de texto "Sair";
- Excluir: botão de texto "Excluir" (no protótipo, o botão vermelho com "X" é substituído pelo texto);
- Mover itens: botões de texto "Subir" e "Descer";
- Títulos: sem elementos de decoração ao lado do texto.

A única exceção são os controles nativos do navegador (como a seta de um campo de seleção), que não são ícones do projeto.

---

## 11. Área de clique e interação

Elementos interativos precisam possuir área de clique adequada e espaçamento suficiente para evitar cliques acidentais, especialmente:

- botões Editar e Excluir de cada linha da lista, que ficam separados por espaçamento xl para reduzir o risco de excluir por engano;
- botões Subir e Descer do editor de blocos e da ordenação de itens;
- botões de ação dos formulários (Cadastrar, Salvar, Cancelar, Voltar).

---

## 12. Navegação
O painel, diferente do aplicativo, não possui barra de navegação persistente. A navegação é hierárquica, em dois níveis, a partir da Home:

```ts
Login
  └── Home
        ├── Aulas Registradas
        │     ├── Níveis Registrados
        │     ├── Tópicos Registrados
        │     └── Exercícios Registrados
        ├── Missões Registradas
        ├── Usuários Registrados
        └── Músicas Registradas
```
        
- A Home e a tela central de Aulas funcionam como menus de botões centralizados.
- Todas as telas internas possuem o botão Voltar, que retorna à tela anterior.
- Na Home, no lugar do Voltar, fica o botão Sair, que encerra a sessão.
- O título do cabeçalho é fixo ("Área do Administrador"); a localização do administrador é indicada pelo "subtítulo", um título da seção dentro da tela (por exemplo, "Nova Missão" e "Missões Cadastradas").
- O botão Voltar fica no canto inferior direito nos menus (Home e Aulas) e ao lado do botão Cadastrar nas telas de gerenciamento.

---

## 13. Componentes

### 13.1 Botão

Preenchimento botoes, borda bordas, texto titulo, formato pill. Utilizado em menus, formulários e navegação.

### 13.2 Botão pequeno de linha

Versão reduzida do botão, formato sm, utilizada dentro das linhas das listas (Editar).

### 13.3 Botão destrutivo
Preenchimento destructive, borda destructiveBordas, texto destructiveTexto. Utilizado em Sair e Excluir, e no botão de confirmação da janela de exclusão. É o único componente que utiliza o vermelho, para que o administrador reconheça imediatamente as ações irreversíveis.

### 13.4 Campo de preenchimento

Rótulo acima do campo, em titulo. Fundo campoInput, borda bordaInput, texto de exemplo em placeholder. Em caso de erro, a mensagem aparece logo abaixo do campo em destructiveTexto. Variações:
- campo de texto de uma linha (pill);
- campo numérico (recompensa, pontos de desbloqueio, ordem);
- campo de senha;
- área de texto (md), utilizada nos blocos de texto;
- campo de seleção (nível de um tópico ou exercício, tipo de bloco), com a mesma aparência dos campos de texto.

### 13.5 Card e faixa de seção

Fundo cards, borda bordas, formato lg. A faixa de título de seção usa o mesmo fundo cards, com texto titulo.

### 13.6 Linha de lista

Cada item cadastrado é uma linha com:
- à esquerda, a descrição do item (titulo) e uma informação secundária (subTitulo);
-  à direita, os botões Editar e Excluir.

```ts
Completa 1 exercício diariamente.                  [ Editar ] [ Excluir ]
  Recompensa: 10 pontos.
```

### 13.7 Editor de blocos

Usado em tópicos, exercícios e músicas. O conteúdo é uma lista de blocos ordenados, cada um exibido como um card com:
- cabeçalho com a posição e o tipo do bloco (por exemplo, "Bloco 2 — Texto");
- campos específicos do tipo;
- botões Subir, Descer e Excluir bloco.

| Tipo | Campos |
| :--- | :--- |
| **Título** | Texto do título |
| **Texto** | Área de texto |
| **Imagem** | Arquivo ou endereço da imagem; descrição alternativa |
| **Áudio** | Arquivo ou endereço do áudio |
| **Vídeo** | Arquivo ou endereço do vídeo |
| **Link** | Texto exibido e endereço |

Ao final da lista, o administrador escolhe o tipo em um campo de seleção e usa o botão "Adicionar bloco". A lista de tipos deve ser montada a partir dos tipos suportados pelo sistema, de modo que novos tipos possam ser incluídos sem reformular a tela. A ordem dos blocos na tela é exatamente a ordem em que o aluno verá o conteúdo.

### 13.7 Janela de confirmação

Card com borda bordas, formato xl, centralizado sobre a tela escurecida. Contém uma pergunta, uma frase de apoio e dois botões: Excluir (destrutivo) e Cancelar.

---

## 14. Telas

### 14.1 Login

Cabeçalho "Área do Administrador" em cards. Abaixo, sobre fundo preto e centralizados:
- campo Gmail do Adm;
- campo Senha;
- botão Entrar;
- link de texto Cadastrar.

Credenciais inválidas, campos vazios e falhas de comunicação exibem mensagem abaixo dos campos, e o administrador permanece na tela.

### 14.2 Cadastro

Mesma estrutura da tela de login, em dimensões diferentes, com os campos Gmail, Senha e Confirmar senha, botão "Cadastrar" e botão "Voltar". Em caso de sucesso, o sistema retorna ao login com mensagem de confirmação.

### 14.3 Home

Cabeçalho e quatro botões centralizados, em coluna: Aulas Registradas, Missões Registradas, Usuários Registrados e Músicas Registradas. O botão Sair (destrutivo) fica no canto inferior direito.

### 14.4 Aulas Registradas

Três botões centralizados: Níveis Registrados, Tópicos Registrados e Exercícios Registrados. O botão Voltar fica no canto inferior direito.

---

## 15. Estados de interface

Todo componente que depende de dados deve considerar pelo menos:

```text
Loading
Success
Empty
Error
```

---

### Empty State

Quando não houver conteúdo, o estado vazio explica o que está vazio e o que o administrador pode fazer:

```ts
Nenhuma missão cadastrada.

Use o formulário acima para cadastrar a primeira missão.
```

O Empty State explica:

- o que está vazio;
- por que pode estar vazio;
- o que o usuário pode fazer.

---

### Error State

Erro de comunicação:

```ts
Não foi possível carregar este conteúdo.

Verifique sua conexão e tente novamente.

[ TENTAR NOVAMENTE ]
```

Erro ao gravar (cadastrar, editar, excluir ou ordenar):

```ts
Não foi possível concluir a operação.

Nenhuma alteração foi feita. Verifique sua conexão e tente novamente.
```

- Sessão inválida: o administrador é direcionado para a tela de login.

Exclusão com dependências:

Quando o item possui itens associados (por exemplo, um nível com tópicos, um tópico com exercícios ou músicas e exercícios com registros de alunos), o sistema verifica as dependências antes de excluir e informa o motivo:

```ts
Não foi possível excluir este nível.

Ele possui tópicos ou exercícios associados.
Remova ou mova esses itens antes de excluí-lo.
```




