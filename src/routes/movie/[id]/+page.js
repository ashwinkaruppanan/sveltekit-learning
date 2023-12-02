export const ssr = false
export async function load({ params, fetch }) {
    let k = "28605d97b74c69140200b9d4f0f8c4c1";
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${k}`)
    const resData = await res.json();
    if (res.ok) {
        return resData
    }
}