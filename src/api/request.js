import axios from 'axios'

export const getCities = () =>
    axios.get("https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/cities")

export const getBanners = () =>
    axios.get("https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/banners")