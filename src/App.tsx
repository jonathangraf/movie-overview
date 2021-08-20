import React from 'react';
import { useMovieList } from './hooks/useMovieList';
import { Card } from '@atoms/Card';

function App() {
  const [ movieList ] = useMovieList();

  return (
	<div>
		{!movieList ? '...loading' : 
			movieList.results.map((movie: any) => (
				<div key={movie.id}>
					<div>{movie.title}</div>
					<div>
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
					</div>
				</div>
			))
		}
	</div>
  );
}

export default App;
