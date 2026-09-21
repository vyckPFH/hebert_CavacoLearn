import { BlocoConteudo } from "./bloco";

export type DificuldadeMusica = 'iniciante' | 'intermediario' | 'avancado';

// 4. Música (Repertório prático com sistema de pontuação para desbloqueio)
export interface Musica {
  id?: string;
  titulo: string;
  artista: string;
  tom: string;
  dificuldade?: DificuldadeMusica;
  pontuacaoDesbloqueio: number;
  cifra?: string;
  audioUrl?: string;
  blocos?: BlocoConteudo[];
}
