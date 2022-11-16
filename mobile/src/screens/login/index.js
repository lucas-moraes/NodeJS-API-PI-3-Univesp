import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {THEME} from '@themes';
import {SendPass} from '@services';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function HandleSendlogin() {
    SendPass(formData.email, formData.password).then(res =>
      console.log(res.data),
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/adaptive-icon.png')}
      />
      <View style={styles.viewer}>
        <Text style={styles.title}>Street Holes</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={text => {
            setFormData({
              ...formData,
              email: text
                .split(' ')
                .map(word => word)
                .join(' '),
            });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="email-address"
          onChangeText={text => {
            setFormData({
              ...formData,
              password: text
                .split(' ')
                .map(word => word)
                .join(' '),
            });
          }}
        />
        <TouchableOpacity onPress={() => HandleSendlogin()}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_600,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'center',
  },
  viewer: {
    padding: 30,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: THEME.COLORS.OVERLAY_LIGHT,
    borderRadius: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: THEME.COLORS.CAPTION_400,
    backgroundColor: THEME.COLORS.BACKGROUND_200,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: THEME.COLORS.BACKGROUND_700,
    marginTop: 15,
    borderRadius: 10,
    width: 300,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: THEME.COLORS.TEXT,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.BACKGROUND_900,
  },
});
