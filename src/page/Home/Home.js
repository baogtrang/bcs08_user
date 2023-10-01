import React from 'react'
import MovieList from './MovieList/MovieList'
import MovieTab from './MovieTab/MovieTab'

export default function Home() {
  

  return (
    <div className='space-y-10'>
      <MovieList>Danh sách phim</MovieList>
      <MovieTab/>
    </div>
  )
}
