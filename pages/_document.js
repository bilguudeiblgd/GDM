import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-SDS6YY9HD1"
                />
              
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SDS6YY9HD1', { page_path: window.location.pathname });
            `,
                    }}
                />

                <meta name="description" content="Mongolian game dev community" />
                <meta name="keywords" content="Mongolia, Game dev, Community" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <Main />
            <NextScript />
        </Html>
    );
}