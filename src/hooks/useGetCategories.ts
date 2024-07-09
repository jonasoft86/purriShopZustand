import { useState , useEffect } from 'react'

const useGetCategories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getCategories()
    }, [])

    const getCategories = async() => {
        try {
            setLoading(true)
            const res = await fetch('https://fakestoreapi.com/products/categories');
        
            if(res.ok){
                const data = await res.json()
                setCategories(data)
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
        }
    };
    return { categories, loading}
};

export default useGetCategories