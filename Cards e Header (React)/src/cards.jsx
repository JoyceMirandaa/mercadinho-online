import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity,} from 'react-native';

{/* Pega a dimensão da pagina e faz os cards não passarem do limite da tela */}
const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.3;

{/* Lista com vários objetos que contem as informações para os cards */}
const data = [
  {
    id: '1',
    title: 'Leite 1L',
    image: require('../assets/leite.jpeg'),
    valor: 2.99,
  },
  {
    id: '2',
    title: 'Arroz 5kg',
    image: require('../assets/arroz.jpg'),
    valor: 5.0,
  },
  {
    id: '3',
    title: 'Feijão 1kg',
    image: require('../assets/feijao.jpg'),
    valor: 6.0,
  },
  {
    id: '4',
    title: 'Leite 1L',
    image: require('../assets/leite.jpeg'),
    valor: 2.99,
  },
  {
    id: '5',
    title: 'Arroz 5kg',
    image: require('../assets/arroz.jpg'),
    valor: 5.0,
  },
  {
    id: '6',
    title: 'Feijão 1kg',
    image: require('../assets/feijao.jpg'),
    valor: 6.0,
  },
];

{/* Função para criar os cards com imagem, nome e valor */}
export default function CardSlider({ darkMode }) {
  const renderItem = ({ item }) => (
    <View style={[styles.cardProduto, darkMode && styles.cardProdutoDark]}>
        <Image source={item.image} style={styles.imagemProduto } resizeMode="contain"/>


      <View style={styles.cardInfo}>
        <Text style={[styles.nomeProduto , darkMode && styles.nomeProdutoDark]}>
          {item.title}
        </Text>

        <Text style={styles.precoProduto}>
          R$ {item.valor.toFixed(2)}
        </Text>

        <TouchableOpacity style={[styles.botao, darkMode && styles.botaoDark]}>
          <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}>
            Comprar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  {/* Usado para retornar vários cards e permitir que sejam arrastáveis */}
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  cardProduto: {
    width: CARD_WIDTH,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#2c2c2c',
    borderRadius: 8,
    overflow: 'hidden',
  },

  cardProdutoDark : {
    width: CARD_WIDTH,
    backgroundColor: '#555555',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 8,
    overflow: 'hidden',
  },

  imagemProduto: {
    width: '100%',
    height: 127,
  },

  cardInfo: {
    padding: 10,
  },

  nomeProduto: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },

  nomeProdutoDark: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },

  precoProduto: {
    fontWeight: 'bold',
    color: 'green',
  },

  precoProdutoDark: {
    fontWeight: 'bold',
    color: 'palegreen',
  },

  botao: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: 'palegreen',
    marginTop: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoDark : {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#8bce8b',
    marginTop: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: 'black',
    fontWeight: '600',
  },

  botaoTextoDark: {
    color: 'white',
    fontWeight: '600',
  },
});