import React from 'react'
import { BlogPageData } from '../../typescript-def/page-types';
import XhtmlContent from "../__Components__/XhtmlContent";

interface BlogPageProps {
    pageData : BlogPageData;
}

const BlogPage: React.FC<BlogPageProps> = ({pageData}) => {
    return (
        <section id="main">
        <div className="container">
            <div id="content">
                    <article className="box post">
                        <header>
                            <h2>
                                {pageData.title.value}
                            </h2>
                        </header>
                        <span className="image featured">
                            <img src={pageData.blogImage.value.url} alt={pageData.title.value} />
                        </span>
                        <h3>
                            {pageData.subTitle.value}
                        </h3>
                        <p>
                            <XhtmlContent content={pageData.content.value} />
                        </p>
                    </article>

            </div>
        </div>
        </section>
    )
}

export default BlogPage;