import { useState, useEffect } from "react";
import { getFact } from '../services/fact';
export function useCatFact() {
    const [fact, setFact] = useState<string>('');
    const refreshFact = () => {
        getFact().then((newFact : string) => {
            setFact(newFact)
        })
    }
    useEffect(() => {
        refreshFact()
    },[])

    return {fact, refreshFact};
}