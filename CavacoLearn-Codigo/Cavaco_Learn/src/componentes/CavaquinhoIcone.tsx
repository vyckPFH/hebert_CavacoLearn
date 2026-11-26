import { View, Image, StyleSheet } from 'react-native';

export default function CavaquinhoIcone({ tamanho = 96 }: { tamanho?: number }) {
  const tamanhoImagem = Math.round(tamanho * 2);

  return (
    <View style={[estilos.container, { width: tamanho, height: tamanho, borderRadius: tamanho / 2 }]}>
      <Image
        source={{ uri: '/assets/cavaquinho.png' }}
        style={{ width: tamanhoImagem, height: tamanhoImagem }}
        resizeMode="contain"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#4C583F',
    borderWidth: 2,
    borderColor: '#3D4933',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },
});
