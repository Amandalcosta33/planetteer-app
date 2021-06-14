import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { ImagePickerOptions, ImagePickerResult, MediaTypeOptions } from 'expo-image-picker';

export const cameraOptions: ImagePickerOptions = {
  quality: 0.5,
  base64: true,
  aspect: [4, 4],
  allowsEditing: true,
  mediaTypes: MediaTypeOptions.Images
};

export async function obterImagemGaleria(): Promise<ImagePickerResult> {

    const permissao = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (permissao.status === 'granted') {
      return await ImagePicker.launchImageLibraryAsync(cameraOptions);
    } else {
      return { cancelled: true }
    }
}

export async function obterImagemCamera(): Promise<ImagePickerResult> {

  const permissao = await Permissions.askAsync(Permissions.CAMERA);

  if (permissao.status === 'granted') {
    return await ImagePicker.launchCameraAsync(cameraOptions);
  } else {
    return { cancelled: true }
  }

}
