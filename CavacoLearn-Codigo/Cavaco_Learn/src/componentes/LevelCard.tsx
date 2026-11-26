import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Check, Star } from 'lucide-react-native';
import { Nivel } from '../types';
import { colors } from '../theme';

type LevelCardProps = {
  nivel: Nivel;
  concluidos: number;
  total: number;
  aoAcessar: () => void;
};

export default function LevelCard({
  nivel,
  concluidos,
  total,
  aoAcessar,
}: LevelCardProps) {
  const nivelConcluido = total > 0 && concluidos >= total;

  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={aoAcessar}
      activeOpacity={0.8}
    >
      <View style={estilos.cabecalhoCartao}>
        <Text style={estilos.rotuloNivel}>NÍVEL {nivel.ordem}</Text>
        {nivelConcluido ? (
          <View style={estilos.statusBadge}>
            <Check size={14} color={colors.tagConcluido} />
            <Text style={estilos.statusConcluido}>CONCLUÍDO</Text>
          </View>
        ) : (
          <View style={estilos.statusBadge}>
            <Star size={14} color={colors.titulo} fill={colors.titulo} />
            <Text style={estilos.statusDisponivel}>DISPONÍVEL</Text>
          </View>
        )}
      </View>

      <Text style={estilos.titulo}>{nivel.titulo}</Text>

      {nivel.descricao ? (
        <Text style={estilos.descricao}>{nivel.descricao}</Text>
      ) : null}

      <View style={estilos.rodapeCartao}>
        <Text style={estilos.textoProgresso}>
          {concluidos} de {total} conteúdos
        </Text>
        <View style={estilos.capsulaBotao}>
          <Text style={estilos.textoAcao}>
            {nivelConcluido ? 'REVER' : 'COMEÇAR'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#3D4933',
    borderWidth: 1.5,
    borderColor: '#4C583F',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  cabecalhoCartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  rotuloNivel: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusConcluido: {
    color: '#869B75',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
  statusDisponivel: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
  titulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 18,
    marginBottom: 4,
  },
  descricao: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
  },
  rodapeCartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#4C583F',
    paddingTop: 10,
  },
  textoProgresso: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
  capsulaBotao: {
    backgroundColor: '#4C583F',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3D4933',
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  textoAcao: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
});
