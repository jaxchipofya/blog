
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const author = "Jack Chipofya";
export const siteTitle = "C0D3 GENE5I5";

export default function Layout({children,home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favico.ico"/>
                <meta
                    name='description'
                    content='Learn programming from beginner to advanced and build real world projects'
                    />
                <meta name='og:title' content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                <h1 className={styles.head} onClick={()=> location.href="/"}>{siteTitle}</h1>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/author.jpg"
                            className={utilStyles.borderCircle}
                            height={300}
                            width={300}
                            alt={author}
                            />
                            <h1 className={utilStyles.headingMd}>{author}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/author.jpg"
                                className={utilStyles.borderCircle}
                                height={180}
                                width={180}
                                alt={author}
                                />
                        </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/'>
                                <a className={utilStyles.colorInherit}>{author}</a>
                            </Link>
                        </h2>
                   </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back To Home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}