import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Musica } from '../types';

type MusicCardProps = {
  musica: Musica;
  desbloqueada: boolean;
  pontosUsuario: number;
  aoAcessar: () => void;
};

export default function MusicCard({
  musica,
  desbloqueada,
  pontosUsuario,
  aoAcessar,
}: MusicCardProps) {
  return (
    <TouchableOpacity
      style={estilos.linha}
      onPress={desbloqueada ? aoAcessar : undefined}
      activeOpacity={desbloqueada ? 0.7 : 1}
    >
      <View style={estilos.info}>
        <Text style={estilos.titulo}>{musica.titulo}</Text>
        <Text style={estilos.artista}>• {musica.artista}</Text>
      </View>

      {desbloqueada ? (
        <View style={estilos.capsulaLiberada}>
          <Text style={estilos.textoLiberada}>Tocar</Text>
        </View>
      ) : (
        <View style={estilos.capsulaPontos}>
          <Text style={estilos.textoPontos}>{musica.pontuacaoDesbloqueio || 0}p</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(76, 88, 63, 0.4)',
  },
  info: {
    flex: 1,
  },
  titulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 16,
    marginBottom: 2,
  },
  artista: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
  capsulaPontos: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPontos: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
  capsulaLiberada: {
    backgroundColor: '#4C583F',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoLiberada: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
});
