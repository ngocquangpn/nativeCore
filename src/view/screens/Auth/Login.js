import React                 from 'react';
import Framework             from '../../../framework/Framework';
import {
    View, StyleSheet,
    Animated, Easing, TouchableOpacity, ScrollView
}                            from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {colors}              from "../../../theme";
import UserService           from "../../../service/UserService";
import UserAction            from "../../action/UserAction";

/**
 *
 */
class LogoAnimated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.spin = this.spin.bind(this);
        this.spinValue = new Animated.Value(0);
        //
        this.styles = StyleSheet.create({
            image: {
                width: 100,
                height: 100
            }
        });
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.spin());
    }

    render() {

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <Animated.Image
                source={require("../../../assets/img/logo/logo.png")}
                style={[this.styles.image, {transform: [{rotate: spin}]}]}
            />
        );
    }
}

/**
 *
 */
class Login extends Framework.CoreComponent {
    static className = 'LoginComponent';

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.styles = StyleSheet.create({
            main: {
                flex: 1,
                padding: 10
            },
            imageContainer: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20
            },
            containerButtonLogin: {
                marginVertical: 10,
                height: 50,
                paddingHorizontal: 10
            },
            buttonLogin: {
                height: 50
            },
            inputContainerStyle: {
                borderWidth: 1,
                borderColor: colors.black,
                borderBottomColor: colors.black,
                borderRadius: 5
            },
            inputLabelStyle: {
                marginBottom: 10
            },
            containerTextRedirect: {
                marginVertical: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }
        });
    }

    handleLogin() {
        if (this.state.isLoading) {
            return;
        }

        this.setState({isLoading: true});

        UserService.loginBase({
            username: this.state.username,
            password: this.state.password
        })
            .then(result => {
                this.setState({
                    isLoading: false
                });
                this.props.actions.userLoginResult(result);
            })
            .catch(e => {
                this.setState({
                    isLoading: false
                });
            });
    }

    template() {

        return (
            <ScrollView style={this.styles.main}>
                <View style={this.styles.imageContainer}>
                    <LogoAnimated/>
                </View>
                <Input
                    label='Tài khoản'
                    value={this.state.username}
                    onChangeText={(username) => {
                        this.setState({
                            username
                        });
                    }}
                    placeholder='Tài khoản'
                    leftIcon={{
                        type: "font-awesome-5",
                        name: 'user',
                        solid: true,
                        color: colors.divider,
                        size: 16
                    }}
                    placeholderTextColor={colors.divider}
                />
                <Input
                    label='Mật khẩu'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({
                            password
                        });
                    }}
                    placeholder='Mật khẩu'
                    leftIcon={{
                        type: "font-awesome-5",
                        name: 'key',
                        solid: true,
                        color: colors.divider,
                        size: 16
                    }}
                    placeholderTextColor={colors.divider}
                />
                <Button
                    title='Đăng nhập'
                    loading={this.state.isLoading}
                    onPress={this.handleLogin}
                    containerStyle={this.styles.containerButtonLogin}
                    buttonStyle={this.styles.buttonLogin}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('RegisterRoute');
                    }}
                    style={this.styles.containerTextRedirect}
                >
                    <Text>
                        Chưa có tài khoản. Đăng ký ngay?
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

/**
 *
 */
class LoginContainer extends Framework.CoreContainer {
    static className = 'LoginContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {
                userLoginResult: (user) => dispatch(UserAction.userLoginResult(user))
            }
        };
    }
}

export default Framework.ContainerFactory.get(LoginContainer).withRouter(
    Framework.ComponentFactory.get(Login)
);
