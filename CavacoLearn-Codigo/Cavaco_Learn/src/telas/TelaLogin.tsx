import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Cabecalho, Input, Button, CavaquinhoIcone } from '../componentes';
import { auth } from '../services/firebase';
import { carregarUsuarioLogado, setUsuarioLogadoLocal } from '../services/SessaoService';

type TelaLoginProps = {
  aoNavegarParaCadastro: () => void;
  aoSucessoLogin: () => void;
};

export default function TelaLogin({
  aoNavegarParaCadastro,
  aoSucessoLogin,
}: TelaLoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  async function aoEntrar() {
    if (!email.trim() || !senha.trim()) {
      setMensagemErro('Preencha seu email e senha.');
      return;
    }

    setCarregando(true);
    setMensagemErro('');
    try {
      const credencial = await signInWithEmailAndPassword(auth, email.trim(), senha);
      await carregarUsuarioLogado(credencial.user.uid);
      aoSucessoLogin();
    } catch (erro: any) {
      console.warn('Erro ao autenticar no Firebase:', erro);
      const codigo = erro?.code || '';

      if (codigo === 'auth/invalid-credential' || codigo === 'auth/user-not-found') {
        setMensagemErro('Conta não encontrada ou senha incorreta. Cadastre-se abaixo se ainda não tiver conta.');
      } else if (codigo === 'auth/wrong-password') {
        setMensagemErro('Senha incorreta. Verifique e tente novamente.');
      } else if (codigo === 'auth/operation-not-allowed') {
        setMensagemErro('O provedor E-mail/Senha não está ativado no Firebase Console.');
      } else {
        setMensagemErro('Não foi possível entrar. Verifique os dados ou entre como teste abaixo.');
      }
    } finally {
      setCarregando(false);
    }
  }

  function entrarComoTeste() {
    setUsuarioLogadoLocal({
      id: 'usuario_teste',
      id_usuario: 'usuario_teste',
      nome: 'Nick',
      email: email.trim() || 'nick@cavacolearn.com',
      pontuacao: 3890,
      nivel_atual: 1,
      topicos_concluidos: [],
      exercicios_concluidos: [],
      musicas_desbloqueadas: [],
      missoes_concluidas: [],
    });
    aoSucessoLogin();
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Cabecalho
        titulo="CavacoLearn"
        subtitulo="Acesse sua conta para estudar"
      />

      <View style={estilos.formulario}>
        <View style={estilos.logoSimbolo}>
          <CavaquinhoIcone tamanho={48} />
        </View>

        <Input
          rotulo="Email"
          valor={email}
          aoMudar={(texto) => {
            setEmail(texto);
            if (mensagemErro) setMensagemErro('');
          }}
          placeholder="seu@email.com"
          tecladoEmail
        />

        <Input
          rotulo="Senha"
          valor={senha}
          aoMudar={(texto) => {
            setSenha(texto);
            if (mensagemErro) setMensagemErro('');
          }}
          placeholder="Digite sua senha"
          seguro
        />

        {mensagemErro ? (
          <View style={estilos.caixaErro}>
            <Text style={estilos.textoErro}>{mensagemErro}</Text>
          </View>
        ) : null}

        <Button
          texto={carregando ? 'ENTRANDO...' : 'ENTRAR'}
          aoClicar={aoEntrar}
          desabilitado={carregando}
        />

        {/* Opção para teste caso o banco/auth ainda não tenha o usuário cadastrado */}
        <TouchableOpacity
          style={estilos.botaoTeste}
          onPress={entrarComoTeste}
          activeOpacity={0.7}
        >
          <Text style={estilos.textoBotaoTeste}>Entrar como Aluno (Teste)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.linkContainer}
          onPress={aoNavegarParaCadastro}
          activeOpacity={0.7}
        >
          <Text style={estilos.link}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    padding: 16,
    paddingBottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  formulario: {
    padding: 24,
    width: '100%',
    backgroundColor: '#3D4933',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#3D4933',
    marginTop: 16,
  },
  logoSimbolo: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#4C583F',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  caixaErro: {
    backgroundColor: 'rgba(83, 17, 18, 0.6)',
    borderColor: '#811F20',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 14,
  },
  textoErro: {
    color: '#FF8A8A',
    fontFamily: 'Calistoga',
    fontSize: 13,
    textAlign: 'center',
  },
  botaoTeste: {
    marginTop: 12,
    backgroundColor: '#282E23',
    borderWidth: 1.5,
    borderColor: '#3D4933',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoTeste: {
    color: '#C3D15F',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 6,
  },
  link: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
});
