const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzU8-lZlRfkV3nj0RzAZdrQ&part=snippet%2Cid&order=date&maxResults=12';
const content=null||document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c349e9221mshe790a40a069d6ddp1ba603jsneae16faec164',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function FetchData(urlApi)
{
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}
(async () =>
{
    try
        {
        const videos = await FetchData(API);
        console.log(videos);

        let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">

        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,8).join('')}
    `;
    content.innerHTML=view;
    console.log(videos.items[2]);
    }
    catch (error)
    {
        console.error(`This is a error ${error}`);
    }
})();
