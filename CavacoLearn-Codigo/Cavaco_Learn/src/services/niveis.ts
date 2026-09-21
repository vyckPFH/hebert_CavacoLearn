import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { Nivel } from "../types";

const COLECAO = "niveis";

// ─── CRUD (Buscar 1 vez com getDocs) ─────────────────────────────────────────

export async function adicionarNivel(dados: Omit<Nivel, "id">): Promise<string> {
  const ref = await addDoc(collection(db, COLECAO), dados);
  console.log("Nível adicionado com ID:", ref.id);
  return ref.id;
}

export async function definirNivel(id: string, dados: Omit<Nivel, "id">): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await setDoc(ref, dados);
  console.log("Nível definido com ID fixo:", id);
}

export async function listarNiveis(): Promise<Nivel[]> {
  const q = query(collection(db, COLECAO), orderBy("ordem", "asc"));
  const snapshot = await getDocs(q);
  const niveis = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Nivel, "id">),
  }));
  return niveis;
}

export async function buscarNivel(id: string): Promise<Nivel | null> {
  const ref = doc(db, COLECAO, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    console.log("Nível não encontrado:", id);
    return null;
  }
  return { id: snapshot.id, ...(snapshot.data() as Omit<Nivel, "id">) };
}

export async function atualizarNivel(id: string, dados: Partial<Nivel>): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await updateDoc(ref, dados);
  console.log("Nível atualizado:", id);
}

export async function removerNivel(id: string): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await deleteDoc(ref);
  console.log("Nível removido:", id);
}

// ─── SINCRONIA EM TEMPO REAL (onSnapshot) ────────────────────────────────────
// Esta função "ouve" o banco. Sempre que algo mudar no Firestore, ela avisa o React!
export function sincronizarNiveis(
  callback: (niveis: Nivel[]) => void,
  onError?: (erro: any) => void
) {
  const q = query(collection(db, COLECAO), orderBy("ordem", "asc"));
  
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Nivel, "id">),
      }));
      callback(lista);
    },
    (erro) => {
      console.error("Erro na sincronização de níveis:", erro);
      if (onError) onError(erro);
    }
  );

  return unsubscribe; // Permite cancelar a escuta quando sair da tela
}
