import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Cabecalho, CavaquinhoIcone } from '../componentes';
import { getUsuarioLogado } from '../services/SessaoService';
import { Usuario } from '../types';

type TelaInicioProps = {
  aoAbrirAulas: () => void;
  aoAbrirMusicas: () => void;
  aoAbrirMissoes: () => void;
  aoAbrirPerfil: () => void;
};

export default function TelaInicio({
  aoAbrirAulas,
  aoAbrirMusicas,
  aoAbrirMissoes,
  aoAbrirPerfil,
}: TelaInicioProps) {
  const usuario = getUsuarioLogado() as Usuario | null;
  const nomeExibicao = usuario?.nome || 'Nick';
  const pontuacao = usuario?.pontuacao || 0;

  return (
    <View style={estilos.tela}>
      {/* Cabeçalho superior: CavacoLearn / Olá, {nome} ! */}
      <Cabecalho subtitulo={`Olá, ${nomeExibicao} !`} />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        {/* Painel Central Flutuante (Cards #3D4933) */}
        <View style={estilos.painelCentral}>
          {/* Ícone da logotipo no centro superior */}
          <View style={estilos.areaLogo}>
            <CavaquinhoIcone tamanho={96} />
          </View>

          {/* Grade 2x2 de botões: Aulas, Perfil, Músicas, Missões */}
          <View style={estilos.gradeBotoes}>
            <TouchableOpacity
              style={estilos.botaoHub}
              onPress={aoAbrirAulas}
              activeOpacity={0.7}
            >
              <Text style={estilos.textoBotao}>Aulas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoHub}
              onPress={aoAbrirPerfil}
              activeOpacity={0.7}
            >
              <Text style={estilos.textoBotao}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoHub}
              onPress={aoAbrirMusicas}
              activeOpacity={0.7}
            >
              <Text style={estilos.textoBotao}>Músicas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoHub}
              onPress={aoAbrirMissoes}
              activeOpacity={0.7}
            >
              <Text style={estilos.textoBotao}>Missões</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Inferior: Pontuação Atual */}
        <View style={estilos.cardPontuacao}>
          <Text style={estilos.rotuloPontuacao}>Pontuação Atual:</Text>
          <Text style={estilos.valorPontuacao}>{pontuacao}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
  },

  conteudo: {
    width: '100%',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,

    gap: 20,
  },

  /* ================================
     PAINEL CENTRAL
     ================================ */

  painelCentral: {
    width: '82%',

    backgroundColor: '#282E23',

    borderWidth: 2,
    borderColor: '#3D4933',

    borderRadius: 16,

    paddingTop: 14,
    paddingBottom: 16,
    paddingHorizontal: 10,

    alignItems: 'center',
  },

  /* ================================
     LOGO
     ================================ */

  areaLogo: {
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 18,
  },

  /* ================================
     GRADE DOS BOTÕES
     ================================ */

  gradeBotoes: {
    width: '100%',

    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    rowGap: 12,
  },

  /* ================================
     BOTÕES
     ================================ */

  botaoHub: {
    width: '48%',
    height: 44,

    backgroundColor: '#282E23',

    borderWidth: 2,
    borderColor: '#3D4933',

    borderRadius: 999,

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 4,
  },

  textoBotao: {
    color: '#A8C590',

    fontFamily: 'Calistoga',
    fontSize: 17,

    textAlign: 'center',
  },

  /* ================================
     CARD DE PONTUAÇÃO
     ================================ */

  cardPontuacao: {
    width: '82%',

    backgroundColor: '#282E23',

    borderWidth: 2,
    borderColor: '#3D4933',

    borderRadius: 16,

    paddingVertical: 18,
    paddingHorizontal: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },

  rotuloPontuacao: {
    color: '#A8C590',

    fontFamily: 'Calistoga',
    fontSize: 19,

    marginBottom: 3,

    textAlign: 'center',
  },

  valorPontuacao: {
    color: '#C3D15F',

    fontFamily: 'Calistoga',
    fontSize: 30,

    textAlign: 'center',
  },
});