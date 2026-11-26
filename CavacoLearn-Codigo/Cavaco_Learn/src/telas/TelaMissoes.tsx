import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Cabecalho, MissionCard } from '../componentes';
import { getUsuarioLogado, setUsuarioLogadoLocal } from '../services/SessaoService';
import { atualizarUsuario } from '../services/UsuarioService';
import { Missao, Usuario } from '../types';
import { mostrarAlerta } from '../utils/alerta';

type TelaMissoesProps = {
  aoVoltar: () => void;
  aoNavegarAba?: (aba: string) => void;
};

export default function TelaMissoes({
  aoVoltar,
}: TelaMissoesProps) {
  const usuario = getUsuarioLogado() as Usuario | null;
  const [carregandoId, setCarregandoId] = useState<string | null>(null);
  const nomeExibicao = usuario?.nome || 'Nick';

  const missoes: (Missao & { meta: number })[] = [
    {
      id: 'm1',
      titulo: 'Primeiros Acordes',
      descricao: 'Conclua suas primeiras 2 aulas teóricas de cavaco.',
      pontosRecompensa: 25,
      tipo: 'concluir_topico',
      meta: 2,
    },
    {
      id: 'm2',
      titulo: 'Dedicação Prática',
      descricao: 'Realize 2 exercícios avaliativos práticos.',
      pontosRecompensa: 30,
      tipo: 'concluir_exercicio',
      meta: 2,
    },
  ];

  async function resgatar(m: Missao) {
    if (!usuario || !usuario.id || !m.id) return;
    if (usuario.missoes_concluidas?.includes(m.id)) {
      mostrarAlerta('Atenção', 'Você já resgatou esta missão.');
      return;
    }

    setCarregandoId(m.id);
    try {
      const novasMissoes = [...(usuario.missoes_concluidas || []), m.id];
      const novaPontuacao = (usuario.pontuacao || 0) + m.pontosRecompensa;

      await atualizarUsuario(usuario.id, {
        missoes_concluidas: novasMissoes,
        pontuacao: novaPontuacao,
      });

      usuario.missoes_concluidas = novasMissoes;
      usuario.pontuacao = novaPontuacao;
      setUsuarioLogadoLocal(usuario);

      mostrarAlerta('Parabéns!', `Você resgatou +${m.pontosRecompensa} pontos!`);
    } catch (erro) {
      mostrarAlerta('Erro', 'Não foi possível resgatar seus pontos.');
    } finally {
      setCarregandoId(null);
    }
  }

  return (
    <View style={estilos.tela}>
      <Cabecalho
        subtitulo={`Olá, ${nomeExibicao} !`}
        aoVoltar={aoVoltar}
      />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        {/* Painel Flutuante de Missões (#3D4933) */}
        <View style={estilos.painelMissoes}>
          <Text style={estilos.tituloSecao}>Missões</Text>

          {missoes.map((m) => {
            let progresso = 0;
            if (m.tipo === 'concluir_topico') {
              progresso = usuario?.topicos_concluidos?.length || 0;
            } else if (m.tipo === 'concluir_exercicio') {
              progresso = usuario?.exercicios_concluidos?.length || 0;
            }

            const pronta = progresso >= m.meta;
            const resgatada = Boolean(usuario?.missoes_concluidas?.includes(m.id || ''));

            return (
              <MissionCard
                key={m.id}
                missao={m}
                progressoAtual={progresso}
                totalNecessario={m.meta}
                concluida={pronta}
                resgatada={resgatada}
                aoResgatar={() => resgatar(m)}
                carregandoResgate={carregandoId === m.id}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
  },
  conteudo: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 30,
    width: '100%',
  },
  painelMissoes: {
    backgroundColor: '#3D4933',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#3D4933',
    padding: 20,
    width: '100%',
    minHeight: 340,
  },
  tituloSecao: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 18,
    marginBottom: 14,
  },
});
