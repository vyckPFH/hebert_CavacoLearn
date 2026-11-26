import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from './firebase';
import { buscarUsuarioPorId, cadastrarUsuario } from './UsuarioService';
import { Usuario } from '../types';

let usuarioLogado: Usuario | null = null;

export function getUsuarioLogado(): Usuario | null {
  return usuarioLogado;
}

export function setUsuarioLogadoLocal(usuario: Usuario | null): void {
  usuarioLogado = usuario;
}

function criarUsuarioPadrao(authUser: User): Usuario {
  const email = authUser.email || '';
  const nomePadrao = authUser.displayName || (email ? email.split('@')[0] : 'Aluno');
  return {
    id: authUser.uid,
    id_usuario: authUser.uid,
    nome: nomePadrao,
    email: email,
    pontuacao: 0,
    nivel_atual: 1,
    topicos_concluidos: [],
    exercicios_concluidos: [],
    musicas_desbloqueadas: [],
    missoes_concluidas: [],
  };
}

export async function carregarUsuarioLogado(uid: string): Promise<void> {
  try {
    const dados = await buscarUsuarioPorId(uid);
    if (dados) {
      usuarioLogado = dados;
      return;
    }
  } catch (err) {
    console.warn('Aviso ao buscar perfil do Firestore:', err);
  }

  // Se o usuário está autenticado no Firebase Auth mas ainda não tem perfil no Firestore:
  if (auth.currentUser && auth.currentUser.uid === uid) {
    const usuarioPadrao = criarUsuarioPadrao(auth.currentUser);
    usuarioLogado = usuarioPadrao;
    try {
      await cadastrarUsuario(uid, { nome: usuarioPadrao.nome, email: usuarioPadrao.email });
    } catch (e) {
      console.warn('Não foi possível salvar perfil no Firestore:', e);
    }
  } else {
    usuarioLogado = null;
  }
}

export function observarSessao(aoMudar: () => void): () => void {
  return onAuthStateChanged(auth, async (usuarioAutenticado) => {
    if (usuarioAutenticado) {
      await carregarUsuarioLogado(usuarioAutenticado.uid);
    } else {
      usuarioLogado = null;
    }
    aoMudar();
  });
}

export async function deslogar(): Promise<void> {
  await signOut(auth);
  usuarioLogado = null;
}

