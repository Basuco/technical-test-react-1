import { useEffect, useState } from "react";
interface Props {
    fact: string;
}
const API_ENDPOINT_IMAGE = `https://cataas.com/cat/says/`;
export function useCatImage({ fact } : Props) {
    const [image, setImage] = useState('');

    useEffect(() => {
        if (!fact) return;
        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ');
        setImage(`${API_ENDPOINT_IMAGE}${firstThreeWords}`)
    }, [fact]);

    return {
        image
    }
}