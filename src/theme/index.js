import { Dimensions } from 'react-native';

const colors = {
    theme: "#BF1E2D",
    primary: "#321fdb",
    secondary: "#ced2d8",
    white: "#FFFFFF",
    success: "#2eb85c",
    error: "#e55353",
    warning: "#f9b115",
    info: "#3399ff",
    gray0: "#ebedef",
    gray1: "#d8dbe0",
    gray2: "#c4c9d0",
    gray3: "#b1b7c1",
    gray4: "#9da5b1",
    gray5: "#8a93a2",
    gray6: "#768192",
    gray7: "#636f83",
    gray8: "#4f5d73",
    black: "#0e0e0e",
    greyOutline: "#cecece",
    divider: "#cecece"
};

const {height } = Dimensions.get('window');
// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseHeight = 680;

const verticalScale = size => height / guidelineBaseHeight * size;


const font = {
    fontSize: {
        text: 13,
        title: 15,
        hint: 12
    }
};

const theme = {
    Button: {
        titleStyle: {
            fontWeight: 'normal',
            fontSize: font.fontSize.text,
            fontFamily: 'sans-serif-normal'
        },
        buttonStyle: {
            height: 40
        },
        containerStyle: {
            height: 40
        }
    },
    Input: {
        labelStyle: {
            fontWeight: 'normal',
            fontSize: font.fontSize.text,
            color: colors.black
        },
        inputStyle: {
            fontSize: font.fontSize.title
        },
        inputContainerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: colors.divider,
            paddingHorizontal: 10
        }
    },
    Text: {
        style: {
            fontSize: font.fontSize.hint
        }
    },
    ListItemTitle: {
        style: {
            fontSize: font.fontSize.text
        }
    },
    colors: colors
};

export default theme;

export {
    colors,
    verticalScale
};
