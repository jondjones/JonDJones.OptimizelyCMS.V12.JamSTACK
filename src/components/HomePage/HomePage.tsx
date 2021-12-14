import BlockComponent from '../__Components__/BlockComponent';
import { NextPage } from 'next'
import { HomePageData } from '../../typescript-def/page-types';
import { cloudflareGetApiData } from '../../lib/api/cloudflare'

interface HomePageProps {
    pageData? : HomePageData;
    data?: string;
}

const HomePage: NextPage<HomePageProps> = ({ pageData, data}) => {
    console.log('HomePage:pageData', pageData.mainContentArea);
    return (
        <main>
            <div>
                {pageData?.mainContentArea.expandedValue.map((item, k) => {
                    return <BlockComponent blockData={item} key={k} />
                })}
            </div>
            <div>
                Cloudflare Data = {data}
            </div>
        </main>
   )
}

HomePage.getInitialProps = async ({ req }) => {
    const data = await cloudflareGetApiData();
    console.log('cdata', data)
    return {
        data: data
    };
}

export default HomePage;