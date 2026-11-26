import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ArrowBigLeft } from 'lucide-react-native';
import { colors } from '../theme';

type CabecalhoProps = {
  titulo?: string;
  subtitulo?: string;
  aoVoltar?: () => void;
};

export default function Cabecalho({
  titulo = 'CavacoLearn',
  subtitulo,
  aoVoltar,
}: CabecalhoProps) {
  return (
    <View style={estilos.container}>
      {aoVoltar ? (
        <TouchableOpacity onPress={aoVoltar} style={estilos.botaoVoltar} activeOpacity={0.7}>
          <ArrowBigLeft size={20} color={colors.icons} fill={colors.icons} />
        </TouchableOpacity>
      ) : null}

      <Text style={estilos.titulo}>{titulo}</Text>
      {subtitulo ? <Text style={estilos.subtitulo}>{subtitulo}</Text> : null}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#282E23',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#3D4933',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  botaoVoltar: {
    position: 'absolute',
    left: 12,
    top: 14,
    zIndex: 10,
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontFamily: 'Calistoga',
    color: '#A8C590',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 13,
    fontFamily: 'Calistoga',
    color: '#7C926A',
    marginTop: 2,
    textAlign: 'center',
  },
});
