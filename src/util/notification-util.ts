import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

export interface DeviceInfo {
  token: string;
  tipo: string
}

export async function registerForPushNotificationsAsync(): Promise<DeviceInfo> {

  const info = {
    token: '',
    tipo: checarTipoPlataforma()
  };

  if (Constants.isDevice) {

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus === 'granted') {
      try {
        const response = await Notifications.getExpoPushTokenAsync();
        info.token = response.data;
      } catch (error) {
        throw new Error(`Falha ao obter o token: ${error}`);
      }
    } else {
      throw new Error('Permissões não consedidadas');
    }

  } else {
    throw new Error('Notificações apenas disponíveis em dispositívos físicos');
  }

  return info;

};

function checarTipoPlataforma(): string {

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    });

    return '1';
  } else {
    return '2';
  }

}
