export type TipoMissao = 'concluir_topico' | 'concluir_exercicio' | 'desbloquear_musica';

// 6. Missão (Desafio gamificado)
export interface Missao {
  id?: string;
  titulo: string;
  descricao: string;
  pontosRecompensa: number;
  tipo: TipoMissao;
  alvoId?: string;
}
