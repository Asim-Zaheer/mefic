import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
import Capital from "../components/Capital";
const Home = () => {
    return (
      <>
        <Head>
          <title>MEFIC</title>
        </Head>
        <Layout>
         <Experience/>
         <Portfolio/>
         <Capital/>
        </Layout>
      </>
    );
  };
  export default Home;