import React from 'react'
import { SeoMetaData, MenuItemPageData } from "../../typescript-def/page-types";

interface HeaderProps {
    pageData? : SeoMetaData;
    menuData : Array<MenuItemPageData>;
}

const Header: React.FC<HeaderProps> = ({pageData, menuData}) => {
    console.log("Header:", pageData, menuData)
    return (<section id="header">
        <div className="container">
                <h1 id="logo">
                    <a href={pageData.contentLink.url}>
                        {pageData.name}
                    </a>
                </h1>

                {pageData?.metaDescrption?.value 
                    && <p>{pageData?.metaDescrption?.value}</p>}

                <nav id="nav">
                    <ul>
                        {menuData.map((item, key) => {
                            return (<li key={key}>
                                <a href={item?.menuUrl?.value} className={item?.menuIcon?.value}>
                                    <span>
                                        {item.name}
                                    </span>
                                </a>

                                {item?.subLinks.value.length !== 0 && 
                                    <ul>
                                        {item?.subLinks?.value?.map((subLink, key) => {
                                                return (<li key={key}>
                                                    <a href={subLink?.href}>
                                                        {subLink.text}
                                                    </a>
                                                </li>)
                                             })
                                        }
                                    </ul>
                                }
                            </li>)
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Header
