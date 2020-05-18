import React from 'react';
import {
  View, Image, Text, Linking,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { TouchableOpacity } from 'react-native-gesture-handler';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();

  const route = useRoute();

  const { incident } = route.params;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso',
      recipients: ['naldson.bc@gmail.com'],
      body: 'teste',
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${'85 988957005'}&text=teste`,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity
          onPress={navigateBack}
        >
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>


      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
          Ong:
        </Text>
        <Text style={styles.incidentValue}>
          {incident.name}
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
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o o herói desse caso</Text>
        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={sendWhatsapp}
            style={styles.action}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={sendMail}
            style={styles.action}
          >
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}
