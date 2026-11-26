import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Star, Check } from 'lucide-react-native';
import { Missao } from '../types';

type MissionCardProps = {
  missao: Missao;
  progressoAtual: number;
  totalNecessario: number;
  concluida: boolean;
  resgatada: boolean;
  aoResgatar: () => void;
  carregandoResgate?: boolean;
};

export default function MissionCard({
  missao,
  progressoAtual,
  totalNecessario,
  concluida,
  resgatada,
  aoResgatar,
  carregandoResgate = false,
}: MissionCardProps) {
  return (
    <View style={estilos.linha}>
      <View style={estilos.info}>
        <View style={estilos.cabecalhoItem}>
          {resgatada ? (
            <Check size={16} color="#869B75" />
          ) : (
            <Star size={16} color="#A8C590" />
          )}
          <Text style={[estilos.titulo, resgatada ? estilos.tituloTachado : null]}>
            {missao.titulo}
          </Text>
        </View>
        <Text style={[estilos.descricao, resgatada ? estilos.descricaoTachada : null]}>
          {missao.descricao}
        </Text>
      </View>

      {concluida && !resgatada ? (
        <TouchableOpacity
          style={estilos.botaoResgatar}
          onPress={aoResgatar}
          disabled={carregandoResgate}
          activeOpacity={0.7}
        >
          <Text style={estilos.textoBotaoResgatar}>
            {carregandoResgate ? '...' : `+${missao.pontosRecompensa}p`}
          </Text>
        </TouchableOpacity>
      ) : resgatada ? (
        <View style={estilos.capsulaConcluido}>
          <Text style={estilos.textoConcluido}>Concluído</Text>
        </View>
      ) : (
        <View style={estilos.capsulaPontos}>
          <Text style={estilos.textoPontos}>+{missao.pontosRecompensa}p</Text>
        </View>
      )}
    </View>
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
    paddingRight: 10,
  },
  cabecalhoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  titulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 15,
  },
  tituloTachado: {
    color: '#869B75',
    textDecorationLine: 'line-through',
  },
  descricao: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 12,
    marginTop: 2,
  },
  descricaoTachada: {
    color: '#869B75',
    textDecorationLine: 'line-through',
  },
  botaoResgatar: {
    backgroundColor: '#4C583F',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoResgatar: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
  capsulaPontos: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPontos: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
  capsulaConcluido: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  textoConcluido: {
    color: '#869B75',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
});
