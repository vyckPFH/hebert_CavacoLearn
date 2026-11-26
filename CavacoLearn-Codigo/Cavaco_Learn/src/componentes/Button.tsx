import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

type ButtonProps = {
  texto: string;
  aoClicar: () => void;
  tipo?: 'principal' | 'secundario' | 'perigo';
  desabilitado?: boolean;
};

export default function Button({
  texto,
  aoClicar,
  tipo = 'principal',
  desabilitado = false,
}: ButtonProps) {
  let estiloBotao = estilos.botaoPrincipal;
  let estiloTexto = estilos.textoPrincipal;

  if (tipo === 'secundario') {
    estiloBotao = estilos.botaoSecundario;
    estiloTexto = estilos.textoSecundario;
  } else if (tipo === 'perigo') {
    estiloBotao = estilos.botaoPerigo;
    estiloTexto = estilos.textoPerigo;
  }

  return (
    <TouchableOpacity
      style={[estiloBotao, desabilitado && estilos.desabilitado]}
      onPress={aoClicar}
      disabled={desabilitado}
      activeOpacity={0.7}
    >
      <Text style={estiloTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botaoPrincipal: {
    backgroundColor: '#4C583F',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  textoPrincipal: {
    color: '#A8C590',
    fontSize: 16,
    fontFamily: 'Calistoga',
  },
  botaoSecundario: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  textoSecundario: {
    color: '#A8C590',
    fontSize: 16,
    fontFamily: 'Calistoga',
  },
  botaoPerigo: {
    backgroundColor: '#531112',
    borderWidth: 1.5,
    borderColor: '#811F20',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  textoPerigo: {
    color: '#C93032',
    fontSize: 16,
    fontFamily: 'Calistoga',
  },
  desabilitado: {
    opacity: 0.5,
  },
});
