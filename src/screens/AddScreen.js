import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import FormRow from '../components/molecules/FormRow';
import FormButton from '../components/atoms/FormButton';
import {generateUUID} from '../helpers/generateUUID';
import {sizes} from '../styles/theme';

const AddScreen = ({navigation}) => {
  const {data, setData, setLoading} = useContext(AppContext);
  const [nameSurname, setNameSurname] = useState('');
  const [job, setJob] = useState('');
  const [about, setAbout] = useState('');
  const [imglink, setImglink] = useState('');

  const handleSave = () => {
    const obj = {
      name: nameSurname,
      avatar: imglink,
      job: job,
      description: about,
      id: generateUUID(),
    };

    if (nameSurname && imglink && job && about) {
      let newArr = [...data];
      newArr.push(obj);
      setData(newArr);
      navigation.goBack();
    } else return alert('Please fill all input area!');
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{flex: 1}}
      keyboardVerticalOffset={sizes.height * 0.2}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <FormRow
            title={'Name Surname:'}
            value={nameSurname}
            setValue={setNameSurname}
          />
          <FormRow value={job} setValue={setJob} title={'Job Title:'} />
          <FormRow
            value={about}
            setValue={setAbout}
            title={'About Him/Her:'}
            multiline={true}
          />
          <FormRow
            value={imglink}
            setValue={setImglink}
            title={'Image Link:'}
          />

          <FormButton onPress={handleSave} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: sizes.height * 0.2,
  },
});
