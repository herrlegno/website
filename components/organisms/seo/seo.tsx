import { DefaultSeo } from "next-seo";

const SEO = () => {
  const domain = "herrlegno.dev";
  const description =
    "herrlegno.dev is the personal website of Alejandro González, a React developer that loves building things from interactive web apps to games.";
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | herrlegno.dev"
        defaultTitle="herrlegno.dev"
        canonical={`https://${domain}`}
        description={description}
        openGraph={{
          url: domain,
          title: "Home",
          locale: "en",
          description,
          images: [
            {
              url: `https://${domain}/images/seo/og-image.png`,
              width: 1200,
              height: 630,
              alt: "Logo",
            },
          ],
          site_name: "herrlegno.dev",
        }}
        twitter={{
          handle: "@herrlegno",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default SEO;
