import Head from "next/head";

const Header = ({ 
    ContentDescription, 
    ContentRobots, 
    ContentOgTitle, 
    ContentOgDescription, 
    ContentType 
}: any) => (
    <Head>  
        <title>Your Cart - E-commerce</title>
        <meta name="description" content={ContentDescription} />
        <meta name="robots" content={ContentRobots} />
        <meta property="og:title" content={ContentOgTitle} />
        <meta property="og:description" content={ContentOgDescription} />
        <meta property="og:type" content={ContentType} />
    </Head>
);

export default Header;