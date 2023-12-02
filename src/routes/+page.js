export const ssr = false
export async function load({ fetch }) {
    let k = "28605d97b74c69140200b9d4f0f8c4c1";
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${k}`;
    const res = await fetch(url);
    const resData = await res.json();
    if (res.ok) {
        return resData
    }

}