import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  increment,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { UsuarioPerfil } from "./types";

const COLECAO = "usuarios";

// ─── PERFIL DO ALUNO E PROGRESSO ─────────────────────────────────────────────

// Inicializa ou busca o perfil de um usuário
export async function obterOuCriarPerfil(
  userId: string,
  nomePadrao: string = "Aluno de Cavaquinho",
  emailPadrao: string = ""
): Promise<UsuarioPerfil> {
  const ref = doc(db, COLECAO, userId);
  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    return { id: snapshot.id, ...(snapshot.data() as Omit<UsuarioPerfil, "id">) };
  }

  const novoPerfil: Omit<UsuarioPerfil, "id"> = {
    id_usuario: userId,
    nome: nomePadrao,
    email: emailPadrao,
    pontuacao: 0,
    nivel_atual: 1,
    topicos_concluidos: [],
    exercicios_concluidos: [],
    musicas_desbloqueadas: [],
    missoes_concluidas: [],
  };

  await setDoc(ref, novoPerfil);
  return { id: userId, ...novoPerfil };
}

// Sincroniza o perfil do aluno em tempo real
export function sincronizarPerfil(
  userId: string,
  callback: (perfil: UsuarioPerfil | null) => void,
  onError?: (erro: any) => void
) {
  const ref = doc(db, COLECAO, userId);

  return onSnapshot(
    ref,
    (snapshot) => {
      if (snapshot.exists()) {
        callback({ id: snapshot.id, ...(snapshot.data() as Omit<UsuarioPerfil, "id">) });
      } else {
        callback(null);
      }
    },
    (erro) => {
      console.error("Erro na sincronização do perfil:", erro);
      if (onError) onError(erro);
    }
  );
}

// Concluir um tópico e somar pontos de experiência (XP)
export async function concluirTopico(
  userId: string,
  topicoId: string,
  pontosGanhos: number = 10
): Promise<void> {
  const ref = doc(db, COLECAO, userId);
  await updateDoc(ref, {
    topicos_concluidos: arrayUnion(topicoId),
    pontuacao: increment(pontosGanhos),
  });
}

// Concluir um exercício e somar pontos
export async function concluirExercicio(
  userId: string,
  exercicioId: string,
  pontosGanhos: number = 20
): Promise<void> {
  const ref = doc(db, COLECAO, userId);
  await updateDoc(ref, {
    exercicios_concluidos: arrayUnion(exercicioId),
    pontuacao: increment(pontosGanhos),
  });
}

// Desbloquear uma música do repertório
export async function desbloquearMusica(userId: string, musicaId: string): Promise<void> {
  const ref = doc(db, COLECAO, userId);
  await updateDoc(ref, {
    musicas_desbloqueadas: arrayUnion(musicaId),
  });
}

// Concluir e resgatar recompensa de uma missão
export async function resgatarMissao(
  userId: string,
  missaoId: string,
  pontos: number
): Promise<void> {
  const ref = doc(db, COLECAO, userId);
  await updateDoc(ref, {
    missoes_concluidas: arrayUnion(missaoId),
    pontuacao: increment(pontos),
  });
}
