import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

export default function Home(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const url =
      'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';
    fetch(url)
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => console.log(err));
  };
  const showClickItem = (cases) => {
    props.navigation.push('領養資訊', { passProps: cases });
  };
  const renderData = (cases) => {
    return (
      <TouchableOpacity onPress={() => showClickItem(cases)}>
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

            <View style={{ flex: 1 }}>
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
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={(cases) => renderData(cases.item)}
        keyExtractor={(cases) => cases.animal_subid}
        style={{ backgroundColor: 'white' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100px',
    height: '30px',
    backgroundColor: '#841584',
    color: 'white',
  },
  MainStyle: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});
