export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '95008ed291msh8ee92ab18300c6cp10c945jsn9c1180eb0dfe',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '22b0ed24f4mshfb58497360f7fd0p17a1bcjsnacf616524973',
    },
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}