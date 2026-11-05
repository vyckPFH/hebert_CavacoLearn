# Interface do Aplicativo

## 1. Introdução
*Descrição da interface e da identidade visual do aplicativo: paleta de
cores, tipografia (fontes), componentes gráficos diretrizes gerais de UI.*

* A interface foi construída a partir de um conjunto de componentes reutilizáveis, regras visuais e padrões de estilo.

### Descrição geral
A identidade visual do aplicativo foi elaborada levando em conta a acessibilidade de navegação entre as telas, ou seja, a organização dos componentes visuais busca proporcionar uma navegação simples e direta entre as principais funcionalidades. 

A tela Home do app funciona como ponto central de acesso às áreas de Aulas, Músicas, Missões, Perfil e Pontuação atual. Os elementos interativos são representados principalmente por botões, campos de entrada e ícones. 

A tela de login apresenta campos para inserção de nome de usuário e senha, além de botões para entrada e cadastro.

As telas possuem uma estrutura comum entre elas, com um cabeçalho superior, título da seção e elementos gráficos relacionados à identidade do aplicativo. Nas telas internas são utilizados elementos de retorno para facilitar a navegação entre as diferentes partes do sistema.

Os conteúdos são dispostos em blocos, ou seja, cada tópico, exercício ou música pode ser composto por diferentes componentes, incluindo textos, imagens, áudios, vídeos e outros recursos multimídia, o que torna sua apresentação visual bem dinâmica.

### Diretrizes gerais de UI (Geral/Principais)
* Priorizar dispositivos móveis, seguindo a estratégia Mobile-First;

* Manter consistência visual entre as diferentes telas;

* Utilizar a identidade visual musical como elemento recorrente da interface;

* Priorizar navegação simples e direta entre as principais funcionalidades;

* Utilizar componentes reutilizáveis para manter a organização da interface;

* Utilizar elementos visuais de forma consistente para representar ações e estados do sistema;

* Organizar os conteúdos educacionais em blocos ordenados;

* Permitir a utilização de diferentes formatos de conteúdo, como textos, imagens, áudios e vídeos;

* Manter a estrutura da interface compatível com a renderização dinâmica dos conteúdos;

* Disponibilizar mecanismos de acesso aos conteúdos baixados para utilização offline;

* Diferenciar visualmente elementos relacionados à progressão, missões e recompensas;

* Adaptar a interface para diferentes tamanhos de tela posteriormente, preservando a estrutura desenvolvida para dispositivos móveis.

---

## 2. Princípios do design

A interface do CavacoLearn deve seguir os seguintes princípios:

1. **Simplicidade**
2. **Consistência**
3. **Reutilização**
4. **Clareza das ações disponíveis**
5. **Feedback ao usuário**
6. **Conteúdo educacional como prioridade**
7. **Identidade musical sem excesso de elementos decorativos**
8. **Conteúdo dinâmico**
9. **Interface preparada para evolução**

---

## 3. Público e contexto de uso

O aplicativo é destinado principalmente a iniciantes no aprendizado do cavaquinho, por conta disso, a interface busca evitar pressupor conhecimento técnico ou musical avançado. A experiência busca responder facilmente às perguntas:

- Onde estou?
- O que devo fazer agora?
- O que já concluí?
- O que falta?
- O que posso acessar?
- Por que determinado conteúdo está bloqueado?
- O que ganho ao concluir uma missão?
- Como continuo de onde parei?

---

## 4. Identidade visual

A identidade visual está relacionada:

- ao cavaquinho;
- à música;
- ao aprendizado;
- à progressão.

O visual principal é escuro, utilizando tons de verde como cor principal.

Imagens/figuras relacionadas ao cavaquinho ou à música aparecem como elementos de identidade, mas priorizamos a ideia de não prejudicar a leitura do conteúdo educacional. A identidade visual busca apoiar o conteúdo, e não competir com ele.

Evitamos:

- fundos excessivamente detalhados atrás de textos;
- excesso de texturas;
- excesso de imagens decorativas;
- muitos elementos luminosos;
- excesso de cores;
- animações e/ou elementos que distraiam o aluno.

---

## 5. Tema

Tons escuros e apagados de verde, e verde-claro para alguns detalhes, utilizados em conjunto com elementos em tons de cinza e preto. O fundo principal das telas utiliza a cor preta, enquanto cabeçalhos, ícones e componentes de navegação, botões e elementos de destaque apresentam tonalidades esverdeadas levemente mais claras, destacando-as melhor para o usuário. Os textos utilizam predominantemente tonalidades claras e esverdeadas, criando contraste com o fundo escuro e proporcionando melhor visualização.

Padrão: Tons escuros e dessaturados de verde, com detalhes em verde mais claro.

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

### Cor de fundo do icon da logotipo 

```text
#4C583F
```

---

## 6. Paleta de cores completa

| Nome | Cor | Uso |
|---|---|---|
| fundo | #000000 | Fundo principal |
| cards | #3D4933 | Painéis principais |
| botoes | #282E23 | Preenchimento de botões e componentes |
| bordas | #3D4933 | Traçado/bordas dos componentes "flutuantes" (cards, botões) |
| titulo | #A8C590 | Texto principal do app (títulos, nomes dos botões, conteúdos) |
| subTitulo | #7C926A | Texto secundário do app (subtítulos, informações breves, dados do usuário) |
| textoDestaque | #C3D15F | Destaques, valores de recompesas e progresso |
| campoInput | #43483E | Fundo do campo de preenchimento |
| placeholder | #7C926A | Texto dentro dos campos de input |
| bordaInput | #596A4C | Traçado/bordas dos campos de input |
| logout | #531112 | Preencimento do botão de logout |
| logoutBordas | #811F20 | Traçadp/bordas do botão de logout |
| logoutTexto | #C93032 | Texto do botão de logout |
| icons | #A8C590 | Preenchimento/cor dos icons "voltar" |

