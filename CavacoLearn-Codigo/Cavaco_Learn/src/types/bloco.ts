export type TipoBloco = 
  | 'texto' 
  | 'diagrama_acorde' 
  | 'audio' 
  | 'video' 
  | 'cifra' 
  | 'enunciado';

// Bloco de conteúdo dinâmico (renderização dinâmica sem alterar o código do app)
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
