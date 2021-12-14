import React from "react";
import Link from 'next/link';

import { PropertyLongString, PropertyUrl } from "../../typescript-def/epi-properties";
import { ContentLink } from "../../typescript-def/epi-objects";
import CardItemBlock from './CardItemBlock'
import XhtmlContent from "../__Components__/XhtmlContent";

export interface CardContainerBlockProps  {
    contentLink: ContentLink 
    id: any
    items: any
    ctaTitle: PropertyLongString
    url: PropertyUrl
    title: PropertyLongString
}

export const CardContainerBlock: React.FC<CardContainerBlockProps> = (item) => {
    console.log("CardContainerBlock:", item.items)
    return (
        <section id="features">
            <div className="container">
                <header>
                    <h2>
                        <XhtmlContent content={item.title.value} />
                    </h2>
                </header>
                <div className="row aln-center">

                    {item.items.map((item, key) => <CardItemBlock {...item} key={key} /> )}

                    <div className="col-12">
                        <ul className="actions">
                            <li>
                                <Link href="{item.url.value}">
                                    <a className="button icon solid fa-file">
                                        {item.ctaTitle.value}
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CardContainerBlock;