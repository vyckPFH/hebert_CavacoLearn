import { BlocoConteudo } from "./bloco";

// 3. Exercício (Fixação e avaliação do aluno)
export interface Exercicio {
  id?: string;
  nivelId: string;
  topicoId?: string;
  titulo: string;
  ordem: number;
  pontosRecompensa: number;
  blocos?: BlocoConteudo[];
}
