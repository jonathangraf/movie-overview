import * as React from 'react';

interface MovieDiscoverList {
	results: any[];
	total_pages: number;
	total_results: number;
	page: number;
  }

export function useMovieList () {
	const [movieList, setMovieList] = React.useState<undefined | MovieDiscoverList>();
	React.useEffect(() => {
		const searchString = new URLSearchParams();
		searchString.append('page', '1');
		searchString.append('api_key', '60b2f8a827fdb2903a1de1a11e267365');

		const request = new Request(`https://api.themoviedb.org/3/discover/movie?${searchString.toString()}`);
		fetch(request)
		.then((response: any) => { 
		const reader = response.body.getReader()
		
		return reader.read()
		})
		.then(({ value }) => {
		const decoder = new TextDecoder();
		const data = JSON.parse(decoder.decode(value));
		
		setMovieList(data);
		})

	}, []);

	return [movieList];
}
