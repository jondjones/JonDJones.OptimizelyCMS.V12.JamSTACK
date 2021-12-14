import { PageData } from "./epi-objects";
import { ContentArea, PropertyLongString, 
    PropertyUrl, PropertyLinkCollection, 
    PropertyContentReference, PropertyXhtmlString } from "./epi-properties";

export interface HomePageData extends SeoMetaData{
    mainContentArea? : ContentArea;
}

export interface BlogPageData extends SeoMetaData{
    title: PropertyLongString;
    metaDescrption: PropertyLongString;
    subTitle: PropertyLongString;
    content: PropertyXhtmlString;
    blogImage: PropertyContentReference;
}

export interface SeoMetaData extends PageData {
    metaDescrption?: PropertyLongString;
}

export interface SettingsPageData extends PageData {
    footer?: ContentArea;
}

export interface MenuItemPageData extends PageData{
    menuIcon: PropertyLongString;
    menuUrl: PropertyUrl
    subLinks?: PropertyLinkCollection
}