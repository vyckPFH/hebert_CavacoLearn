# Hebert_CavacoLearn
Este é o TCC de desenvolvimento do aplicativo móvel CavacoLearn, adaptado para o trabalho da disciplina de tópicos especiais da informatica, lecionada pelo Prof. Dr. Herbert Rausch Fernandes. 

clean
ddd
mvc

(model como representação de dados)
```text
CavacoLearn/
└── src/
    ├── componentes/   - componentes reutilizáveis (pedaços de tela, botões, inputs, etc.)
    ├── services/      - serviços de negócio (regras de negócio, validações, etc. CRUDS...)
    ├── telas/         - telas completas do app (paths de navegação)
    ├── types/         - camada de infraestrutura e comunicação externa (DTOs, interfaces, tipos de dados)
    ├── utils/         - funções utilitárias (helpers, formatações, etc.)
    └── ...

```

npm install

# O que é o Firebase SQL Connector?

Em termos práticos, um "SQL connector" é uma camada de integração que permite que a aplicação se conecte a um banco de dados relacional, como MySQL, PostgreSQL ou outro sistema compatível, usando consultas SQL. Seu papel é facilitar a comunicação entre o frontend/backend e o banco, encapsulando conexões, autenticação, consultas e tratamento de dados.

No contexto do Firebase, vale lembrar que o Firebase tradicional não é um banco SQL nativo. Ele usa soluções como Firestore e Realtime Database, que são NoSQL. Porém, quando falamos em "Firebase SQL connector" ou em integrações com banco SQL, estamos falando de uma ponte: um serviço ou módulo que conecta o app a um banco relacional ou a um backend que expõe dados em SQL.

Para que serve:
- Conectar a aplicação a dados estruturados em tabelas;
- Executar consultas como SELECT, INSERT, UPDATE e DELETE;
- Separar a lógica de acesso a dados do restante da aplicação;
- Centralizar regras de autenticação, permissões e validações;
- Permitir que o app ou o backend consultem dados em tempo real ou sob demanda.

Como usar:
1. Definir a conexão com o banco ou serviço de dados;
2. Configurar credenciais, URL, usuário, senha ou tokens de acesso;
3. Criar funções/services para consultar e persistir dados;
4. Mapear os resultados para tipos/objetos do TypeScript;
5. Consumir esses dados na interface da aplicação.

Exemplo de uso em TypeScript:

```ts
// exemplo de serviço que acessa dados de um banco SQL
export async function buscarUsuarios() {
  const query = 'SELECT id, nome, email FROM usuarios';
  const resultado = await db.query(query);
  return resultado.rows;
}
```

Outro exemplo, já relacionado ao modelo do projeto:

```ts
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export async function listarAlunos(): Promise<Usuario[]> {
  const resposta = await fetch('https://api.exemplo.com/alunos');
  return resposta.json();
}
```

Como isso pode ser usado no projeto como um todo:
No CavacoLearn, um SQL connector poderia ser usado para armazenar dados pedagógicos e de usuários em um backend centralizado, por exemplo:
- usuários e perfis;
- níveis, tópicos e blocos de conteúdo;
- exercícios concluídos;
- pontuação e progresso do aluno;
- músicas desbloqueadas;
- histórico de desempenho.

Nesse cenário, o app mobile consumiria esses dados por meio de serviços, enquanto o banco SQL ficaria responsável pela persistência e pela organização das informações. Isso deixa o código mais organizado, facilita manutenção e permite crescimento do sistema sem misturar regras de negócio com lógica de interface.

Em resumo, o SQL connector funciona como o "portão de entrada" para os dados do sistema. Ele garante que a aplicação consiga acessar, consultar, atualizar e organizar as informações de forma segura e reutilizável.


## diferença entre interface e type:

| Aspecto | interface | type |
|---|---|---|
| Definição | Declara a forma de um objeto | Cria um alias para qualquer tipo |
| Herança | Suporta `extends` | Suporta união/interseção (`|`, `&`) |
| Objetos | Excelente para modelar objetos e contratos | Muito útil para tipos primitivos, unions e tuples |
| Reabertura | Pode ser extendida/mesclada em vários locais | Não é reaberta da mesma forma |
| União e interseção | Não é ideal para `type Usuario = ... | ...` | Ótimo para unions/interseções |
| Leitura | Mais intuitiva para contratos de objetos | Mais flexível e poderoso |

Exemplos:

```ts
// interface: boa para modelar objetos
interface Usuario {
  id: number;
  nome: string;
  email?: string;
}

interface UsuarioAdmin extends Usuario {
  nivel: 'admin' | 'usuario';
}
```

```ts
// type: boa para unions, interseções e aliases complexos
type Status = 'ativo' | 'inativo' | 'pendente';

type UsuarioComStatus = Usuario & {
  status: Status;
};
```

Quando usar cada um:
- Use `interface` para contratos de objetos e quando você quer reaproveitar/estender estruturas.
- Use `type` para tipos mais complexos, como união de strings, interseções, arrays, tuplas e aliases reutilizáveis.

Resumo prático:
- `interface` = mais voltada para objetos.
- `type` = mais geral e flexível.


