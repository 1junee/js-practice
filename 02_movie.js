// from fastapi import FastAPI
import { nowPlaying, genres, details } from './00_data.js'

// console.log(nowPlaying)

// 현재 상영중인
const movies = nowPlaying.results
const first = movies[0]
// console.log(first)

// 첫번째 영화의 제목, 개봉일, 평점 출력
// console.log(`${first.title} (${first.release_date}) 평점 : ${first.vote_average}`)

// 한 페이지의 영화 수, 전체 영화 수
// console.log(movies.length, nowPlaying.total_results)


// map
// const 새로운목록 = 배열.map(하나 => 값)
// python => map(lambda x: 2*x, myArray)
const myArray = [1, 2, 3]
const result = myArray.map(n => n * 2)
// console.log(result)

// 영화 제목만 배열로 출력
const titleArray = movies.map(movie => movie.title)
// console.log(titleArray)


// filter
// movies.filter((movie) => { return movie.vote_average > 7 })

// console.log(movies.filter(movie => movie.vote_average > 8))
// console.log(movies.filter(movie => movie.vote_average > 8).map(movie => movie.title))


// find
const g = genres.find(genre => genre.id == 878)
// console.log(g)


// 평점이 높은 순 3편
// 원래는 배열로 끝남
// console.log(movies)
// movies라는 배열을 전개
// console.log(...movies)
// movies라는 배열을 전개한 후 새로운 배열 만들기 (원본을 유지하기 위해)

// [...movies]로 배열을 복사하고, b점수 - a점수를 반환해 평점 높은 순으로 정렬 (중괄호가 없어 자동 반환)
// console.log([...movies].sort( (a, b) => b.vote_average - a.vote_average ))


// 평점이 높은 순 3편
const sortedMovies = [...movies].sort( (a, b) => b.vote_average - a.vote_average )
const top3 = sortedMovies.slice(0, 3)
// console.log(top3.map(m => m.title))


// 구조 분해
// console.log(first)
const { id, title, vote_average } = first
// const id = first.id
// ...

console.log(id, title, vote_average)


// 폴2 영화의 감독들
const fall = details[0]
const direct = fall.credits.crew.filter((crew) => { return crew.job == 'Director' }).map(crew => crew.name)
// console.log(direct)


// first.wish = true
const wished = { ...first, wish: true }
// console.log(wished.wish)
// console.log(wished)


const youtubeKey = details[1].videos.results.find(v => v.type == 'Trailer').key
console.log(youtubeKey)

// 값이 있는지 없는지 체크?
const findResult = details[2].videos.results.find(v => v.type == 'Trailer')
if (findResult) {
    console.log(findResult.key)
}
else {
    console.log('none')
}
console.log(findResult || '없음')
