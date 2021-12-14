import Head from "next/head"
import React from "react";

import { PageData } from "../../typescript-def/epi-objects";
import { MenuItemPageData } from "../../typescript-def/page-types";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface LayoutProps {
    pageData: PageData,
    settingsData: any,
    stylesheet?: string,
    menuData : Array<MenuItemPageData>;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, ...props}) => {

    return (
        <>
            <Head>
                <title>{props.pageData.name}</title>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            
            <style dangerouslySetInnerHTML={{ __html: props.stylesheet }} />
            
            <div id="wrapper">
                <Header {...props} />
                {children}
                <Footer  {...props}/>
            </div>
            
            <script type="text/javascript" src="assets/js/jquery.min.js"></script>
            <script type="text/javascript" src="assets/js/jquery.dropotron.min.js"></script>
            <script type="text/javascript" src="assets/js/browser.min.js"></script>
            <script type="text/javascript" src="assets/js/breakpoints.min.js"></script>
            <script type="text/javascript" src="assets/js/util.js"></script>
            <script type="text/javascript" src="assets/js/main.js"></script>
        </>
       );
};

export default Layout;

