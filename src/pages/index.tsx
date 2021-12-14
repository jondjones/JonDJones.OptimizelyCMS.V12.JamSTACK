import { GetStaticProps, NextPage } from "next";
import React from "react";

import { PageData } from "../typescript-def/epi-objects";
import { getPageData }  from "../lib/util/cms-api";

import Layout from "../components/Layout/Layout";
import HomePage from '../components/HomePage/HomePage';

interface EpiserverHomePageProps {
    pageData: PageData,
    menuData: any,
    settingsData: any,
    stylesheet: string
}

const EpiserverHomePage: NextPage<EpiserverHomePageProps> = (props) => {
    return (
        <Layout {...props}>
            <HomePage {...props} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await getPageData('/');
    console.log("getHomepageStaticProps:", data)
    return data;
}

export default EpiserverHomePage;
