import { View, StyleSheet, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

//------------------------------------------------------------------------
import Header from '../components/header';
import CardSliderCarne from '../components/cardsCarnes';

export default function Produtos(){
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  return (
    <ScrollView>
      <View style={{zIndex: 1}}>
        <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
      </View>

      <View>
        <CardSliderCarne darkMode={darkMode}/>
        <Link href={"/(tabs)/produtosGeral/carnes"}>
          <Pressable style={styles.button}>
            Ver mais
          </Pressable>
        </Link>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});