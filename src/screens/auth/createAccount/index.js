import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import api from '../../../server';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-simple-toast';
import ImageResizer from 'react-native-image-resizer';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {userRole, userDetails} from '../../../redux/actions';
import {padDateValue} from '../../../utils';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      address: '',
      phoneNumber: '',
      datePicker: false,
      date: new Date(1598051730000),
      pickdate: false,
      privacyPolicy: true,
      imageDetails: '',
      loading: false,
      photoChanged: false,
    };

    this.updateProfile = this.updateProfile.bind(this);
  }

  updateProfile = async () => {
    this.setState({
      loading: true,
    });
    const data = this.createData();
    const sent = await this.sendData(data);
    if (sent) {
      this.setState({
        loading: false,
      });
      this.props.navigation.navigate('User');
    }
  };

  createData = () => {
    try {
      const data = new FormData();
      const {
        imageDetails,
        username,
        address,
        phoneNumber,
        photoChanged,
        pickdate,
      } = this.state;

      data.append('userID', this.props.route.params.userDetails.userID);
      username && data.append('username', username);
      address && data.append('address', address);
      phoneNumber && data.append('phonenumber', phoneNumber);
      pickdate && data.append('birthdate', this.parseDate('/'));
      console.log({
        imageDetails,
      });
      photoChanged &&
        data.append('photo', {
          uri: imageDetails.uri,
          type: imageDetails.type,
          name: imageDetails.name,
        });

      return data;
    } catch (err) {
      console.log('createData', err);
      throw err;
    }
  };

  sendData = async (data) => {
    const headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    };

    if (data._parts.length <= 1) {
      Alert.alert('Warning', 'You changed Nothing');
      return;
    }

    console.log(
      JSON.stringify({
        data,
      }),
    );

    try {
      const res = await api.post('/user_update_profile', data, headers);

      console.log(
        JSON.stringify({
          res,
          data,
        }),
      );

      this.props.userDetails(res.data.userinfo);

      if (res.data.status === 200) {
        Toast.show('Welcome to Black Kardd');
        return true;
      }

      if (res.data.status !== 200) {
        Alert.alert('Error', 'An Unexpected Error Occured , Please Try Again');
        return false;
      }
    } catch (err) {
      console.log('err => ', err);
      this.setState({
        loading: false,
      });
      throw err;
    }
  };

  onChange = (event, selectedDate) => {
    //console.log("biramo datum rodjenja: ", event, selectedDate);
    if (selectedDate !== undefined) {
      console.log(
        'izabrali smo datum rodjenja: ',
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      );
      this.setState({date: selectedDate, pickdate: true });
      Platform.OS !== 'ios' && this.setState({datePicker : false});
    } else {
      console.log('nismo izabrali datum rodjenja! ', selectedDate);
    }
    /* const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate); */
  };

  parseDate = (separateBy) =>
    this.state.pickdate
      ? `${padDateValue(
          this.state.date.getMonth() + 1,
        )}${separateBy}${padDateValue(
          this.state.date.getDate(),
        )}${separateBy}${this.state.date.getFullYear()}`
      : 'Birthday';

  pickImage = () => {
    let options = {
      //title: 'Select Image',
      customButtons: [{name: 'customOptionKey', title: 'Browse...'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        ImageResizer.createResizedImage(response.uri, 500, 500, 'JPEG', 100)
          .then((resizedResponse) => {
            console.log({resizedResponse});
            console.log({
              uri: resizedResponse.uri,
              type: response.type,
              name: resizedResponse.name,
            });
            this.setState({
              imageDetails: {
                uri: resizedResponse.uri,
                type: response.type,
                name: resizedResponse.name,
              },
              photoChanged: true,
            });
          })
          .catch((err) => {
            console.log({
              err,
            });
          });
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.container}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#000000" />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContainerSecond}>
              <View style={styles.headerContainer}>
                <View style={{position: 'absolute', left: 0}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.backButton}>
                    <Icon name="keyboard-arrow-left" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>Create Account</Text>
              </View>
              {Platform.OS === 'ios' ? (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.datePicker}
                    style={styles.modal}>
                    <View
                      style={styles.modalContent}>
                      <View style={{width: '100%'}}>
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode={'date'}
                          is24Hour={true}
                          display="default"
                          onChange={(event, selectedDate) =>
                            this.onChange(event, selectedDate)
                          }
                          style={{ backgroundColor: "white" }}
                        />
                        <TouchableOpacity
                          onPress={(e) => {
                            this.setState({datePicker: false})
                          }}
                          style={{width: '30%', height: 20}}>
                          <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={['#ed733d', '#ea465b', '#db3022']}
                            style={styles.button}>
                              <Text style={styles.buttonText}>PICK DATE</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                ) : (
                  this.state.datePicker && (<DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) =>
                      this.onChange(event, selectedDate)
                    }
                  />)
                )
              }

              {this.state.imageDetails === '' ? (
                <View>
                  <Icon
                    name="account-circle"
                    size={150}
                    color="#1c1c1e"
                    style={{margin: 0}}
                  />
                  <View style={styles.imagePlus}>
                    <TouchableOpacity onPress={() => this.pickImage()}>
                      <Icon name="add" size={30} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <Image
                  style={styles.avatar}
                  source={{uri: this.state.imageDetails.uri}}
                />
              )}

              <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({username})}
                placeholder="Username"
                placeholderTextColor="white"
                style={[styles.textInput, {marginTop: 84}]}
              />
              <TextInput
                value={this.state.address}
                onChangeText={(address) => this.setState({address})}
                placeholder="Address"
                placeholderTextColor="white"
                style={styles.textInput}
              />
              <TextInput
                value={this.state.phoneNumber}
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                placeholder="Phone number"
                placeholderTextColor="white"
                style={styles.textInput}
              />
              <TouchableOpacity
                onPress={() => this.setState({datePicker: true})}
                style={styles.birtdateInput}>
                <Text style={styles.birthdateText}>{this.parseDate('/')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.updateProfile}
                style={{width: '100%'}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ed733d', '#ea465b', '#db3022']}
                  style={styles.button}>
                  {this.state.loading ? (
                    <View style={styles.loadButton}>
                      <Text style={styles.buttonText}> SAVE </Text>
                      <ActivityIndicator size="small" color="#fff" />
                    </View>
                  ) : (
                    <Text style={styles.buttonText}>SAVE</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {userRole, userDetails})(CreateAccount);
