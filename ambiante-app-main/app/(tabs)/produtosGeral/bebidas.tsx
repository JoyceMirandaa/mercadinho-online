import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';

import Header from '@/app/components/header';
import CardsBebidas from '@/app/components/CardsGeral/bebidasCards';
export default function Bebidas() {
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  return (
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 50 }}> {/* flexGrow serve para o conteudo dentro dele conseguir ocupar tudo do Scroll */}
        <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
          <View style={{zIndex: 1, marginBottom: 20}}>
            <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)}/>
          </View>

          <View>
            <Text style={[styles.titulo, darkMode && styles.tituloDark]}>Bebidas</Text>
          </View>

        <View style={{marginTop: 15}}>
          <CardsBebidas darkMode={darkMode}/>
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
});