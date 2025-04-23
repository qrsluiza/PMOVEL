import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [cliques, setCliques] = useState(0);

  return(
    <>
      <Button title="OK" onPress={() => {
        setCliques(cliques + 10);
      }} />
       <Button title="Resetar" onPress={() => {
        setCliques(0);
      }} />
      <Text>Quantidade de cliques: {cliques}</Text>
    </>

  );
}

export default App;