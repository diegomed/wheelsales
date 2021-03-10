import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
//   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
            'Log in': 'Log in',
            'Please enter your email!': 'Please enter your email!',
            'Please enter your password!': 'Please enter your password!',
            'Password': 'Password',
            'Email': 'Email',
            'WheelSales. All rights reserved.': 'WheelSales. All rights reserved.',
            'Please enter a valid email!': 'Please enter a valid email!',
            'Welcome!': 'Welcome!',
            'Sign Up': 'Sign Up',
            'Name': 'Name',
            'Please enter your phone number!': 'Please enter your phone number!',
            'Select your country': 'Select your country',
            'Prefix': 'Prefix',
            'Please select your country!': 'Please select your country!',
            'Please insert a valid phone number!': 'Please insert a valid phone number!',
            'Password too short': 'Password too short',
            'Business name': 'Business name',
            'My profile': 'My profile'
        }
      },
      es: {
        translations: {
            'Log in': 'Iniciar Sesión',
            'Please enter your email!': '¡Por favor ingrese su correo!',
            'Please enter your password!': '¡Por favor ingrese su contraseña!',
            'Password': 'Contraseña',
            'Email': 'Email',
            'WheelSales. All rights reserved.': 'WheelSales. Todos los derechos reservados.',
            'Please enter a valid email!': '¡Por favor ingrese un email válido!',
            'Welcome!': '¡Bienvenido!',
            'Sign Up': 'Registrarme',
            'Name': 'Nombre',
            'Please enter your phone number!': '¡Por favor ingrese su número de teléfono!',
            'Select your country': 'Selecciona tu país',
            'Prefix': 'Prefijo',
            'Please select your country!': '¡Por favor seleccione su país!',
            'Please insert a valid phone number!': '¡Por favor inserte un teléfono válido',
            'Password too short': 'Contraseña muy corta',
            'Business name': 'Nombre del negocio',
            'My profile': 'Mi perfil'
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
