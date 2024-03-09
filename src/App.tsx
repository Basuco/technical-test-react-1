import './App.css';
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from "./hooks/useCatImage";

export default function App() {
    const { fact, refreshFact } = useCatFact();
    const { image } = useCatImage({ fact });

    const handleClick = () => {
        refreshFact();
    }
    return (
        <main>
            <button onClick={handleClick}>Click here to get a new cat</button>
            <section>
                {fact && <p>{fact}</p>}
                {image && <img src={image} alt={`Image extracted using the first word ${fact}`}/>}
            </section>
        </main>
    )
}