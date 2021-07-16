import react,{useEffect,useState} from 'react'; 

const Fetcher = (url) => {
    const [{ data, loading }, setData] = useState({ data: {}, loading: true });
    useEffect(async () => {
         fetch(url.toString())
         .then(val=>val.json())
         .then(val=>{
            console.log('val here ',val);
             setData({ data: val, loading: false });
         });
    }, [url]);
    return [data, loading];
};



export default Fetcher;