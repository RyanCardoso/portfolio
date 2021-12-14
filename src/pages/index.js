// Libs
import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

// Components
import Layout from "../components/layout";
import Main from "../components/Home/main";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allData {
        homes {
          title
        }
      }
    }
  `);

  const cmsData = data?.allData?.homes?.[0];

  return (
    <Layout>
        <Main 
          title={cmsData.title}
        />
    </Layout>
  );
};

export default Home;