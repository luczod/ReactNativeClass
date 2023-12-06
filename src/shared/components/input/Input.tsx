import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerInput, IconEye } from './input.style';
import { insertMaskInCpf, insertMaskInPhone } from '../../functions/utils/masks';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
  mask?: 'cellphone' | 'cpf';
}

export default function Input({
  margin,
  secureTextEntry,
  title,
  errorMessage,
  onChange,
  mask,
  ...props
}: InputProps) {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onChange) {
      let text = event.nativeEvent.text;
      switch (mask) {
        case 'cpf':
          text = insertMaskInCpf(text);
          break;
        case 'cellphone':
          text = insertMaskInPhone(text);
          break;
        default:
          text = event.nativeEvent.text;
          break;
      }

      onChange({
        ...event,
        nativeEvent: {
          ...event.nativeEvent,
          text,
        },
      });
    }
  };

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.neutralTheme.black}
          type={textTypes.PARAGRAPH_BOLD}
        >
          {title}
        </Text>
      )}

      <View>
        <ContainerInput
          {...props}
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={!!errorMessage}
          onChange={handleOnChange}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye-slash' : 'eye'}
            size={20}
            color="black"
          />
        )}
      </View>
      {errorMessage && (
        <Text
          margin="0px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
}
