import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';

const App = () => {
const [raio, setRaio] = useState();
const [circunferencia, setCircunferencia] = useState(0);

return (
  <>
  <TextInput
  style={{ borderWidth: 1 }}
  placeholder="Digite o valor do raio"
  onChangeText={(texto) => setRaio(texto)}
  defaultValue={raio}

/>

<Button title="Calcular" onPress={() => setCircunferencia(Number(raio)*2*Math.PI)}/>
<Text>Resultado: {circunferencia.toFixed(2)} </Text>
</>

);
};

export default App;