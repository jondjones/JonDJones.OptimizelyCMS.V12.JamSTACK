import { ContentLoader, defaultConfig, ContentResolver } from '@episerver/content-delivery';

defaultConfig.apiUrl = process.env.NEXT_PUBLIC_EPISERVER_CONTENT_DELIVERY_API;
defaultConfig.selectAllProperties = true;
defaultConfig.expandAllProperties = true;

export const getPageByGuid = async (guid) => {

    const contentLoader = new ContentLoader();

    return contentLoader.getContent(guid)
        .catch((contentLoaderError) => {
            console.error('getPageByGuid Error', contentLoaderError.errorMessage);
        });
}

export const getPageByUrl = async (url) => {

    const contentResolver = new ContentResolver();

    return contentResolver.resolveContent(url, false)
        .then((resolvedContent) => {
            var content = resolvedContent.content;
            return content;
        })
        .catch((contentLoaderError) => {
            console.error('getPageByUrl Error', contentLoaderError.errorMessage);
        });
}

export const getChildren = async (guid) => {

    const contentLoader = new ContentLoader();

    return contentLoader.getChildren(guid)
        .catch((contentLoaderError) => {
            console.error('getPageByGuid Error', contentLoaderError.errorMessage);
        });
}