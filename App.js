import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {fontType} from './src/theme';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={{backgroundColor: '#FFFFFF', padding: 10}}>
        <Text style={styles.categoryTitle}>GoFastFood</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 7}}>
          Enjoy The Food
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containercat}>
          <View style={styles.listCategory}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{...styles.categoryItem, marginTop: 10, marginLeft: 10}}>
                <Image
                  style={{...styles.image, marginLeft: 10}}
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/000/181/767/original/vector-hotpot-and-ingredients-illustration.jpg',
                  }}
                />
                <Text
                  style={{
                    ...styles.categoryText,
                    color: 'blue',
                    marginLeft: 3,
                  }}>
                  Maincourse
                </Text>
              </View>
              <View
                style={{
                  ...styles.categoryItem,
                  paddingVertical: 10,
                  marginLeft: 30,
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'http://clipart-library.com/img1/679262.png',
                  }}
                />
                <Text style={{...styles.categoryText, marginLeft: 7}}>
                  Drinks
                </Text>
              </View>
              <View
                style={{
                  ...styles.categoryItem,
                  paddingVertical: 10,
                  marginLeft: 40,
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/016/385/112/non_2x/mantou-asian-food-flat-design-illustration-free-vector.jpg',
                  }}
                />
                <Text style={styles.categoryText}>Desserts</Text>
              </View>
              <View
                style={{
                  ...styles.categoryItem,
                  paddingVertical: 10,
                  marginLeft: 50,
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/000/154/944/original/hand-drawn-appetizers-collection-vector.jpg',
                  }}
                />
                <Text style={styles.categoryText}>Appetizer</Text>
              </View>
            </ScrollView>
          </View>
          </View>

          <ScrollView horizontal style={styles.horizontalUtama}>
            <View style={styles.categoryUtama}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://en.pimg.jp/018/891/554/1/18891554.jpg'
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                SET MEAL A
              </Text>
            </View>
            <View style={styles.categoryUtama}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-hand-painted-gourmet-winter-nourishing-lamb-hot-pot-drawn-foodmutton-hot-png-image_637876.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                SET MEAL B
              </Text>
            </View>
            <View style={styles.categoryUtama}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://tse1.mm.bing.net/th?id=OIP.aWZNwgUMUJ9_6D0qLFrQDgAAAA&pid=Api&P=0&h=180',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                LAOMIAN
              </Text>
            </View>
            <View style={styles.categoryUtama}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'http://product.hstatic.net/200000491621/product/ca-basa-fillet_12039da32a604700be249a43d844c7fc_grande.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                IKAN BASHA FILLET
              </Text>
            </View>
            <View style={styles.categoryUtama}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://media.istockphoto.com/vectors/thai-spicy-shrimp-salad-on-a-plate-vector-id488520861?k=20&m=488520861&s=170667a&w=0&h=waxGNOWDdd8hbCi2PMuUBoAKe7I8LyUCmbD_qIK2Bis=',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                UDANG KUPU-KUPU
              </Text>
            </View>
            <View style={styles.categoryUtama1}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://tse1.mm.bing.net/th?id=OIP.hAt26hDDsn3cEleTG7Wi7wHaHa&pid=Api&P=0&h=180',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                SALMON ROE SUSHI
              </Text>
            </View>
            <View style={styles.categoryUtama1}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://media.istockphoto.com/photos/crab-sticks-group-picture-id465161935',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                STICK KEPITING
              </Text>
            </View>
            <View style={styles.categoryUtama1}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://thumbs.dreamstime.com/z/pisang-goreng-indonesian-food-design-vector-241172546.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                KULIT IKAN GORENG
              </Text>
            </View>
            <View style={styles.categoryUtama1}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-two-prawn-seafood-illustration-image_2284911.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                PASTA UDANG
              </Text>
            </View>
            <View style={styles.categoryUtama1}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/japanese-food-chikuwa-close-up-white-background-40403912.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                CIKUWA PASTA UDANG
              </Text>
            </View>
            <View style={styles.categoryUtama1}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://media.istockphoto.com/vectors/dum-sum-dumplings-in-basket-vector-id917396262?k=20&m=917396262&s=170667a&w=0&h=Q-FSB9iN7xNH5wvOhhe09B0foRk5j3iRyqTCk2m8ii0=',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                FISHIRO
              </Text>
            </View>
            <View style={styles.categoryUtama2}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2017/04/16/58f310bf97a1e_1492324543.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                LIANG TEH JIA DUO BAO
              </Text>
            </View>
            <View style={styles.categoryUtama2}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://media.istockphoto.com/vectors/photorealistic-illustration-of-orange-juice-in-a-glass-vector-id92719909?k=6&m=92719909&s=612x612&w=0&h=Cz_1O3YXWbZl95vAOcHs7vr9gwambJp5xHhRz0B99oo=',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                JUS JERUK
              </Text>
            </View>
            <View style={styles.categoryUtama2}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-bottle-of-mineral-water-vector-illustration-isolated-on-white-background-mineral-png-image_2025936.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                AIR MINERAL
              </Text>
            </View>
            <View style={styles.categoryUtama3}>
              <Image
                style={styles.imageUtama}
                source={{
                  uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3937805.jpg',
                }}
              />
              <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>
                MIX FRUIT
              </Text>
            </View>
          </ScrollView>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containercat: {
    height: 130,
    weight: 100,
    backgroundColor: '#fff3eb',
  },
  header: {
    flex: 0.2,
    backgroundColor: '#FAF3F0',
  },
  categoryUtama: {
    backgroundColor: '#FFCDB6',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '65%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  categoryUtama1: {
    backgroundColor: '#D6D8FF',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '65%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  categoryUtama2: {
    backgroundColor: '#F9E3E5',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '65%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  categoryUtama3: {
    backgroundColor: '#ECEE81',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '65%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  imageUtama: {
    width: 220, // Sesuaikan dengan lebar gambar yang diinginkan
    height: 220,
    borderRadius: 30, // Sesuaikan dengan tinggi gambar yang diinginkan
  },
  image: {
    width: 60, // Sesuaikan dengan lebar gambar yang diinginkan
    height: 60,
    borderRadius: 30, // Sesuaikan dengan tinggi gambar yang diinginkan
  },
  listCategory: {
    // Tambahkan gaya untuk listCategory jika diperlukan
    backgroundColor: '#FFDFDF',
    paddingTop: 10,
    paddingBottom: 20,
  },
  horizontalUtama: {
    flex: 1,
  },
  categoryItem: {
    // Tambahkan gaya untuk categoryItem jika diperlukan
  },
  categoryTitle: {
    fontSize: 40,
    fontFamily: fontType['Tjw-Bold'],
    color: 'black',
  },
  categoryText: {
    fontSize: 15,
    fontFamily: fontType['Tjw-Light'],
    color: 'black',
  },
  listCategory: {
    paddingVertical: 10,
  },
});

export default App;
