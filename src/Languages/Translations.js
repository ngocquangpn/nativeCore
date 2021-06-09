import I18n from 'react-native-i18n';
import en from './en';
import vnm from './vnm';

I18n.fallbacks = true;
I18n.translations = {
    "vi-VN": vnm,
    en,
};

