import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { Topico } from "../types";

const COLECAO = "topicos";

// ─── CRUD ────────────────────────────────────────────────────────────────────

export async function adicionarTopico(dados: Omit<Topico, "id">): Promise<string> {
  const ref = await addDoc(collection(db, COLECAO), dados);
  console.log("Tópico adicionado com ID:", ref.id);
  return ref.id;
}

export async function listarTopicosPorNivel(nivelId: string): Promise<Topico[]> {
  const q = query(collection(db, COLECAO), where("nivelId", "==", nivelId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Topico, "id">),
  }));
}

export async function atualizarTopico(id: string, dados: Partial<Topico>): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await updateDoc(ref, dados);
  console.log("Tópico atualizado:", id);
}

export async function removerTopico(id: string): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await deleteDoc(ref);
  console.log("Tópico removido:", id);
}

// ─── SINCRONIA EM TEMPO REAL (onSnapshot) ────────────────────────────────────
export function sincronizarTopicosPorNivel(
  nivelId: string,
  callback: (topicos: Topico[]) => void,
  onError?: (erro: any) => void
) {
  const q = query(collection(db, COLECAO), where("nivelId", "==", nivelId));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Topico, "id">),
      }));
      // Ordena no cliente por ordem
      lista.sort((a, b) => a.ordem - b.ordem);
      callback(lista);
    },
    (erro) => {
      console.error("Erro na sincronização de tópicos:", erro);
      if (onError) onError(erro);
    }
  );

  return unsubscribe;
}
