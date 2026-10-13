# Interface do Aplicativo

## 1. Introdução
Descrição da interface e da identidade visual do aplicativo: paleta de
cores, tipografia (fontes), componentes gráficos, diretrizes gerais de UI.

* A interface deve ser construída a partir de um conjunto de componentes reutilizáveis, regras visuais e padrões de estilo.

## Descrição geral
A identidade visual do aplicativo é construída levando em conta a acessibilidade de navegação entre as telas, ou seja, a organização dos componentes visuais busca proporcionar uma navegação simples e direta entre as principais funcionalidades. 

A tela Home do app funciona como ponto central de acesso às áreas de Aulas, Músicas, Missões, Pontuação atual e Perfil. Os elementos interativos são representados principalmente por botões, campos de entrada e ícones. 

A tela de login apresenta campos para inserção de nome de usuário e senha, além de botões para entrada e cadastro.

As telas possuem uma estrutura comum entre elas, com um cabeçalho superior, título da seção e elementos gráficos relacionados à identidade do aplicativo. Nas telas internas são utilizados elementos de retorno para facilitar a navegação entre as diferentes partes do sistema.
Os conteúdos são dispostos em blocos, ou seja, cada tópico, exercício ou música pode ser composto por diferentes componentes, incluindo textos, imagens, áudios, vídeos e outros recursos multimídia, o que torna sua apresentação visual bem dinâmica.

## Diretrizes gerais de UI (Geral/Principais)
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
8. **Progressão sem dependência de porcentagens**
9. **Conteúdo dinâmico**
10. **Interface preparada para evolução**

---

## 3. Público e contexto de uso

O aplicativo é destinado principalmente a iniciantes no aprendizado do cavaquinho, por conta disso, a interface deve evitar pressupor conhecimento técnico ou musical avançado. A experiência deve responder facilmente às perguntas:

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

O visual principal será escuro, utilizando tons de verde como cor principal.

Imagens/figuras relacionadas ao cavaquinho ou à música podem aparecer como elementos de identidade, mas não devem prejudicar a leitura do conteúdo educacional.

### Regra

A identidade visual deve apoiar o conteúdo, e não competir com ele.

Evitar:

- fundos excessivamente detalhados atrás de textos;
- excesso de texturas;
- excesso de imagens decorativas;
- muitos elementos luminosos;
- excesso de cores;
- animações e/ou elementos que distraiam o aluno.

---

## 5. Tema

Padrão: Tons escuros.

### Fundo principal

```text
#10120f
```

### Painel

```text
#282E23
```

### Superfície

```text
#343C2D
```

### Superfície elevada

```text
#4F5948
```

---

## 6. Paleta de cores
Tons escuros e apagados de verde, como verde-musgo, verde-oliva e verde-claro para alguns detalhes, utilizados em conjunto com elementos em tons de cinza e preto. O fundo das telas deve utilizar uma imagem escurecida, se possível com cavaquinho de fundo, enquanto cabeçalhos, ícones e componentes de navegação, botões e elementos de destaque devem apresentar tonalidades esverdeadas mais claras, destacando-as melhor para o usuário. Os textos também utilizam predominantemente tonalidades claras e esverdeadas, criando contraste com o fundo escuro e proporcionando melhor visualização.

### Lista de cores principais:

| Nome | Cor | Uso |
|---|---|---|
| bgDark | #000000 | Fundo principal |
| bgPanel | #282E23 | Painéis principais |
| primary | #4C583F | Botões e componentes |
| primaryLight | #5A6C47 | Estados destacados |
| accent | #a0c997 | Destaques e ações |
| accentYellow | #dce59c | Recompensas/destaques especiais |
| label | #869A72 | Labels secundários |
| textDark | #262B22 | Texto sobre fundos claros |
| textClear | #e9f9dc | Texto sobre fundos escuros |
| textMuted | #868686 | Texto secundário |
| inputBg | #B3B0B0 | Campos |
| surface | #343C2D | Cards/superfícies |
| surfaceLight | #4F5948 | Superfícies elevadas |

---

## 7. Contraste

O contraste deve ser tratado como requisito de implementação, não apenas como detalhe visual.

Todo texto deve permanecer claramente legível sobre os fundos utilizados.

### Regra

Texto principal:

- branco ou tonalidade de verde claro, mas não vibrante, minimamente apagado, porém ainda sim visível;
- contraste alto.

Texto secundário:

- cinza/verde claro, mas não vibrante;
- somente quando a informação for realmente secundária.

Texto de ação:

- utilizar o verde de destaque quando for algo coletável/disponível ao usuário.

---

### ATENÇÃO: Cuidado com o verde de destaque

O `#a0c997` é uma cor de destaque específica.

Não utilizar essa cor como texto pequeno sobre fundo claro.

Ela deve ser utilizada principalmente em:

- ícones;
- indicadores;
- títulos curtos;
- estados ativos;
- elementos de destaque;
- pequenos detalhes de recompensa.

Quando a informação exigir leitura longa, e o fundo for escuro, utilizar texto claro.

---

## 8. Imagens de fundo

Imagens, se forem utilizadas, devem ser utilizadas no fundo de telas muito específicas. E quando utilizadas:

1. devem possuir escurecimento;
2. não podem prejudicar a leitura;
3. não devem aparecer atrás de blocos de texto longos sem proteção;
4. podem ser substituídas por fundo sólido em telas educacionais;
5. devem ser tratadas como elemento de identidade, não como conteúdo.

Para telas de conteúdo educacional, deve-se utilizar fundo sólido com tons escuros.

---

## 9. Tipografia

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

