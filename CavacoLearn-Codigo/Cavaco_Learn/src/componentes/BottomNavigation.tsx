import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

export type AbaNavegacao = 'inicio' | 'aulas' | 'missoes' | 'musicas';

type BottomNavigationProps = {
  abaAtiva: AbaNavegacao;
  aoMudarAba: (aba: AbaNavegacao) => void;
};

export default function BottomNavigation({
  abaAtiva,
  aoMudarAba,
}: BottomNavigationProps) {
  const itens: { id: AbaNavegacao; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'aulas', label: 'Aulas' },
    { id: 'missoes', label: 'Missões' },
    { id: 'musicas', label: 'Músicas' },
  ];

  return (
    <View style={estilos.barra}>
      {itens.map((item) => {
        const ativa = abaAtiva === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={[estilos.botaoAba, ativa ? estilos.botaoAbaAtivo : null]}
            onPress={() => aoMudarAba(item.id)}
            activeOpacity={0.7}
          >
            <Text style={[estilos.textoAba, ativa ? estilos.textoAbaAtivo : null]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const estilos = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282E23',
    borderTopWidth: 2,
    borderTopColor: '#3D4933',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '100%',
  },
  botaoAba: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  botaoAbaAtivo: {
    backgroundColor: '#3D4933',
    borderColor: '#A8C590',
  },
  textoAba: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
  textoAbaAtivo: {
    color: '#A8C590',
    fontSize: 13,
  },
});
