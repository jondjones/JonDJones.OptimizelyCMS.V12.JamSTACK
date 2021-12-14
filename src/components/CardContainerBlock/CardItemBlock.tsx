import React from 'react';
import XhtmlContent from '../__Components__/XhtmlContent';
import Link from 'next/link';
import { cleanseUrl } from '../../lib/util/content-util';

export interface CardItemProps {
    title: string
    url: string
    content: string
    imageUrl: string
}

export const CardItemBlock: React.FC<CardItemProps> = (item) => {


    const picture = cleanseUrl(item.imageUrl);
    console.log('imageUrl', picture)
    return (
        <div className="col-4 col-6-medium col-12-small">
            <section>
                <Link href={item.url}>
                    <a className="image featured">
                        <img 
                            src={picture} 
                            alt={item.title} 
                            width={420}
                            height="292" />
                    </a>
                </Link>
                <header>
                    <h3>
                        {item.title}
                    </h3>
                </header>
                <XhtmlContent content={item.content} />
            </section>
        </div>
    );
};

export default CardItemBlock;