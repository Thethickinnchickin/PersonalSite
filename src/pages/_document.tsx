import {Head, Html, Main, NextScript} from 'next/document';

// next/document <Head /> vs next/head <Head />
//
// next/document Head is rendered once on the server. This is different from next/head which will
// rebuild the next/head fields each time it's called, and won't overwrite next/document's Head.

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* google translate breaks react:
          - https://github.com/facebook/react/issues/11538
          - https://bugs.chromium.org/p/chromium/issues/detail?id=872770 */}
        <meta content="notranslate" name="google" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
