import { StyleSheet, Text, View } from 'react-native';
import { BlocoConteudo } from '../types';

type ContentRendererProps = {
  blocos?: BlocoConteudo[];
};

export default function ContentRenderer({ blocos = [] }: ContentRendererProps) {
  if (!blocos || blocos.length === 0) {
    return (
      <View style={estilos.vazio}>
        <Text style={estilos.textoVazio}>Nenhum conteúdo cadastrado para esta aula.</Text>
      </View>
    );
  }

  // Ordena os blocos pela propriedade 'ordem'
  const ordenados = [...blocos].sort((a, b) => a.ordem - b.ordem);

  return (
    <View style={estilos.container}>
      {ordenados.map((bloco, idx) => {
        const config = bloco.configuracao || {};

        if (bloco.tipo === 'texto' || bloco.tipo === 'enunciado') {
          return (
            <View key={idx} style={estilos.blocoTexto}>
              <Text style={estilos.texto}>{config.texto || ''}</Text>
            </View>
          );
        }

        if (bloco.tipo === 'diagrama_acorde') {
          return (
            <View key={idx} style={estilos.blocoAcorde}>
              <Text style={estilos.tituloAcorde}>Acorde: {config.acorde || 'C'}</Text>
              {config.dedos ? (
                <Text style={estilos.subAcorde}>Dedos: {config.dedos.join(' - ')}</Text>
              ) : null}
            </View>
          );
        }

        if (bloco.tipo === 'cifra') {
          return (
            <View key={idx} style={estilos.blocoCifra}>
              <Text style={estilos.textoCifra}>{config.conteudoCifra || config.texto || ''}</Text>
            </View>
          );
        }

        if (bloco.tipo === 'audio') {
          return (
            <View key={idx} style={estilos.blocoAudio}>
              <Text style={estilos.tituloAudio}>🎵 Áudio de Exemplo</Text>
              {config.texto ? <Text style={estilos.subAudio}>{config.texto}</Text> : null}
              {config.bpm ? <Text style={estilos.subAudio}>Andamento: {config.bpm} BPM</Text> : null}
            </View>
          );
        }

        return (
          <View key={idx} style={estilos.blocoTexto}>
            <Text style={estilos.texto}>{config.texto || ''}</Text>
          </View>
        );
      })}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: '100%',
  },
  vazio: {
    padding: 20,
    alignItems: 'center',
  },
  textoVazio: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 14,
    fontStyle: 'italic',
  },
  blocoTexto: {
    marginBottom: 16,
  },
  texto: {
    color: '#FFFFFF',
    fontFamily: 'Calistoga',
    fontSize: 15,
    lineHeight: 24,
  },
  blocoAcorde: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#4C583F',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    alignItems: 'center',
  },
  tituloAcorde: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 18,
  },
  subAcorde: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 13,
    marginTop: 4,
  },
  blocoCifra: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#4C583F',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  textoCifra: {
    color: '#C3D15F',
    fontSize: 14,
    fontFamily: 'monospace',
    lineHeight: 22,
  },
  blocoAudio: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#4C583F',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  tituloAudio: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 15,
  },
  subAudio: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 13,
    marginTop: 4,
  },
});
