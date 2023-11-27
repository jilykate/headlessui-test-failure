import '@testing-library/jest-dom';
import {TextEncoder, TextDecoder} from 'util';
import resizeObserverPolyfill from 'resize-observer-polyfill';

Object.assign(global, {TextDecoder, TextEncoder});
(global as any).__console__ = (global as any).console;
Object.assign(global, {ResizeObserver: resizeObserverPolyfill});
Object.assign(global, {
  console: {
    // leaves log so it can be used to debug tests
    log: (global as any).__console__.log.bind((global as any).__console__),
    info: jest.fn(),
    debug: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
  },
});
