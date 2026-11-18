async function load() {
    // requests.get('https://naver.com')
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko-kr')
    console.log(res)
    // Promise 객체 관련 (비동기)
    // 서버 응답처럼 시간이 걸리는 작업의 완료 결과를 나타내는 객체
    // 상태: pending(대기) → fulfilled(성공) 또는 rejected(실패)
    // .then()은 성공 결과, .catch()는 요청·처리 중 발생한 오류를 다룸
    // response.json()도 Promise를 반환하므로 다음 .then()에서 데이터를 받음
    // fetch는 404·500만으로 reject되지 않으므로 response.ok로 별도 확인
}

load()


