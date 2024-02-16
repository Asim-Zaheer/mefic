import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
import Header  from "../components/Header";
import Portfolio from "../components/Portfolio";
import Ourservice from "@/components/OurService";
import Capital from "../components/Capital";
const Home = () => {
    return (
      <>
        <Head>
          <title>MEFIC</title>
        </Head>
        <Layout>
         <Header/>
         <Experience/>
        <Ourservice/>
         <Portfolio/>
         {/* <Capital/> */}
        </Layout>
      </>
    );
  };
  export default Home;