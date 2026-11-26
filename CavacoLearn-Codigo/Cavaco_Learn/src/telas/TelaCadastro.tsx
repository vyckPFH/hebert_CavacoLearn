import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Cabecalho, Input, Button } from '../componentes';
import { auth } from '../services/firebase';
import { cadastrarUsuario, verificarEmailJaCadastrado } from '../services/UsuarioService';
import { carregarUsuarioLogado } from '../services/SessaoService';

type TelaCadastroProps = {
  aoNavegarParaLogin: () => void;
  aoSucessoCadastro: () => void;
};

export default function TelaCadastro({
  aoNavegarParaLogin,
  aoSucessoCadastro,
}: TelaCadastroProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  async function aoCriarConta() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setMensagemErro('Preencha todos os campos obrigatórios.');
      return;
    }

    if (senha.length < 6) {
      setMensagemErro('A senha precisa ter no mínimo 6 caracteres.');
      return;
    }

    setCarregando(true);
    setMensagemErro('');
    try {
      // RN003: Email de Usuário Único
      const emailJaExiste = await verificarEmailJaCadastrado(email.trim());
      if (emailJaExiste) {
        setMensagemErro('Este email já está em uso por outro usuário. Faça login ou utilize outro email.');
        setCarregando(false);
        return;
      }

      const credencial = await createUserWithEmailAndPassword(auth, email.trim(), senha);
      try {
        await cadastrarUsuario(credencial.user.uid, {
          nome: nome.trim(),
          email: email.trim(),
        });
      } catch (errDb) {
        console.warn('Aviso: Perfil não pôde ser gravado no Firestore imediatamente:', errDb);
      }
      await carregarUsuarioLogado(credencial.user.uid);
      aoSucessoCadastro();
    } catch (erro: any) {
      console.warn('Erro ao cadastrar no Firebase:', erro);
      const codigo = erro?.code || '';

      if (codigo === 'auth/operation-not-allowed') {
        setMensagemErro('O provedor E-mail/Senha não está ativado no Firebase Console.');
      } else if (codigo === 'auth/email-already-in-use') {
        setMensagemErro('Email já cadastrado. Toque em "Já tem conta? Faça login" para entrar.');
      } else if (codigo === 'auth/weak-password') {
        setMensagemErro('Senha fraca. Digite pelo menos 6 caracteres.');
      } else if (codigo === 'auth/invalid-email') {
        setMensagemErro('O formato do email digitado é inválido.');
      } else {
        setMensagemErro('Não foi possível cadastrar. Verifique a conexão com o Firebase.');
      }
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Cabecalho
        titulo="CRIAR CONTA"
        subtitulo="Cadastre-se para iniciar seus estudos"
        aoVoltar={aoNavegarParaLogin}
      />

      <View style={estilos.formulario}>
        <Input
          rotulo="Nome"
          valor={nome}
          aoMudar={(texto) => {
            setNome(texto);
            if (mensagemErro) setMensagemErro('');
          }}
          placeholder="Seu nome"
        />

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
          placeholder="Mínimo 6 caracteres"
          seguro
        />

        {mensagemErro ? (
          <View style={estilos.caixaErro}>
            <Text style={estilos.textoErro}>{mensagemErro}</Text>
          </View>
        ) : null}

        <Button
          texto={carregando ? 'CADASTRANDO...' : 'CADASTRAR-SE'}
          aoClicar={aoCriarConta}
          desabilitado={carregando}
        />

        <TouchableOpacity
          style={estilos.linkContainer}
          onPress={aoNavegarParaLogin}
          activeOpacity={0.7}
        >
          <Text style={estilos.link}>Já tem conta? Faça login</Text>
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
  linkContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 6,
  },
  link: {
    color: '#A8C590',
    fontFamily: 'Calistoga',
    fontSize: 14,
  },
});
