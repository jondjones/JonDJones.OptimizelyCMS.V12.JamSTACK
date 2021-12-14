import React from 'react'
import BlockComponent from '../__Components__/BlockComponent';
import { SettingsPageData } from '../../typescript-def/page-types';

interface FooterProps {
    settingsData : SettingsPageData;
}

const Footer: React.FC<FooterProps> = ({settingsData})  => {
    return (<section id="footer">
        {settingsData?.footer?.expandedValue.map((item, k) => {
            console.log('HomePage:mainContentArea', item);
            return <BlockComponent blockData={item} key={k} />
        })}
        <div id="copyright" className="container">
            <ul className="links">
                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </section>)
}

export default Footer
