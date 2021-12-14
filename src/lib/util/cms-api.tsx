import { PageData } from "@episerver/content-delivery";
import { getPageByGuid, getPageByUrl, getChildren } from "../api/content-delivery-sdk";
import { siteConfig } from "../consts/site-config";
import { cleanseUrls } from '../util/content-util';

export const getPageData = async (pageUrl) => {

    try {
        const pageData = await getPageByUrl(pageUrl); 
        const menuData = await getChildren(siteConfig.headerMenuPage);
        const settingsData = await getPageByGuid(siteConfig.settingPage);; 

        if (!pageData) {
            throw("is CMS turned on?")
        } 
        if (!settingsData) {
            throw("No Settings")
        }
    
        return {
            props: {
                pageData,
                menuData,
                settingsData
            }
        };
    } catch (err) {
        console.log('getPageData:error:', err);
    }
};

export const getBlogPageSegments = async () => {

    try {
        const children = await getChildren(siteConfig.blogListingPage) as Array<PageData>;
        let paths = children.map(item => item.url.replace(`${process.env.NEXT_PUBLIC_EPISERVER_CONTENTHUB_URL}${siteConfig.defaultLanguage}`, ''));
        paths = cleanseUrls(paths);

        return paths;
    } catch (err) {
        console.log('getBlogPageSegments:error:', err);
    }
};

