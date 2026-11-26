import { collection, doc, getDoc, getDocs, query, where, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { db, auth } from './firebase';
import { Usuario } from '../types';

const COLECAO = 'usuarios';

// RN003: Validação de email único no sistema
export async function verificarEmailJaCadastrado(email: string): Promise<boolean> {
  const emailNormalizado = email.trim().toLowerCase();
  const q = query(collection(db, COLECAO), where('email', '==', emailNormalizado));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
}

// O id é o uid que o Firebase Auth gerou para esse usuário
export async function cadastrarUsuario(
  id: string,
  dados: { nome: string; email: string }
): Promise<Usuario> {
  const emailNormalizado = dados.email.trim().toLowerCase();
  const ref = doc(collection(db, COLECAO), id);
  const novoPerfil: Usuario = {
    id,
    id_usuario: id,
    nome: dados.nome.trim(),
    email: emailNormalizado,
    pontuacao: 0,
    nivel_atual: 1,
    topicos_concluidos: [],
    exercicios_concluidos: [],
    musicas_desbloqueadas: [],
    missoes_concluidas: [],
  };
  await setDoc(ref, novoPerfil);
  return novoPerfil;
}

export async function buscarUsuarioPorId(id: string): Promise<Usuario | undefined> {
  const ref = doc(db, COLECAO, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return undefined;
  return { id: snapshot.id, ...snapshot.data() } as Usuario;
}

export async function atualizarUsuario(id: string, dados: Partial<Usuario>): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await updateDoc(ref, dados);
}

// RN017: Exclusão da Conta - remover permanentemente o cadastro e registros do sistema
export async function excluirContaUsuario(id: string): Promise<void> {
  const ref = doc(db, COLECAO, id);
  try {
    await deleteDoc(ref);
  } catch (err) {
    console.warn('Erro ao deletar documento do Firestore:', err);
  }
  if (auth.currentUser) {
    try {
      await deleteUser(auth.currentUser);
    } catch (errAuth) {
      console.warn('Erro ao deletar usuário do Auth:', errAuth);
    }
  }
}
