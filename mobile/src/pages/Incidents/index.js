import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('incidents');
      setIncidents(response.data);
    }
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          {' '}
          <Text style={styles.headerTextBold}>
            {incidents.length}
            {' '}
            casos
          </Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>
              Ong:
            </Text>
            <Text style={styles.incidentValue}>
              {incident.name}
              {' '}
              de
              {' '}
              {incident.city}
              /
              {incident.uf}
            </Text>

            <Text style={styles.incidentProperty}>
              Caso:
            </Text>
            <Text style={styles.incidentValue}>
              {incident.title}
            </Text>

            <Text style={styles.incidentProperty}>
              Valor:
            </Text>
            <Text style={styles.incidentValue}>
              {
                Intl.NumberFormat('pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  })
                  .format(incident.value)
              }
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02014" />
            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  );
}
