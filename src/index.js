import { from, mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs';

console.log('Hello');

const pokemonId$ = from([1, 5, 6]);

pokemonId$
	.pipe(
		mergeMap((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)),
		mergeMap((response) => response.json())
	)
	.subscribe((name) => console.log(name));
