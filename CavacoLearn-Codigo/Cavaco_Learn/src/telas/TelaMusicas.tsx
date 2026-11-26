import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Cabecalho, MusicCard } from '../componentes';
import { listarMusicas } from '../services/musicas';
import { getUsuarioLogado } from '../services/SessaoService';
import { Musica, Usuario } from '../types';

type TelaMusicasProps = {
  aoVoltar: () => void;
  aoSelecionarMusica: (musica: Musica) => void;
  aoNavegarAba?: (aba: string) => void;
};

export default function TelaMusicas({
  aoVoltar,
  aoSelecionarMusica,
}: TelaMusicasProps) {
  const usuario = getUsuarioLogado() as Usuario | null;
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    listarMusicas()
      .then(setMusicas)
      .catch(console.error)
      .finally(() => setCarregando(false));
  }, []);

  const pontos = usuario?.pontuacao || 0;
  const nomeExibicao = usuario?.nome || 'Nick';

  return (
    <View style={estilos.tela}>
      <Cabecalho
        subtitulo={`Olá, ${nomeExibicao} !`}
        aoVoltar={aoVoltar}
      />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        {/* Painel Flutuante de Músicas conforme imagem 1 (#3D4933) */}
        <View style={estilos.painelMusicas}>
          {carregando ? (
            <Text style={estilos.textoVazio}>Carregando repertório...</Text>
          ) : musicas.length === 0 ? (
            <Text style={estilos.textoVazio}>Nenhuma música cadastrada no momento.</Text>
          ) : (
            musicas.map((m) => {
              const liberada = pontos >= (m.pontuacaoDesbloqueio || 0) || Boolean(m.id && usuario?.musicas_desbloqueadas?.includes(m.id));
              return (
                <MusicCard
                  key={m.id}
                  musica={m}
                  desbloqueada={liberada}
                  pontosUsuario={pontos}
                  aoAcessar={() => aoSelecionarMusica(m)}
                />
              );
            })
          )}
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
    padding: 16,
    paddingTop: 20,
    paddingBottom: 30,
    width: '100%',
  },
  painelMusicas: {
    backgroundColor: '#3D4933',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#3D4933',
    padding: 20,
    width: '100%',
    minHeight: 340,
  },
  textoVazio: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 14,
    fontStyle: 'italic',
    paddingVertical: 12,
    textAlign: 'center',
  },
});
