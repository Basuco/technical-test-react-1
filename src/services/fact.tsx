const API_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
interface FactApi {
    fact: string;
    length: number;
}
export const getFact =  async () => {
    const res = await fetch(API_ENDPOINT_RANDOM_FACT);
    const data: FactApi = await res.json();
    const { fact } = data;
    return fact;
}