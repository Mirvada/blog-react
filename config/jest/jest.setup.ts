import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
}

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    // код из документации https://react.i18next.com/misc/testing
    // eslint-disable-next-line
    i18n: { changeLanguage: () => new Promise(() => { }) },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));
