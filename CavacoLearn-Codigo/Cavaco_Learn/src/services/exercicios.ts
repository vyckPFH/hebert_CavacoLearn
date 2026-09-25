import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { Exercicio } from "../types";

const COLECAO = "exercicios";

// ─── CRUD DE EXERCÍCIOS ──────────────────────────────────────────────────────

export async function adicionarExercicio(dados: Omit<Exercicio, "id">): Promise<string> {
  const ref = await addDoc(collection(db, COLECAO), dados);
  console.log("Exercício adicionado com ID:", ref.id);
  return ref.id;
}

export async function listarExerciciosPorNivel(nivelId: string): Promise<Exercicio[]> {
  const q = query(collection(db, COLECAO), where("nivelId", "==", nivelId));
  const snapshot = await getDocs(q);
  const lista = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Exercicio, "id">),
  }));
  lista.sort((a, b) => a.ordem - b.ordem);
  return lista;
}

export async function buscarExercicio(id: string): Promise<Exercicio | null> {
  const ref = doc(db, COLECAO, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...(snapshot.data() as Omit<Exercicio, "id">) };
}

export async function atualizarExercicio(id: string, dados: Partial<Exercicio>): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await updateDoc(ref, dados);
  console.log("Exercício atualizado:", id);
}

export async function removerExercicio(id: string): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await deleteDoc(ref);
  console.log("Exercício removido:", id);
}

// ─── SINCRONIA EM TEMPO REAL (onSnapshot) ────────────────────────────────────
export function sincronizarExerciciosPorNivel(
  nivelId: string,
  callback: (exercicios: Exercicio[]) => void,
  onError?: (erro: any) => void
) {
  const q = query(collection(db, COLECAO), where("nivelId", "==", nivelId));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Exercicio, "id">),
      }));
      lista.sort((a, b) => a.ordem - b.ordem);
      callback(lista);
    },
    (erro) => {
      console.error("Erro na sincronização de exercícios:", erro);
      if (onError) onError(erro);
    }
  );

  return unsubscribe;
}
