import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Cabecalho, TopicCard, ExerciseCard } from '../componentes';
import { listarTopicosPorNivel } from '../services/topicos';
import { listarExerciciosPorNivel } from '../services/exercicios';
import { getUsuarioLogado } from '../services/SessaoService';
import { Nivel, Topico, Exercicio, Usuario } from '../types';

type TelaNivelProps = {
  nivel: Nivel;
  aoVoltar: () => void;
  aoSelecionarTopico: (topico: Topico) => void;
  aoSelecionarExercicio: (exercicio: Exercicio) => void;
  aoNavegarAba?: (aba: string) => void;
};

export default function TelaNivel({
  nivel,
  aoVoltar,
  aoSelecionarTopico,
  aoSelecionarExercicio,
}: TelaNivelProps) {
  const usuario = getUsuarioLogado() as Usuario | null;
  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!nivel.id) return;
    async function carregar() {
      setCarregando(true);
      try {
        const [listaTopicos, listaExercicios] = await Promise.all([
          listarTopicosPorNivel(nivel.id!),
          listarExerciciosPorNivel(nivel.id!),
        ]);
        setTopicos(listaTopicos);
        setExercicios(listaExercicios);
      } catch (erro) {
        console.error('Erro ao carregar conteúdos:', erro);
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [nivel.id]);

  const nomeExibicao = usuario?.nome || 'Nick';

  return (
    <View style={estilos.tela}>
      <Cabecalho
        subtitulo={`Olá, ${nomeExibicao} !`}
        aoVoltar={aoVoltar}
      />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        {/* Painel de Aulas conforme imagem (Cards #3D4933) */}
        <View style={estilos.painelAulas}>
          <Text style={estilos.tituloNivel}>
            Nível {nivel.ordem}
          </Text>

          {carregando ? (
            <Text style={estilos.textoVazio}>Carregando tópicos...</Text>
          ) : (
            <>
              {topicos.length === 0 ? (
                <Text style={estilos.textoVazio}>Nenhum tópico cadastrado.</Text>
              ) : (
                topicos.map((topico) => {
                  const feito = Boolean(topico.id && usuario?.topicos_concluidos?.includes(topico.id));
                  return (
                    <TopicCard
                      key={topico.id}
                      topico={topico}
                      concluido={feito}
                      aoAcessar={() => aoSelecionarTopico(topico)}
                    />
                  );
                })
              )}

              {exercicios.length > 0 ? (
                <View style={estilos.secaoExercicios}>
                  <Text style={estilos.subtituloExercicios}>Exercícios</Text>
                  {exercicios.map((exercicio) => {
                    const feito = Boolean(exercicio.id && usuario?.exercicios_concluidos?.includes(exercicio.id));
                    return (
                      <ExerciseCard
                        key={exercicio.id}
                        exercicio={exercicio}
                        concluido={feito}
                        aoAcessar={() => aoSelecionarExercicio(exercicio)}
                      />
                    );
                  })}
                </View>
              ) : null}
            </>
          )}
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
  painelAulas: {
    backgroundColor: '#3D4933',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#3D4933',
    padding: 20,
    width: '100%',
    minHeight: 340,
  },
  tituloNivel: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 18,
    marginBottom: 12,
  },
  textoVazio: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 14,
    fontStyle: 'italic',
    paddingVertical: 12,
  },
  secaoExercicios: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(76, 88, 63, 0.4)',
    paddingTop: 12,
  },
  subtituloExercicios: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 16,
    marginBottom: 8,
  },
});
