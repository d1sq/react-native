import React from 'react';
import axios from 'axios';
import {View, Alert, Text, FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Loading} from '../components/Loading';

const HumanImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
`;

const HumanText = styled.Text`
  color: #242222;
  font-size: 18px;
  line-height: 24px;
`;

const HumanFullName = styled.Text`
  color: #242222;
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const InfoScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const {id, name} = route.params;

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://63176eaf82797be77ffcfe2c.mockapi.io/api/v1/items/' + id)
      .then(({data}) => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью');
      })
      .finally(() => {
        navigation.setOptions({
          title: name,
        });
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Loading />
      </View>
    );
  }

  return (
    <ScrollView style={{padding: 20}}>
      <HumanImage source={{uri: data.avatar}} />
      <HumanFullName>{data.fullName}</HumanFullName>

      {data.subjects.map(subject => (
        <HumanText key={Math.random()}>{subject}</HumanText>
      ))}
    </ScrollView>
  );
};
