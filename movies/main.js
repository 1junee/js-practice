let movies = []

async function load() {
    // requests.get('https://naver.com')
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=ko-kr',
        { headers: { Authorization: `Bearer ${ TMDB_TOKEN }` } })
    // Promise 객체 (비동기): 작업의 완료 결과를 나타냄 — 대기 → 성공/실패
    // await fetch(): 응답 받기 / await res.json(): 본문을 읽어 데이터로 변환
    // res.json()은 한 번만 호출하고, 결과를 data에 저장해 재사용
    // .then()은 성공, .catch()는 오류 처리 (HTTP 오류는 res.ok로 별도 확인)

    const data = await res.json()
    // console.log(data.total_results, data.results[0])
    movies = data.results
    render()
}

load()

const cardBox = document.querySelector('#cards')

function render() {

    const result = movies.map(m => `
        <a class='card' href='detail.html?id=${m.id}'>
            <img src="https://image.tmdb.org/t/p/w200${m.poster_path}">
            <h3>${m.title}</h3>
            <p>${m.vote_average}</p>
        </a>    
    `).join('')

    cardBox.innerHTML = result
}


