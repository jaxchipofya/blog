import Head from 'next/head';
import Link from 'next/link';
import Layout,{siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/posts';
import Date from '../components/date'
export async function getStaticProps() {
  const allPostData = getSortedPostData()

  return {
    props: {
      allPostData
    }
  }
}
export default function Home({allPostData}) {
  return (
    
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.text}>Hello, I'm Jack, a web and blockchain app developer from Zambia</p>
        <Link href='/posts/first-post'>
          <a>Read this page</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Blog</h1>
        <ul className={utilStyles.list}>
          {allPostData.map(({id,date,title}) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date}/>
                </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  
  
  
  
  
  
  
  
  
  
  
  )
}
