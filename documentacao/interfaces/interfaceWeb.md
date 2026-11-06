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


