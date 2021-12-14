import { ContentAreaItem } from '../../typescript-def/epi-properties';
import BannerBlock from '../BannerBlock/BannerBlock';
import BlogArea from '../BlogArea/BlogArea';
import CardContainerBlock from '../CardContainerBlock/CardContainerBlock';
import ContactUsBlock from '../ContactUsBlock/ContactUsBlock';

interface BlockComponentProps {
    blockData: ContentAreaItem
}

const BlockComponent: React.FC<BlockComponentProps> = ({ blockData }) => {

    const blockName = blockData.contentType[1];
    const templates = {
        BannerBlock: BannerBlock,
        BlogArea: BlogArea,
        CardContainerBlock: CardContainerBlock,
        ContactUsBlock: ContactUsBlock,
    };

    const RenderBody = templates[blockName];
    return RenderBody ? <RenderBody {...blockData} /> : null;
};

export default BlockComponent;