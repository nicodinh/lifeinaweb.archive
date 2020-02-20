import App from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { StoreProvider } from 'easy-peasy'
import { initializeStore } from '../store'

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props

    console.log('__STORE__', store)

    // Workaround for https://github.com/zeit/next.js/issues/8592
    // const { err } = this.props
    const modifiedPageProps = { ...pageProps }

    return (
      <StoreProvider store={store}>
        <Component {...modifiedPageProps} />
      </StoreProvider>
    )
  }
}

export default withRedux(initializeStore)(MyApp)
