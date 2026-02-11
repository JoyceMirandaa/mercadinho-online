import { View, StyleSheet, Pressable, Text, SafeAreaView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

//------------------------------------------------------------------------
import Header from '../components/header';
import CardSliderCarne from '../components/cardsEmProduto/cardsCarnes';

export default function Produtos(){
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 50 }}>
      <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
      <View style={{zIndex: 1, marginBottom: 20}}>
        <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
      </View>

      <View>
        <Text style={[styles.titulo, darkMode && styles.tituloDark]}>Produtos</Text>
      </View>

      {/* Linha de separação */}
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 10,}} />

      {/* Cards */}
      <View>
        <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>Carnes</Text>
        <CardSliderCarne darkMode={darkMode}/>

        <Link href={"/(tabs)/produtosGeral/carnes"}>
        <View style={styles.cards}>
          <Pressable style={styles.button}>
            Ver mais...
          </Pressable>
        </View>
        </Link>

        <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>Verduras</Text>
        <CardSliderCarne darkMode={darkMode}/>

        <Link href={"/(tabs)/produtosGeral/verduras"}>
        <View style={styles.cards}>
          <Pressable style={styles.button}>
            Ver mais...
          </Pressable>
        </View>
        </Link>

        <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>Bebidas</Text>
        <CardSliderCarne darkMode={darkMode}/>

        <Link href={"/(tabs)/produtosGeral/bebidas"}>
        <View style={styles.cards}>
          <Pressable style={styles.button}>
            Ver mais...
          </Pressable>
        </View>
        </Link>

        <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>Congelados</Text>
        <CardSliderCarne darkMode={darkMode}/>

        <Link href={"/(tabs)/produtosGeral/congelados"}>
        <View style={styles.cards}>
          <Pressable style={styles.button}>
            Ver mais...
          </Pressable>
        </View>
        </Link>
      </View>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  containerDark: {
    backgroundColor: '#414040',
  },

  button: {
    paddingVertical: 5,
    paddingHorizontal: 60,
    backgroundColor: 'palegreen',
    marginTop: 12,
    borderRadius: 10,
  },
  titulo : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  tituloDark : {
    color : '#ccc'
  },
  
  tituloCards : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  tituloCardDark : {
    color: '#ccc'
  },

  cards : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
});