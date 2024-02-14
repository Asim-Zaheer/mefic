<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
import Header  from "../components/Header";
import Footer from "../components/Footer"
import Ourservice from "@/components/OurService";
=======
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Head from "next/head";
import Capital from "../components/Capital";
>>>>>>> main
const Home = () => {
    return (
      <>
        <Head>
          <title>MEFIC</title>
        </Head>
        <Layout>
         <Header/>
         <Experience/>
<<<<<<< HEAD
        <Ourservice/>
=======
         <Portfolio/>
         <Capital/>
>>>>>>> main
        </Layout>
      </>
    );
  };
  export default Home;