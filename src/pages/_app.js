import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Core from '../wrappers/_core';
import '../styles/index.scss';
import { disableBrowserConsoleLog } from '../utils/console';
import { publicRuntimeConfig } from '../config/env';

const { NEXT_PUBLIC_ENABLE_CONSOLE_LOG } = publicRuntimeConfig;

if (typeof window !== 'undefined') {
  console.info('%cApp v20211210.1122', 'color: cornflowerblue');
  if (NEXT_PUBLIC_ENABLE_CONSOLE_LOG === 'false') disableBrowserConsoleLog();
}

export default class MyApp extends App {
  static async getInitialProps(context) {
    const initialProps = await App.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    const { Component, pageProps, auth } = this.props;
    const getLayout = Component.getLayout || ((page) => page);

    return (
      <Core>
        <NextNProgress color="#CA2629" stopDelayMs={200} />
        {getLayout(<Component {...pageProps} />)}
      </Core>
    );
  }
}
