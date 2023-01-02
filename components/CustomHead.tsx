import Head from 'next/head';
import config from '../config/config.json'

export default function CustomHead(props: { title?: string }) {

    return (
        <Head >
            <title>{props.title || config.websiteTitle}</title>
            <meta name="description" content={config.websiteDescription} />
            <meta name="author" content={config.websiteAuthor} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}