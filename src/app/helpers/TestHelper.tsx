/** React Specific */
import * as React from 'react';
import { mount, ComponentClass } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, Middleware } from 'redux';
import { MemoryRouter } from 'react-router';
import rootReducer from '../redux/reducers';
import configureStore from 'redux-mock-store';
import { IStore } from '../redux/IStore';

const fetchMock = require('fetch-mock');

/** Redux Mock Store Configuration */

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

/** Render Component */
function renderComponent<T>(Component: ComponentClass<T>, props: any = {}, state: IStore = createState()) {
  const store = createStore(rootReducer, state ? state : {});

  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <Component {...props} />
      </MemoryRouter>
    </Provider>
  );
}

function createState(s?: Partial<IStore>): IStore {
  const state: IStore = {
    stars: {},
    router: {} as any,
    counter: { count: 1 },
  };

  return { ...state, ...s };
}

export { mockStore, fetchMock, renderComponent, createState };
