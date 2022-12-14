import axiosInstance from "../config";

const { useEffect,useState } = require("react")

const useFetch = (URL) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect( () =>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axiosInstance.get(URL);
                setData(res.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();

    },[URL]);

    const refetch = async () => {
        setLoading(true);
        try {
            const res = await axiosInstance.get(URL);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    return {data, loading, error, refetch};
}
export default useFetch;