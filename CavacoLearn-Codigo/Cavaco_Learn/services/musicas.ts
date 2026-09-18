import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { Musica } from "./types";

const COLECAO = "musicas";

// ─── CRUD ────────────────────────────────────────────────────────────────────

export async function adicionarMusica(dados: Omit<Musica, "id">): Promise<string> {
  const ref = await addDoc(collection(db, COLECAO), dados);
  console.log("Música adicionada com ID:", ref.id);
  return ref.id;
}

export async function listarMusicas(): Promise<Musica[]> {
  const snapshot = await getDocs(collection(db, COLECAO));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Musica, "id">),
  }));
}

export async function atualizarMusica(id: string, dados: Partial<Musica>): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await updateDoc(ref, dados);
  console.log("Música atualizada:", id);
}

export async function removerMusica(id: string): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await deleteDoc(ref);
  console.log("Música removida:", id);
}

// ─── SINCRONIA EM TEMPO REAL (onSnapshot) ────────────────────────────────────
export function sincronizarMusicas(callback: (musicas: Musica[]) => void) {
  const unsubscribe = onSnapshot(
    collection(db, COLECAO),
    (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Musica, "id">),
      }));
      callback(lista);
    },
    (erro) => {
      console.error("Erro na sincronização de músicas:", erro);
    }
  );

  return unsubscribe;
}
