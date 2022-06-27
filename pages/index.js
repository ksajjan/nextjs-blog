import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    // below log will not be logged inside browser why?
    // because it is rendered at server-side
    console.log("take this one", allPostsData)
    return {
        props: {allPostsData} 
    };
}


export default function Home( { allPostsData } ) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi I am Sajjan Kumar. </p>
                <p>
                    I generally talk about Big Data, Data Processing, Data Staructure ,{''}
                    Scalable system. You can contact me on <a href="https://twitter.com/kumarksajjan">twitter</a>
                </p>
                <p>
                    I love to read books. You can find 
                    <a href="/"> here</a> some of my favroite book.{''}
                    <br></br>
                    Earbuds: <a href="https://amzn.to/3OFtrEb">My current Love</a>
                    <br></br>
                    Some of favroite <a href="">podcasts</a>.
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>
                    Blog
                </h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} >
                            <Link href={`/posts/${id}`}>
                                <a> {title} </a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                )                 
                )}
                </ul>
            </section>

        </Layout>
    );
}