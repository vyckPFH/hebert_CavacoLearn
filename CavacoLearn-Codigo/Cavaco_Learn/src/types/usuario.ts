// 5. Perfil do Estudante (Gamificação, pontuação e progresso)
export type Usuario = {
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
