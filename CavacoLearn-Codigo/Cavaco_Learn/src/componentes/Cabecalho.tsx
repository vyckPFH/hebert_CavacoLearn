import { StyleSheet, Text, View } from 'react-native';

type CabecalhoProps = {
  titulo: string;
  subtitulo?: string;
};

export default function Cabecalho({ titulo, subtitulo }: CabecalhoProps) {
  return (
    <View style={...}>
      <Text style={...}>{titulo}</Text>
      {subtitulo && <Text style={}>{subtitulo}</Text>}
    </View>
  );
}

