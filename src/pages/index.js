// Libs
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

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

  const [check, setCheck] = useState(false);

  return (
    <Layout
      isCheck={check}
      onclick={() => setCheck(!check)}
    >
        <Main
          isCheck={check}
          title={cmsData.title}
        />
    </Layout>
  );
};

export default Home;