---

## 7. Tipografia

### Fonte principal

#### Calistoga

Utilizada em todos os textos, por exemplo:

- títulos;
- botões;
- navegação;
- títulos de cards;
- destaques curtos.
- conteúdo educacional;
- explicações;
- descrições;
- textos maiores.

---

## 8. Espaçamento

Foi criada uma escala padrão de espaçamento, a fim de evitar a desordem dos componentes.

```ts
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  section: 48
```

Esses valores são uma base inicial e foram calibrados durante a implementação.

---

## 9. Bordas e cantos

Os componentes, como botões e cards, possuem cantos arredondados moderados. Para os quais também foi criada uma escala padrão.

```ts
export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 20,
  pill: 999,
};
```
Sendo:

- `sm`: pequenos elementos;
- `md`: inputs;
- `lg`: cards;
- `xl`: componentes de destaque;
- `pill`: badges e estados.

---

### Sombras e elevação

Para destaque e breve sensação de sombreamento e elevação, foram utilizados tons levemente mais claros em torno da delimitação dos componentes principais, como botões e cards, ícone do perfil, cabeçalhos e blocos informativos.

---

## 10. Ícones

Para extração dos ícones foi utilizada uma única biblioteca no projeto. 

A biblioteca escolhida foi: https://lucide.dev/icons

Ícones escolhidos para elementos principais:

- Botão voltar: https://lucide.dev/icons/arrow-big-left
- Títulos: https://lucide.dev/icons/sixteenth-notes, https://lucide.dev/icons/clef-treble
- Título pontuação: https://lucide.dev/icons/star

Por escolha estética, os elementos de decoração dos títulos estão dispostos de ambos os lados do texto em que foram utilizados.

---

## 11. Tamanho de toque

Elementos interativos precisam possuir área de toque adequada, por conta buscamos evitar botões e ícones pequenos demais.

Especialmente:

- botão voltar;
- ícones da navegação;
- botões de ação;
- controles de áudio;
- botões de conclusão.

A área clicável pode ser maior que o texto de identificação, mas deve se adequar aos outros componentes.

---

## 12. Botões de navegação

```text
Início
Aulas
Missões
Músicas
```

Os botões de navegação não aparecem na tela home, mas estão presentes em telas como missões, músicas e aulas, de tal modo a facilitar a navegação, evitando que o ususário tenha que voltar à tela home para acessar outras áreas do app.

---

## 13. StatusBadge

### Níveis, tópicos e exercícios

```text
DISPONÍVEL
BLOQUEADO
CONCLUÍDO
```
#### Representação visual

```text
CONCLUÍDO -> https://lucide.dev/icons/check - corTexto: #869B75 - botão padrão e ícon padrão. 
DISPONÍVEL -> https://lucide.dev/icons/star - cor: #A8C590
```

### Músicas

```text
DISPONÍVEL
BLOQUEADO/INDISPONÍVEL
```
#### Representação visual

```text
DISPONÍVEL -> https://lucide.dev/icons/star - corTexto: #A8C590
BLOQUEADO/INDISPONÍVEL -> corTexto: #869B75 - botão de coletar com valor dos pontos necessários para tal, cor: botão padrão, valor destaque.
```

### Missões

```text
DISPONÍVEL
BLOQUEADO/INDISPONÍVEL
CONCLUÍDO
```
#### Representação visual

```text
DISPONÍVEL -> https://lucide.dev/icons/star - corTexto: #A8C590 - botão de coletar com valor dos pontos necessários para tal, cor: botão padrão, valor destaque.
BLOQUEADO/INDISPONÍVEL -> corTexto: #A8C590
CONCLUÍDO -> corTexto: #869B75 - após coletado, texto passa a ficar tachado (riscado). 
```

---

## 14. Progresso

O progresso do usuário é apresentado de maneira intuitiva, basicamente uma listagem de quanto o usuário já desbloqueou, acessou ou concluiu. Além da quantidade de pontos coletados pelo mesmo. 

```text
(https://lucide.dev/icons/clef-treble) SEU PROGRESSO (https://lucide.dev/icons/music-4)

Você concluiu 3 de 15 níveis.

TÓPICOS
7 concluídos

EXERCÍCIOS
5 concluídos

MÚSICAS
4 desbloqueadas

PONTUAÇÃO
320 pontos
```

---

## 15. Estados de interface

Todo componente que depende de dados deve considerar pelo menos:

```text
Loading
Success
Empty
Error
```

Exemplo:

```text
Loading
   ↓
Success
   ↓
Empty / Error
```

---

### Empty State

Quando não houver conteúdo:

```text
Nenhuma missão disponível.

Volte mais tarde para conferir
novos desafios.
```

O Empty State explica:

- o que está vazio;
- por que pode estar vazio;
- o que o usuário pode fazer.

---

### Error State

Erro de comunicação:

```text
Não foi possível carregar este conteúdo.

Verifique sua conexão e tente novamente.

[ TENTAR NOVAMENTE ]
```

---

Fora de rede:

```text
Não foi possível carregar este conteúdo.

Esta ação precisa de conexão com a internet.

Verifique sua conexão e tente novamente.

[ TENTAR NOVAMENTE ]
```
