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
• imagens ou texturas de fundo;
• elementos decorativos que disputem atenção com os formulários;
• muitos elementos luminosos;
• excesso de cores;
• animações e/ou elementos que distraiam o administrador.

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
| logout | #531112 | Preenchimento dos botões destrutivos: Sair e Excluir |
| logoutBordas | #811F20 | Traçado/bordas dos botões destrutivos |
| logoutTexto | #C93032 | Texto dos botões destrutivos e das mensagens de erro |
| icons | #A8C590 | Preenchimento/cor dos icons "voltar" |
