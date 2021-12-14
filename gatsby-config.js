module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "allData",
        fieldName: "allData",
        url: "https://api-sa-east-1.graphcms.com/v2/ckx6my1wm5trr01xq3il200du/master",
      },
    },
  ],
};
