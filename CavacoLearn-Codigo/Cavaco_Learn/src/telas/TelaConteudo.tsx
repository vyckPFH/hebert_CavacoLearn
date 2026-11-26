import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Cabecalho, ContentRenderer, Button } from '../componentes';
import { getUsuarioLogado, setUsuarioLogadoLocal } from '../services/SessaoService';
import { atualizarUsuario } from '../services/UsuarioService';
import { Topico, Exercicio, Usuario } from '../types';
import { mostrarAlerta } from '../utils/alerta';

type TelaConteudoProps = {
  item: Topico | Exercicio;
  tipo: 'topico' | 'exercicio';
  aoVoltar: () => void;
  aoConcluirComSucesso: () => void;
};

export default function TelaConteudo({
  item,
  tipo,
  aoVoltar,
  aoConcluirComSucesso,
}: TelaConteudoProps) {
  const usuario = getUsuarioLogado() as Usuario | null;
  const [salvando, setSalvando] = useState(false);

  const itemId = item.id || '';
  const jaConcluido = tipo === 'topico'
    ? Boolean(usuario?.topicos_concluidos?.includes(itemId))
    : Boolean(usuario?.exercicios_concluidos?.includes(itemId));

  async function handleConcluir() {
    if (!usuario || !usuario.id) {
      mostrarAlerta('Atenção', 'Você precisa estar logado.');
      return;
    }

    if (jaConcluido) {
      aoConcluirComSucesso();
      return;
    }

    setSalvando(true);
    try {
      const novosDados: Partial<Usuario> = {};

      if (tipo === 'topico') {
        const atualizados = [...(usuario.topicos_concluidos || []), itemId];
        novosDados.topicos_concluidos = atualizados;
        usuario.topicos_concluidos = atualizados;
      } else {
        // RN008 e RN009: Registrar conclusão do exercício individualmente
        // RN010: A pontuação somente é incrementada após o resgate da missão concluída
        const atualizados = [...(usuario.exercicios_concluidos || []), itemId];
        novosDados.exercicios_concluidos = atualizados;
        usuario.exercicios_concluidos = atualizados;
      }

      await atualizarUsuario(usuario.id, novosDados);
      setUsuarioLogadoLocal(usuario);

      mostrarAlerta('Parabéns!', `Você concluiu: ${item.titulo}! Confira as Missões para resgatar sua recompensa.`);
      aoConcluirComSucesso();
    } catch (erro) {
      mostrarAlerta('Erro', 'Não foi possível salvar seu progresso.');
    } finally {
      setSalvando(false);
    }
  }

  const blocos = (item.blocos && item.blocos.length > 0)
    ? item.blocos
    : (item as any).conteudo
      ? [{ ordem: 1, tipo: 'texto' as const, configuracao: { texto: (item as any).conteudo } }]
      : [];

  return (
    <View style={estilos.tela}>
      <Cabecalho
        titulo={item.titulo.toUpperCase()}
        subtitulo={tipo === 'topico' ? 'AULA DIDÁTICA' : 'EXERCÍCIO PRÁTICO'}
        aoVoltar={aoVoltar}
      />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        {tipo === 'exercicio' ? (
          <View style={estilos.bannerExercicio}>
            <Text style={estilos.textoRecompensa}>
              ⭐ RECOMPENSA: +{(item as Exercicio).pontosRecompensa || 10} PONTOS
            </Text>
          </View>
        ) : null}

        {/* Renderizador de blocos de texto/áudio */}
        <View style={estilos.cartaoConteudo}>
          <ContentRenderer blocos={blocos} />
        </View>

        {/* Botão de ação */}
        <View style={estilos.areaAcao}>
          {jaConcluido ? (
            <View style={estilos.avisoConcluido}>
              <Text style={estilos.textoConcluido}>✓ CONTEÚDO CONCLUÍDO EM SUA CONTA!</Text>
              <Button texto="VOLTAR AO NÍVEL" aoClicar={aoVoltar} tipo="secundario" />
            </View>
          ) : (
            <Button
              texto={salvando ? 'REGISTRANDO...' : 'CONCLUIR CONTEÚDO'}
              aoClicar={handleConcluir}
              desabilitado={salvando}
            />
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
    paddingBottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  bannerExercicio: {
    backgroundColor: '#3D4933',
    borderWidth: 2,
    borderColor: '#3D4933',
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  textoRecompensa: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 16,
  },
  cartaoConteudo: {
    backgroundColor: '#3D4933',
    borderWidth: 2,
    borderColor: '#3D4933',
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  areaAcao: {
    marginTop: 10,
    width: '100%',
  },
  avisoConcluido: {
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  textoConcluido: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
});
