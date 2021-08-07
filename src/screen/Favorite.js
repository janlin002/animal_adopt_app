import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useMappedState } from 'redux-react-hook';

export default function Favorite() {
  const userCartItem = useMappedState((state) => state.cartItem);
  const renderPropsData = (cases) => {
    return (
      <View>
        <View style={styles.MainStyle}>
          <Image
            source={{
              uri: cases.album_file
                ? cases.album_file
                : 'https://www.amtb.tw/blog/wp-content/themes/consultix/images/no-image-found-360x250.png',
            }}
            style={{ width: 60, height: 75, marginRight: 5 }}
          />

          <View>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 15, color: 'black' }}
            >
              目前所在地: {cases.animal_place ? cases.animal_place : '未知'}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={{ marginBottom: 10, fontSize: 15 }}
            >
              種類: {cases.animal_kind}
            </Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: '#dddddd' }} />
      </View>
    );
  };
  return (
    <View>
      <View>
        {userCartItem.length !== 0 ? (
          <FlatList
            data={userCartItem}
            renderItem={(cases) => renderPropsData(cases.item)}
            keyExtractor={(cases) => cases.animal_subid}
            style={{ backgroundColor: 'white' }}
          />
        ) : (
          <View
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>目前沒有資料喔~~</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  MainStyle: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
  },
});
