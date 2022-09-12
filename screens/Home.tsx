import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
} from 'react-native';
import {Human} from '../components/human';

export default function HomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [human, setHumans] = useState();

  const fetchData = () => {
    setIsLoading(true);

    axios
      .get('https://63176eaf82797be77ffcfe2c.mockapi.io/api/v1/items')
      .then(({data}) => setHumans(data))
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Ошибка при получении данных');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
        }
        data={human}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('Info', {
                id: item.id,
                name: item.name,
              })
            }>
            <Human title={item.name} status={item.status} img={item.avatar} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
