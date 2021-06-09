import React           from 'react';
import Framework       from '../../../../framework/Framework';
import {View}          from 'react-native';
import {Button, Input} from 'react-native-elements';
import UserAction      from '../../../action/UserAction';
import UserService     from "../../../../service/UserService";


/**
 *
 */
class Login extends Framework.CoreComponent {
    static className = 'LoginComponent';

    constructor(props) {
        super(props);
        this.state = {
            username: 'nhanvien1',
            password: '123456',
            isLoading: false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        if (this.state.isLoading) {
            return;
        }

        this.setState({isLoading: true});
        UserService.loginBase(this.state.username, this.state.password)
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
                // pass
            });
        // this.props.actions.userLogin({
        //     username: this.state.username,
        //     password: this.state.password
        // });
    }

    template() {
        return (
            <View>
                <Input
                    label='Tài khoản'
                    value={this.state.username}
                    onChangeText={(username) => {
                        this.setState({
                            username
                        });
                    }}
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
                />
                <Button
                    title='Đăng nhập'
                    loading={this.state.isLoading}
                    onPress={this.handleLogin}
                />
                <Button
                    title='Đăng ký'
                    onPress={() => {
                        this.props.navigation.navigate('/auth/register');
                    }}
                />
            </View>
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