## 10. Espaçamento

Não utilizar espaçamentos aleatórios em cada tela.

Criar uma escala padrão, por exemplo:

```text
4
8
12
16
20
24
32
40
48
```

### Regra

O mesmo tipo de espaço deve representar a mesma relação visual.

Por exemplo:

- 16 px entre itens relacionados;
- 24 px entre grupos;
- 32 px entre seções.

Esses valores são uma base inicial e podem ser, e serão, calibrados durante a implementação.

---

## 11. Bordas e cantos

Os componentes devem possuir cantos arredondados moderados.

Sugestão/Exemplo:

```ts
export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 20,
  pill: 999,
};
```

Uso:

- `sm`: pequenos elementos;
- `md`: inputs;
- `lg`: cards;
- `xl`: componentes de destaque;
- `pill`: badges e estados.

Evitar arredondamento exagerado em todos os elementos, ajustar conforme desenvolvimento.

---

## 12. Bordas, sombras e elevação

O tema escuro não deve depender de sombras pesadas. Procurar destacar as elevações com tons levemente mais claros que o elemento em destaque.

Utilizar:

- diferença de cor entre superfícies;
- bordas discretas;
- contraste;
- espaçamento.

Sombras podem ser utilizadas apenas para indicar elevação quando necessário, como por exemplo em botões, ícone do perfil do usuário, cabeçalhos e blocos informativos.

---

## 13. Ícones

Os ícones devem seguir uma única biblioteca no projeto. 

A biblioteca escolhida é: https://lucide.dev/icons

Ícones escolhidos para elementos principais:

- Botão voltar: https://lucide.dev/icons/arrow-big-left
- Perfil padrão do usuário: 
- 

---

## 14. Tamanho de toque

Elementos interativos precisam possuir área de toque adequada, deve-se evitar botões e ícones pequenos demais.

Especialmente:

- botão voltar;
- ícones da navegação;
- botões de ação;
- controles de áudio;
- botões de conclusão.

A área clicável pode ser maior que o elemento visual, mas deve se adequar aos outros componentes.

---

## 15. Button (Botão/ões)

O Button é o componente padrão e um dos principais para ações dentro do sistema, sendo divido em ações como:

```text
CONTINUAR
CONCLUIR
RESGATAR
COMEÇAR
VOLTAR
EDITAR
EXCLUIR CONTA
LOGOUT
etc...
```

Deve possuir destaque diferente, com base nas cores, quando for alterável entre estados disponível ou indisponível à interação com usuário.

---

## 16. Input 

O Input será utilizado em:

- login;
- cadastro;
- edição de perfil;
- formulários administrativos.

Deve possuir:

- label;
- valor;
- placeholder;
- estado normal;
- foco;
- erro;
- desabilitado.

Exemplos:

```text
Nome de usuário
┌────────────────────────────┐
│ Vick                       │
└────────────────────────────┘
```

Estado de erro:

```text
Senha
┌────────────────────────────┐
│                            │
└────────────────────────────┘
A senha é obrigatória.
```

---

## 17. Header

O Header deve permitir:

- título;
- botão voltar;
- ação contextual opcional.

Exemplo:

```text
←  Primeiros acordes
```

A tela principal, Home, não possui botão de voltar. Para voltar à tela de login, deve-se fazer logout da conta. 

Algumas telas podem possuir subtítulos explicativos, o que configura uma ação contextual opcional.

---

## 18. BottomNavigation (botões fixos)

Navegação principal:

```text
Início
Aulas
Missões
Perfil
```

A navegação deve:

- destacar a seção atual;
- utilizar apenas seu título como identificação;
- possuir sombreamento correspondente;

Músicas podem ser acessadas pela Home e pela área de aulas/conteúdos sem necessariamente ocupar uma posição permanente na BottomNavigation.

---

## 19. StatusBadge

Estados principais:

```text
DISPONÍVEL
EM ANDAMENTO
CONCLUÍDO
BLOQUEADO
OFFLINE
```

Cada estado deve possuir representação visual consistente.

Não depender exclusivamente de cor, mas utilizá-la a favor.

Exemplo:

```text
CONCLUÍDO -> https://lucide.dev/icons/check - cor: #dce59c
BLOQUEADO -> https://lucide.dev/icons/ban - cor: #472424
OFFLINE -> https://lucide.dev/icons/wifi-off - cor: #262B22 
EM ANDAMENTO -> https://lucide.dev/icons/loader-circle - cor: #262B22 
DISPONÍVEL -> https://lucide.dev/icons/star - cor: #a0c997
```

O ícone/texto ajuda a comunicar o estado mesmo quando a cor não estiver disponível.

---

## 20. Progresso

A interface não utilizará porcentagens como principal forma de apresentação, pois o progresso deve ser apresentado de forma intuitiva.

Exemplo:

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

## 21. Loading ou Carregamento

O carregamento deve ser visualmente discreto.

Evitar telas inteiras com spinners permanentes.

Quando possível, manter a estrutura visual da tela, ou utilizar tela de carregamento padrão.

---

## 22. Estados de interface

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

Quando não houver conteúdo, exemplo:

```text
Nenhuma missão disponível.

Volte mais tarde para conferir
novos desafios.
```

O Empty State deve explicar:

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

Não exibir mensagens técnicas diretamente ao aluno.

---

## 23. Acessibilidade

É importante garantir:

- contraste adequado;
- textos legíveis;
- áreas de toque adequadas;
- não depender somente de cor;
- labels em inputs;
- mensagens de erro compreensíveis;
- navegação previsível;
- textos de botões claros;
- responsividade.


