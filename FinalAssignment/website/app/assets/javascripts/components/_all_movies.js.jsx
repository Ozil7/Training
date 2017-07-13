class AllMovies extends React.Component
{

	render()
	{
		var movies = this.props.movies.map((movie) => 
		{
			return(
				<div key={movie.id}>
					<h3> {movie.name} </h3>
					<p> {movie.overview} </p>
					<h3> {movie.runtime} </h3>
					<h3> {movie.release_date} </h3>
				</div>	
			)
		})
		return(
			<div>
				{movies}
			</div>
		)
	}
}