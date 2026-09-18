import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideo, getGif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {

        if(!query) return

        const getData = async () => {

            try {

                dispatch(setLoading())

                let data = []

                if (activeTab == 'photos') {
                    let res = await fetchPhotos(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html

                    }))
                }
                if (activeTab == 'videos') {
                    let res = await fetchVideo(query)
                    data = res.videos
                        .map((item) => ({
                            id: item.id,
                            type: 'video',
                            title: item.user.name,
                            thumnail: item.image,
                            src: item.video_files[2].link,
                            url: item.url
                        }))
                }
                if (activeTab == 'GIFs') {
                    let res = await getGif(query)
                    console.log(res.data);
                    data = res.data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title,
                        thumnail: item.images.downsized.url,
                        src: item.images.original.url
                    }))
                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>

    return (
        <div className='flex h-[80%] justify-between w-full flex-wrap gap-6 overflow-auto p-10 px-10'>
            {results.map((item,idx)=> {
               return <div key={idx}> 
                <h1>
                 <ResultCard item={item}/>  
                </h1>
                 </div>
            }) }
        </div>
    )
}

export default ResultGrid