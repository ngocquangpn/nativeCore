import Login          from "../Login/Login";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Register       from "../Register/Register";
import OTP            from "../OTP/OTP";

export default {
    name: "/auth",
    children: [
        {
            title: "Đăng nhập",
            name: "/login",
            component: Login
        },
        {
            title: "Đăng ký",
            name: "/register",
            component: Register
        },
        {
            title: "OTP",
            name: "/otp",
            component: OTP
        },
        {
            title: "Quên mật khẩu",
            name: "/forgot-password",
            component: ForgotPassword
        }
    ]
};
