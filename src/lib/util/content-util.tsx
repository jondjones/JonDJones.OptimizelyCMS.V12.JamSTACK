export const cleanseUrls = (urlCollection) => {
    return urlCollection?.map(item =>  cleanseUrl(item));
};

export const cleanseUrl = (url) => {
    return url.replace('/:80/', '');
};
