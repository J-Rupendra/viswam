import React from 'react'
import Header from './Header'
import Body from './Body'
import { Provider } from 'react-redux'
import appStore from '../utils/store/appStore'

const AppLayout = () => {
  return (
    <Provider store={appStore} >
      <Header />
      <Body />
    </Provider>
  );
}

export default AppLayout
