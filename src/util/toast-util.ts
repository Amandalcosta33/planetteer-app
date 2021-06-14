import { Toast } from 'native-base';

export function showToast(texto: string, tipo?: 'danger' | 'success' | 'warning') {
  Toast.show({text: texto, type: tipo});
}
