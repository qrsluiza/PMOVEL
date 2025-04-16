import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';

const App = () => {
const [x, setX] = useState();
const [y, setY] = useState();
const [soma, setSoma] = useState(0);

return (
  <>
  <TextInput
  style={{ borderWidth: 1 }}
  placeholder="Digite o valor de x"
  onChangeText={(texto) => setX(texto)}
  defaultValue={x}

/>

<TextInput
  style={{ borderWidth: 1 }}
  placeholder="Digite o valor de y"
  onChangeText={(texto) => setY(texto)}
  defaultValue={y}
/>
<Button title="Somar" onPress={() => setSoma(Number(x) + Number(y))}/>
<Text>Resultado: {soma} </Text>
</>

);
};

export default App;