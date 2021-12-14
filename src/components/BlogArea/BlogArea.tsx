import React from "react";
import XhtmlContent from "../__Components__/XhtmlContent";
import { ContentLink } from "../../typescript-def/epi-objects";
import Link from 'next/link';
import { cleanseUrl } from '../../lib/util/content-util';

export interface BlogAreaProps  {
    contentLink: ContentLink 
    blog: Array<BlogProps>
}

export interface BlogProps  {
    title: string ,
    subTitle: string,
    content: string,
    blogImageUrl: string,
    url: string
}

export const BlogArea: React.FC<BlogAreaProps> = (item) => {
    return (
        <section id="main">
            <div className="container">
                {item.blog.map((item, key) => {
                    const pictureUrl = cleanseUrl(item.blogImageUrl);
                    return (
                        <div id="content" className="col-12 col-12-medium" key={key}> 
                            <article className="box post">
                                <header>
                                    <h2>
                                    <Link href={item.url}>
                                        <a>
                                            {item.title}
                                        </a>
                                    </Link>
                                    </h2>
                                </header>
                                <Link href={item.url}>
                                    <a className="image featured">
                                        <img
                                            src={pictureUrl}
                                            alt={item.title}
                                            width={1400}
                                            height={350} />
                                    </a>
                                </Link>
                                <h3>{item.subTitle}</h3>
                                <XhtmlContent content={item.content} />
                                <p>
                                    <ul className="actions">
                                        <li>
                                            <Link href={item.url}>
                                                <a className="button icon solid fa-file">
                                                    Continue Reading
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </p>
                            </article>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default BlogArea;