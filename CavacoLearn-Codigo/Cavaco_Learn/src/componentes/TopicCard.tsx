import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Topico } from '../types';

type TopicCardProps = {
  topico: Topico;
  concluido: boolean;
  aoAcessar: () => void;
};

export default function TopicCard({
  topico,
  concluido,
  aoAcessar,
}: TopicCardProps) {
  const ordem = topico.ordem || 1;

  return (
    <TouchableOpacity
      style={estilos.linha}
      onPress={aoAcessar}
      activeOpacity={0.7}
    >
      <Text style={[estilos.titulo, concluido ? estilos.tituloConcluido : null]}>
        Tópico {ordem}: {topico.titulo}
      </Text>
      {concluido ? (
        <Text style={estilos.marcadorConcluido}>✓</Text>
      ) : null}
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
  titulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 15,
    flex: 1,
  },
  tituloConcluido: {
    color: '#869B75',
  },
  marcadorConcluido: {
    color: '#869B75',
    fontFamily: 'Calistoga',
    fontSize: 14,
    marginLeft: 8,
  },
});
