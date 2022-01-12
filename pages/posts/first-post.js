
import Layout from '../../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First post</title>
        </Head>
        <div className={utilStyles.contentBorderPadding10px}>
            <h1> First Post </h1>
        </div>
    </Layout>)
}