export const getGif = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ikPQaJtjAd2Pw2lPJjbjCVBjn0QpF52S&q=${category}&limit=20`;

    const response = await fetch(url);

    const {data =[]} = await response.json();

    const gifs = data.map(image => ({
        id:image.id,
        title: image.title,
        url: image.images.downsized_medium.url


    }));
   

    return gifs;
  
}