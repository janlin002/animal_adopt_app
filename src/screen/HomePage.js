import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { addToCart } from '../Redux/action';
import ADD_TO_FAVORITE from '../Redux/actionType';

export default function HomePage(props) {
  const passProps = props.route.params.passProps;
  // Redux
  const userCartItem = useMappedState((state) => state.cartItem);
  const dispatch = useDispatch();
  console.log(userCartItem, 'cartItem');
  // Alert Modal
  const createTwoButtonAlert = (passProps) =>
    Alert.alert('是否加入我的最愛？', '加到我的最愛', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          // dispatch({
          //   type: 'ADD_TO_FAVORITE',
          //   payload: { myNewName: passProps },
          // }),
          console.log(passProps),
      },
    ]);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            style={{
              width: 400,
              height: 450,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
            }}
            source={{
              uri: passProps.album_file
                ? passProps.album_file
                : 'https://www.amtb.tw/blog/wp-content/themes/consultix/images/no-image-found-360x250.png',
            }}
          />
        </View>

        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              margin: 20,
            }}
          >
            基本資訊
          </Text>
          <Text>寵物所在地: {passProps.animal_place}</Text>
          <Text>寵物種類: {passProps.animal_kind}</Text>
          <Text>寵物性別: {passProps.animal_sex === 'F' ? '母' : '公'}</Text>
          <Text>寵物體型: {passProps.animal_bodytype}</Text>
          <Text>寵物毛色: {passProps.animal_colour}</Text>
          <Text>寵物年紀: {passProps.animal_age}</Text>
          <Text>
            是否結紮: {passProps.animal_sterilization === 'F' ? '否' : '是'}
          </Text>
          <Text>
            是否施打狂犬病疫苗:{' '}
            {passProps.animal_bacterin === 'F' ? '否' : '是'}
          </Text>
          <Text>動物目前狀態: {passProps.animal_status}</Text>
          <Text>
            備註:{' '}
            {passProps.animal_remark === '' ? '無' : passProps.animal_remark}
          </Text>
          <Text>開放領樣時間: {passProps.animal_opendate}</Text>
          <Text>結束領養時間: {passProps.animal_closeddate}</Text>
          <Text>寵物所屬收容所: {passProps.shelter_name}</Text>
          <Text>資料建立時間: {passProps.animal_createtime}</Text>
          <Text>聯絡電話:{passProps.shelter_tel}</Text>
        </View>
        <Button
          title="加到我的最愛"
          onPress={() => createTwoButtonAlert(passProps)}
          style={{
            width: '60%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
