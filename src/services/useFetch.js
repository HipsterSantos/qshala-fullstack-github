import react,{useEffect,useState} from 'react'; 

const Fetcher = ({ op }, { url }) => {
    const [{ data, loading }, setData] = useState({ data: {}, loading: true });
    Retrieve(url, setData);

    return [data, loading];
};
export const useFetch  = Fetcher;

function Retrieve(url, setData) {
    useEffect(async () => {
        let response = await fetch(url);
        setData({ data: response, loading: false });
    }, [url]);
}
