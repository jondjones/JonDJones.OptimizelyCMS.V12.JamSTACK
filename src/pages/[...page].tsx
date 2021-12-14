import { GetStaticProps } from 'next';
import React from 'react';

import { PageData } from '../typescript-def/epi-objects';
import { SettingsPageData, MenuItemPageData } from '../typescript-def/page-types';

import { getPageData, getBlogPageSegments }  from '../lib/util/cms-api';

import { siteConfig } from '../lib/consts/site-config';

import BlogPage from '../components/BlogPage/BlogPage';
import Layout from "../components/Layout/Layout";


interface EpiserverPageProps {
    pageData: PageData,
    menuData: Array<MenuItemPageData>,
    settingsData: SettingsPageData
}

const EpiserverPage: React.FC<EpiserverPageProps> = (props) => {

    const pageType = props.pageData.contentType[1];
    const templates = {
        BlogPage: BlogPage,
    };

    const RenderBody = templates[pageType];

    if (!RenderBody) {
        return (
            <div>
                <p>PAGETYPE NOT FOUND</p>
            </div>
        );
    }

    return (
            <Layout {...props}>
                <RenderBody {...props} />
            </Layout>
    );
};


export async function getStaticPaths() {
    const paths = await getBlogPageSegments();
    return { paths, fallback: false };
}
    
export const getStaticProps: GetStaticProps = async (context) => {

    const urlSegments = context.params.page as Array<string>;
    const url = urlSegments.join('/')

    console.log('here', url)

    const data = await getPageData(`/${siteConfig.defaultLanguage}/${url}`);

    return data;
}

export default EpiserverPage;
