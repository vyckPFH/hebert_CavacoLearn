import { BlocoConteudo } from "./bloco";

// 2. Tópico (Aula didática composta por blocos de conteúdo)
export interface Topico {
  id?: string;
  nivelId: string; // Relacionamento com Nível
  titulo: string;
  conteudo?: string; // Para compatibilidade rápida
  ordem: number;
  audioUrl?: string;
  blocos?: BlocoConteudo[];
}
