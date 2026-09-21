// Tipos de dados principais do CavacoLearn baseados na modelagem pedagógica em blocos

export type TipoBloco = 
  | 'texto' 
  | 'diagrama_acorde' 
  | 'audio' 
  | 'video' 
  | 'cifra' 
  | 'enunciado';

// Bloco de conteúdo dinâmico (renderização dinâmica sem alterar o código)
export interface BlocoConteudo {
  id?: string;
  ordem: number;
  tipo: TipoBloco;
  configuracao: {
    texto?: string;
    acorde?: string;
    cordas?: number[]; // [corda4, corda3, corda2, corda1]
    dedos?: number[];
    url?: string;
    bpm?: number;
    pergunta?: string;
    opcoes?: string[];
    respostaCorreta?: number;
    acordesUtilizados?: string[];
    conteudoCifra?: string;
    [key: string]: any;
  };
}

// 1. Nível (Módulo didático)
export interface Nivel {
  id?: string;
  titulo: string;
  descricao: string;
  ordem: number;
  icone?: string;
  cor?: string;
}

// 2. Tópico (Aula composta por blocos didáticos)
export interface Topico {
  id?: string;
  nivelId: string; // Relacionamento com Nível
  titulo: string;
  conteudo?: string; // Texto rápido para retrocompatibilidade
  ordem: number;
  audioUrl?: string;
  blocos?: BlocoConteudo[];
}

// 3. Exercício (Desafios de fixação e avaliação)
export interface Exercicio {
  id?: string;
  nivelId: string;
  topicoId?: string;
  titulo: string;
  ordem: number;
  pontosRecompensa: number;
  blocos?: BlocoConteudo[];
}

// 4. Música (Repertório prático com sistema de desbloqueio por pontuação)
export interface Musica {
  id?: string;
  titulo: string;
  artista: string;
  tom: string;
  dificuldade?: 'iniciante' | 'intermediario' | 'avancado';
  pontuacaoDesbloqueio: number;
  cifra?: string;
  audioUrl?: string;
  blocos?: BlocoConteudo[];
}

// 5. Perfil do Aluno (Gamificação, pontuação e progresso)
export interface UsuarioPerfil {
  id?: string;
  id_usuario: string;
  nome: string;
  email?: string;
  pontuacao: number;
  nivel_atual?: number;
  topicos_concluidos: string[];
  exercicios_concluidos: string[];
  musicas_desbloqueadas: string[];
  missoes_concluidas?: string[];
}

// 6. Missão (Desafio gamificado)
export interface Missao {
  id?: string;
  titulo: string;
  descricao: string;
  pontosRecompensa: number;
  tipo: 'concluir_topico' | 'concluir_exercicio' | 'desbloquear_musica';
  alvoId?: string;
}
