import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { observarSessao, getUsuarioLogado } from './services/SessaoService';
import { listarNiveis } from './services/niveis';
import {
  TelaLogin,
  TelaCadastro,
  TelaInicio,
  TelaNivel,
  TelaConteudo,
  TelaMissoes,
  TelaMusicas,
  TelaPerfil,
} from './telas';
import { Nivel, Topico, Exercicio, Musica } from './types';

// Representa uma tela empilhada com seus dados
type TelaNaPilha = {
  nome: 'login' | 'cadastro' | 'inicio' | 'nivel' | 'conteudo' | 'missoes' | 'musicas' | 'perfil';
  params?: {
    nivel?: Nivel;
    item?: Topico | Exercicio;
    tipo?: 'topico' | 'exercicio';
    musica?: Musica;
  };
};

export default function App() {
  const [carregandoSessao, setCarregandoSessao] = useState(true);
  const [pilha, setPilha] = useState<TelaNaPilha[]>([{ nome: 'login' }]);

  // 1. Observador de sessão do Firebase Auth (padrão do _layout.tsx)
  useEffect(() => {
    const cancelarObservador = observarSessao(() => {
      const usuario = getUsuarioLogado();
      setCarregandoSessao(false);

      if (usuario) {
        // Se já está autenticado, vai para a tela de Início
        setPilha((atual) => {
          const topo = atual[atual.length - 1];
          if (topo.nome === 'login' || topo.nome === 'cadastro') {
            return [{ nome: 'inicio' }];
          }
          return atual;
        });
      } else {
        // Se deslogou, volta para o Login
        setPilha([{ nome: 'login' }]);
      }
    });

    return cancelarObservador;
  }, []);

  // 2. Funções simples para navegar na pilha de telas
  function empilharTela(nome: TelaNaPilha['nome'], params?: TelaNaPilha['params']) {
    setPilha((atual) => [...atual, { nome, params }]);
  }

  function voltarTela() {
    setPilha((atual) => {
      if (atual.length > 1) {
        return atual.slice(0, -1);
      }
      return atual;
    });
  }

  function irParaRaiz(nome: TelaNaPilha['nome']) {
    setPilha([{ nome }]);
  }

  async function abrirAulas() {
    try {
      const niveis = await listarNiveis();
      if (niveis.length > 0) {
        empilharTela('nivel', { nivel: niveis[0] });
      } else {
        empilharTela('nivel', {
          nivel: {
            id: 'nivel_1',
            titulo: 'Nível 1 - Introdução',
            ordem: 1,
            descricao: 'Primeiros passos no cavaquinho',
          },
        });
      }
    } catch {
      empilharTela('nivel', {
        nivel: {
          id: 'nivel_1',
          titulo: 'Nível 1 - Introdução',
          ordem: 1,
          descricao: 'Primeiros passos no cavaquinho',
        },
      });
    }
  }

  // function navegarParaAba(aba: string) {
  //   if (aba === 'inicio') {
  //     irParaRaiz('inicio');
  //   } else if (aba === 'aulas') {
  //     abrirAulas();
  //   } else if (aba === 'musicas') {
  //     empilharTela('musicas');
  //   } else if (aba === 'missoes') {
  //     empilharTela('missoes');
  //   } else if (aba === 'perfil') {
  //     empilharTela('perfil');
  //   }
  // }

  // 3. Enquanto o Firebase verifica se há usuário logado
  if (carregandoSessao) {
    return (
      <View style={estilos.telaCarregando}>
        <ActivityIndicator size="large" color="#A8C590" />
        <Text style={estilos.textoCarregando}>Carregando CavacoLearn...</Text>
      </View>
    );
  }

  // 4. Tela que está atualmente no topo da pilha
  const telaAtual = pilha[pilha.length - 1] || { nome: 'login' };

  switch (telaAtual.nome) {
    case 'login':
      return (
        <TelaLogin
          aoNavegarParaCadastro={() => empilharTela('cadastro')}
          aoSucessoLogin={() => irParaRaiz('inicio')}
        />
      );

    case 'cadastro':
      return (
        <TelaCadastro
          aoNavegarParaLogin={() => voltarTela()}
          aoSucessoCadastro={() => irParaRaiz('inicio')}
        />
      );

    case 'inicio':
      return (
        <TelaInicio
          aoAbrirAulas={abrirAulas}
          aoAbrirMusicas={() => empilharTela('musicas')}
          aoAbrirMissoes={() => empilharTela('missoes')}
          aoAbrirPerfil={() => empilharTela('perfil')}
        />
      );

    case 'nivel':
      if (!telaAtual.params?.nivel) {
        return (
          <TelaInicio
            aoAbrirAulas={abrirAulas}
            aoAbrirMusicas={() => empilharTela('musicas')}
            aoAbrirMissoes={() => empilharTela('missoes')}
            aoAbrirPerfil={() => empilharTela('perfil')}
          />
        );
      }
      return (
        <TelaNivel
          nivel={telaAtual.params.nivel}
          aoVoltar={() => voltarTela()}
          aoSelecionarTopico={(topico) => empilharTela('conteudo', { item: topico, tipo: 'topico' })}
          aoSelecionarExercicio={(exercicio) => empilharTela('conteudo', { item: exercicio, tipo: 'exercicio' })}
        />
      );

    case 'conteudo':
      if (!telaAtual.params?.item || !telaAtual.params?.tipo) {
        return (
          <TelaInicio
            aoAbrirAulas={abrirAulas}
            aoAbrirMusicas={() => empilharTela('musicas')}
            aoAbrirMissoes={() => empilharTela('missoes')}
            aoAbrirPerfil={() => empilharTela('perfil')}
          />
        );
      }
      return (
        <TelaConteudo
          item={telaAtual.params.item}
          tipo={telaAtual.params.tipo}
          aoVoltar={() => voltarTela()}
          aoConcluirComSucesso={() => voltarTela()}
        />
      );

    case 'missoes':
      return (
        <TelaMissoes
          aoVoltar={() => voltarTela()}
        />
      );

    case 'musicas':
      return (
        <TelaMusicas
          aoVoltar={() => voltarTela()}
          aoSelecionarMusica={(musica) => {
            empilharTela('conteudo', {
              item: {
                id: musica.id,
                nivelId: '',
                titulo: `${musica.titulo} (${musica.artista})`,
                ordem: 1,
                blocos: musica.blocos || (musica.cifra ? [{ ordem: 1, tipo: 'cifra', configuracao: { conteudoCifra: musica.cifra } }] : []),
              } as Topico,
              tipo: 'topico',
            });
          }}
        />
      );

    case 'perfil':
      return (
        <TelaPerfil
          aoVoltar={() => voltarTela()}
          aoDeslogar={() => irParaRaiz('login')}
        />
      );

      
    default:
      return (
        <TelaLogin
          aoNavegarParaCadastro={() => empilharTela('cadastro')}
          aoSucessoLogin={() => irParaRaiz('inicio')}
        />
      );
  }
}

const estilos = StyleSheet.create({
  telaCarregando: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh' as any,
  },
  textoCarregando: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 20,
    marginTop: 16,
  },
});
