import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Star, Music, AlertTriangle, LogOut, Trash2 } from 'lucide-react-native';
import { Cabecalho } from '../componentes';
import { getUsuarioLogado, setUsuarioLogadoLocal, deslogar } from '../services/SessaoService';
import { excluirContaUsuario } from '../services/UsuarioService';
import { Usuario } from '../types';

type TelaPerfilProps = {
  aoVoltar: () => void;
  aoDeslogar: () => void;
};

export default function TelaPerfil({
  aoVoltar,
  aoDeslogar,
}: TelaPerfilProps) {
  const usuario = getUsuarioLogado() as Usuario | null;
  const nomeExibicao = usuario?.nome || 'Nick';
  const emailExibicao = usuario?.email || 'seu@gmail.com';
  const pontuacao = usuario?.pontuacao || 0;
  const topicosConcluidos = usuario?.topicos_concluidos?.length || 0;
  const exerciciosConcluidos = usuario?.exercicios_concluidos?.length || 0;
  const musicasDesbloqueadas = usuario?.musicas_desbloqueadas?.length || 0;

  const [modalLogoutAberto, setModalLogoutAberto] = useState(false);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [processando, setProcessando] = useState(false);

  // Executa o logout diretamente, sem depender de window.confirm
  async function confirmarLogout() {
    setProcessando(true);
    try {
      await deslogar();
    } catch (erro) {
      console.warn('Erro ao deslogar do Firebase:', erro);
    } finally {
      setUsuarioLogadoLocal(null);
      setProcessando(false);
      setModalLogoutAberto(false);
      aoDeslogar();
    }
  }

  // RN017: Exclusão permanente da conta do usuário e seus registros
  async function confirmarExclusaoConta() {
    if (!usuario?.id) return;
    setProcessando(true);
    try {
      await excluirContaUsuario(usuario.id);
      await deslogar();
    } catch (erro) {
      console.warn('Erro ao excluir conta:', erro);
    } finally {
      setUsuarioLogadoLocal(null);
      setProcessando(false);
      setModalExcluirAberto(false);
      aoDeslogar();
    }
  }

  return (
    <View style={estilos.tela}>
      <Cabecalho
        subtitulo={`Olá, ${nomeExibicao} !`}
        aoVoltar={aoVoltar}
      />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        {/* Painel do Perfil conforme protótipos (#3D4933) */}
        <View style={estilos.painelPerfil}>
          {/* Dados do Usuário */}
          <View style={estilos.secaoCampo}>
            <Text style={estilos.rotulo}>Nome:</Text>
            <View style={estilos.capsulaCampo}>
              <Text style={estilos.textoCampo}>{nomeExibicao}</Text>
            </View>
          </View>

          <View style={estilos.secaoCampo}>
            <Text style={estilos.rotulo}>Email:</Text>
            <View style={estilos.capsulaCampo}>
              <Text style={estilos.textoCampo}>{emailExibicao}</Text>
            </View>
          </View>

          {/* Seção 14 da documentação: SEU PROGRESSO */}
          <View style={estilos.blocoProgresso}>
            <View style={estilos.tituloProgressoWrapper}>
              <Star size={16} color="#A8C590" fill="#A8C590" />
              <Text style={estilos.tituloProgresso}>SEU PROGRESSO</Text>
              <Music size={16} color="#A8C590" />
            </View>

            <View style={estilos.gradeProgresso}>
              <View style={estilos.itemProgresso}>
                <Text style={estilos.rotuloItemProgresso}>TÓPICOS</Text>
                <Text style={estilos.valorItemProgresso}>{topicosConcluidos} concluídos</Text>
              </View>

              <View style={estilos.itemProgresso}>
                <Text style={estilos.rotuloItemProgresso}>EXERCÍCIOS</Text>
                <Text style={estilos.valorItemProgresso}>{exerciciosConcluidos} concluídos</Text>
              </View>

              <View style={estilos.itemProgresso}>
                <Text style={estilos.rotuloItemProgresso}>MÚSICAS</Text>
                <Text style={estilos.valorItemProgresso}>{musicasDesbloqueadas} desbloqueadas</Text>
              </View>

              <View style={estilos.itemProgresso}>
                <Text style={estilos.rotuloItemProgresso}>PONTUAÇÃO</Text>
                <Text style={estilos.destaquePontosProgresso}>{pontuacao} pontos</Text>
              </View>
            </View>
          </View>

          {/* Botão Logout com estilo do documento (#531112) */}
          <TouchableOpacity
            onPress={() => setModalLogoutAberto(true)}
            style={estilos.botaoLogout}
            activeOpacity={0.8}
          >
            <LogOut size={18} color="#C93032" style={{ marginRight: 8 }} />
            <Text style={estilos.textoLogout}>Logout</Text>
          </TouchableOpacity>

          {/* RN017: Opção para Exclusão da Conta */}
          <TouchableOpacity
            onPress={() => setModalExcluirAberto(true)}
            style={estilos.botaoExcluirConta}
            activeOpacity={0.7}
          >
            <Trash2 size={14} color="#7C926A" style={{ marginRight: 6 }} />
            <Text style={estilos.textoExcluirConta}>Excluir minha conta permanentemente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal In-App de Confirmação de Logout (Não bloqueado por iframes) */}
      <Modal
        visible={modalLogoutAberto}
        transparent
        animationType="fade"
        onRequestClose={() => setModalLogoutAberto(false)}
      >
        <View style={estilos.modalFundo}>
          <View style={estilos.modalCard}>
            <LogOut size={28} color="#C93032" style={{ marginBottom: 10 }} />
            <Text style={estilos.modalTitulo}>Encerrar Sessão</Text>
            <Text style={estilos.modalTexto}>Deseja realmente sair da sua conta?</Text>

            {processando ? (
              <ActivityIndicator size="small" color="#A8C590" style={{ marginTop: 14 }} />
            ) : (
              <View style={estilos.modalBotoes}>
                <TouchableOpacity
                  style={estilos.modalBotaoCancelar}
                  onPress={() => setModalLogoutAberto(false)}
                  activeOpacity={0.7}
                >
                  <Text style={estilos.modalTextoCancelar}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={estilos.modalBotaoConfirmar}
                  onPress={confirmarLogout}
                  activeOpacity={0.7}
                >
                  <Text style={estilos.modalTextoConfirmar}>Sim, sair</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Modal In-App de Confirmação para Exclusão de Conta (RN017) */}
      <Modal
        visible={modalExcluirAberto}
        transparent
        animationType="fade"
        onRequestClose={() => setModalExcluirAberto(false)}
      >
        <View style={estilos.modalFundo}>
          <View style={estilos.modalCard}>
            <AlertTriangle size={32} color="#C93032" style={{ marginBottom: 10 }} />
            <Text style={estilos.modalTitulo}>Excluir Conta</Text>
            <Text style={estilos.modalTexto}>
              Atenção: Essa ação removerá permanentemente seu cadastro e todo o seu progresso do sistema (RN017).
            </Text>

            {processando ? (
              <ActivityIndicator size="small" color="#C93032" style={{ marginTop: 14 }} />
            ) : (
              <View style={estilos.modalBotoes}>
                <TouchableOpacity
                  style={estilos.modalBotaoCancelar}
                  onPress={() => setModalExcluirAberto(false)}
                  activeOpacity={0.7}
                >
                  <Text style={estilos.modalTextoCancelar}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={estilos.modalBotaoConfirmar}
                  onPress={confirmarExclusaoConta}
                  activeOpacity={0.7}
                >
                  <Text style={estilos.modalTextoConfirmar}>Excluir</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
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
    paddingTop: 16,
    paddingBottom: 24,
    width: '100%',
    alignItems: 'center',
  },
  painelPerfil: {
    backgroundColor: '#3D4933',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#3D4933',
    paddingVertical: 26,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
  },
  secaoCampo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  rotulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 16,
    marginBottom: 6,
  },
  capsulaCampo: {
    backgroundColor: '#43483E',
    borderWidth: 1.5,
    borderColor: '#596A4C',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCampo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
  blocoProgresso: {
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#4C583F',
    borderRadius: 18,
    padding: 14,
    width: '100%',
    marginTop: 10,
    marginBottom: 14,
  },
  tituloProgressoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 10,
  },
  tituloProgresso: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 15,
  },
  gradeProgresso: {
    gap: 8,
  },
  itemProgresso: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(76, 88, 63, 0.3)',
  },
  rotuloItemProgresso: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 12,
  },
  valorItemProgresso: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 13,
  },
  destaquePontosProgresso: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
  botaoLogout: {
    backgroundColor: '#531112',
    borderWidth: 2,
    borderColor: '#811F20',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  textoLogout: {
    color: '#C93032',
    fontFamily: 'Calistoga',
    fontSize: 16,
  },
  botaoExcluirConta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  textoExcluirConta: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  /* Modal in-app */
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: {
    backgroundColor: '#282E23',
    borderWidth: 2,
    borderColor: '#3D4933',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  modalTitulo: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  modalTexto: {
    color: '#7C926A',
    fontFamily: 'Calistoga',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  modalBotoes: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    justifyContent: 'center',
  },
  modalBotaoCancelar: {
    flex: 1,
    backgroundColor: '#3D4933',
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTextoCancelar: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
  modalBotaoConfirmar: {
    flex: 1,
    backgroundColor: '#531112',
    borderWidth: 1,
    borderColor: '#811F20',
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTextoConfirmar: {
    color: '#C93032',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
});
