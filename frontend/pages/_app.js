/* eslint-disable react/jsx-props-no-spreading */
import Page from '../components/Page';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
