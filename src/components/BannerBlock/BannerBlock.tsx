import React from "react";
import { PropertyLongString } from '../../typescript-def/epi-properties';
import { ContentLink } from "../../typescript-def/epi-objects";
import image from './banner.jpg'
export interface BannerBlockProps  {
    contentLink: ContentLink 
    id: any
    title: PropertyLongString
}

export const BannerBlock: React.FC<BannerBlockProps> = (item) => {
    return (
        
            <section id="banner" style={{  
                backgroundImage: "url(" + "https://cms12.jondjones.com/images/banner.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="container">
                     {item.title.value}
                </div>
            </section>
    );
};

export default BannerBlock;