import Navbar from "@/components/Navbar";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
import Header  from "../components/Header";
import Footer from "../components/Footer"
import Ourservice from "@/components/OurService";
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
        </Layout>
      </>
    );
  };
  export default Home;