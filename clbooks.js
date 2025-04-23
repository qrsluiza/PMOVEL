import React, { useState } from 'react';
import { Button, Text, View, Image, StyleSheet, TextInput } from 'react-native';

const App = () => {

const [login, setLogin] = useState();
const [senha, setSenha] = useState();

return (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#12111F', padding: 20 }}>
  <>

<Image source={require('./assets/logo.png')}/>

<Text style={{ color: '#E8E8E8', marginTop: 10 }}>
Entrar:</Text>

  <TextInput
  style={{ borderWidth: 1,
  backgroundColor: '#D9D9D9',
   height:30
  }}

  placeholder="Email ou usuário"
  placeholderTextColor="#2B2A2A"

  onChangeText={(texto) => setLogin(texto)}
  defaultValue={login}

/>

<TextInput
  style={{ borderWidth: 1,
  backgroundColor: '#D9D9D9',
  marginTop: 15,
  height:30
  }}

  placeholder="Senha"
   placeholderTextColor="#2B2A2A"
  onChangeText={(texto) => setSenha(texto)}
  defaultValue={senha}
/>

<Text style={{ color: '#E8E8E8', marginTop: 10 }}>
Esqueci a senha</Text>

<Button title="Entrar" onPress color='#6EB1DF' />

<Text style={{ color: '#E8E8E8',marginTop: 20, paddingLeft: 130}}>
Criar uma conta</Text>

<Text style={{ color: '#E8E8E8', paddingLeft: 90}}>
clbooks| politica de privacidade</Text>

</>
</View>

);
};

export default App;