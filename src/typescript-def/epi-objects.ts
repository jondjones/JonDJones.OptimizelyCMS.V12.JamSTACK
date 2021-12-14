export interface Category {
    id: number,
    name: string,
    description: string
}

export interface ContentData {
    contentLink: ContentLink,
    parentLink: ContentLink,
    contentType: Array<string>,
    language: Language,
    existingLanguages: Array<Language>,
    created: Date,
    changed: Date,
    saved: Date,
    startPublish: Date,
    name: string,
}

export interface ContentLink {
    guidValue: string,
    url: string,
    language: Language,
    expanded?: ContentData,
    id: Number;
    workId: Number;
}

export interface Language {
    link: string,
    displayName: string,
    name: string,
}
export interface PageData extends ContentData {
    url: string,
    routeSegment: string,
    category: Array<Category>,
}
export interface BlockData extends ContentData {
}