import { useEffect, useState } from "react";
import './App.css';
const API_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const API_ENDPOINT_IMAGE = `https://cataas.com/cat/says/`;
const API_ENDPOINT_IMAGE_PREFIX = `https://cataas.com`;

interface FactApi {
    fact: string;
    length: number;
}
export default function App() {
    const [fact, setFact] = useState<string>('')
    const [image, setImage] = useState('')
    const [factError, setFactError] = useState('')
    useEffect(() => {
        fetch(API_ENDPOINT_RANDOM_FACT)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error fetching fact')
            }
            return res.json()
        })
        .then((data: FactApi) => {
            const { fact } = data;
            setFact(fact);
            const firstThreeWords = fact.split(' ').slice(0, 3).join(' ');
            setImage(`${API_ENDPOINT_IMAGE}${firstThreeWords}`)
        }).catch((error) => {
            setFactError(error);
        })
    }, [])

    // Api changed and now doesn't return the parameter 'url'

    // useEffect(() => {
    //     if (!fact) return;
    //     const firstThreeWords = fact.split(' ').slice(0, 3).join(' ');
    //     fetch(`${API_ENDPOINT_IMAGE}${firstThreeWords}?size=50&color=red&json=true`)
    //     .then(res => res.json())
    //     .then(data => {
    //         const { url } = data;
    //         setImage(`${API_ENDPOINT_IMAGE_PREFIX}${url}`)
    //     })
    // }, [fact]);
    return (
        <main>
            <h1>Cat's app</h1>
            <section>
                {fact && <p>{fact}</p>}
                {image && <img src={image} alt={`Image extracted using the first word ${fact}`}/>}
            </section>
            {factError && <p>{factError}</p>}
        </main>
    )
}