import { ContentLink } from "./epi-objects";

export interface ContentArea {
    expandedValue:  Array<ContentAreaItem>;
}

export interface ContentAreaItem {
    contentLink: { 
        expanded: any; 
        id: number, guidValue: string; 
    };
    name: string;
    contentType: Array<string>
}

export interface PropertyContentReference {
    value: ContentLink;
    propertyDataType: string;
}
export interface PropertyLongString {
    value: string;
    propertyDataType: string;
}

export interface PropertyXhtmlString {
    value: string;
    propertyDataType: string;
}

export interface PropertyUrl {
    value: string;
    propertyDataType: string;
}

export interface PropertyLinkCollection {
    value: Array<any>
    propertyDataType: string;
}