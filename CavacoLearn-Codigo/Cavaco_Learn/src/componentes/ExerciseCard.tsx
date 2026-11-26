import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Exercicio } from '../types';

type ExerciseCardProps = {
  exercicio: Exercicio;
  concluido: boolean;
  aoAcessar: () => void;
};

export default function ExerciseCard({
  exercicio,
  concluido,
  aoAcessar,
}: ExerciseCardProps) {
  const ordem = exercicio.ordem || 1;

  return (
    <TouchableOpacity
      style={estilos.linha}
      onPress={aoAcessar}
      activeOpacity={0.7}
    >
      <View style={estilos.info}>
        <Text style={[estilos.titulo, concluido ? estilos.tituloConcluido : null]}>
          Exercício {ordem}: {exercicio.titulo}
        </Text>
      </View>

      <View style={estilos.capsulaPontos}>
        <Text style={estilos.textoPontos}>+{exercicio.pontosRecompensa || 10}p</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(76, 88, 63, 0.3)',
  },
  info: {
    flex: 1,
  },
  titulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 15,
  },
  tituloConcluido: {
    color: '#869B75',
  },
  capsulaPontos: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 8,
  },
  textoPontos: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
});
