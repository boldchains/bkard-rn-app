import { StyleSheet } from 'react-native';
//import config from 'config';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#000000',
    alignItems: "center"
  },
  appName: {
    color: "#ffffff",
    fontSize: 30
  },
  textInput: {
    backgroundColor: "#1c1c1e",
    width: "100%",
    marginTop: 8,
    paddingVertical: 19,
    paddingHorizontal: 24,
    borderRadius: 10,
    color: "white",
    fontSize: 17
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 18
  },
  forgotPasswordText: {
    color: "#ffffff",
    opacity: 0.3,
    fontSize: 14
  },
  loginButton: {
    width: "100%",
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "red",
    borderRadius: 25
  },
  loginButtonText: {
    color: "white",
    fontWeight: "600"
  }
});

export default styles;
