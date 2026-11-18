let movies = []

async function load() {
    // requests.get('https://naver.com')
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=ko-kr',
        { headers: { Authorization: `Bearer ${ TMDB_TOKEN }` } })
    // console.log(res) => 응답이 바로 옴
    // json()을 붙이면 Promise
    // console.log(res.json())
    // await를 붙임
    // console.log(await res.json())

    // Promise 객체 관련 (비동기)
    // 서버 응답처럼 시간이 걸리는 작업의 완료 결과를 나타내는 객체
    // 상태: pending(대기) → fulfilled(성공) 또는 rejected(실패)
    // .then()은 성공 결과, .catch()는 요청·처리 중 발생한 오류를 다룸
    // response.json()도 Promise를 반환하므로 다음 .then()에서 데이터를 받음
    // fetch는 404·500만으로 reject되지 않으므로 response.ok로 별도 확인

    const data = await res.json()
    // console.log(data.total_results, data.results[0])
    movies = data.results
    render()
}

load()

const cardBox = document.querySelector('#cards')

function render() {

    const result = movies.map(m => `
        <a>
            <img src="https://image.tmdb.org/t/p/w200${m.poster_path}">
            <h3>${m.title}</h3>
            <p>${m.vote_average}</p>
        </a>    
    `).join('')

    cardBox.innerHTML = result
}


