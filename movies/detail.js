// url 파라미터에서 id에 해당하는 값 가져오는 코드
const movieId = new URLSearchParams(location.search).get('id')
const box = document.querySelector('#detail')

async function load() {
    // fetch가 얼마나 걸릴 지 모르므로 
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        { headers: { Authorization: `Bearer ${TMDB_TOKEN}` } }
    )
    const movie = await res.json()
    box.innerHTML = `
        <h1>${ movie.title }</h1>
        <img src=https://image.tmdb.org/t/p/w200${movie.poster_path}>
    `
}
load()