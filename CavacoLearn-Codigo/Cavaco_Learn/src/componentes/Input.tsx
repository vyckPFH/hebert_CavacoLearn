import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputProps = {
  rotulo: string;
  valor: string;
  aoMudar: (texto: string) => void;
  placeholder?: string;
  seguro?: boolean;
  tecladoEmail?: boolean;
  erro?: string;
};

export default function Input({
  rotulo,
  valor,
  aoMudar,
  placeholder,
  seguro = false,
  tecladoEmail = false,
  erro,
}: InputProps) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.rotulo}>{rotulo}:</Text>
      <TextInput
        style={[estilos.entrada, erro ? estilos.entradaComErro : null]}
        value={valor}
        onChangeText={aoMudar}
        placeholder={placeholder}
        placeholderTextColor="#7C926A"
        secureTextEntry={seguro}
        keyboardType={tecladoEmail ? 'email-address' : 'default'}
        autoCapitalize="none"
      />
      {erro ? <Text style={estilos.textoErro}>{erro}</Text> : null}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginBottom: 12,
    width: '100%',
  },
  rotulo: {
    fontSize: 14,
    fontFamily: 'Calistoga',
    color: '#A8C590',
    marginBottom: 4,
  },
  entrada: {
    backgroundColor: '#43483E',
    borderWidth: 1.5,
    borderColor: '#596A4C',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Calistoga',
    color: '#FFFFFF',
  },
  entradaComErro: {
    borderColor: '#811F20',
  },
  textoErro: {
    fontSize: 12,
    fontFamily: 'Calistoga',
    color: '#C93032',
    marginTop: 4,
  },
});
