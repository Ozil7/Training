class MovieList extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { movieList: [] };
	}

	render()
	{
		var movieList;
		var link = "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=a47f6e93a831114c8715eeedbc10adc3";

		$.get(link, function(data) { 
		 this.setState({
        movieList: data.results
      });
			
		}.bind(this) ); 

		var movies = this.state.movieList.map((movie) =>
		{

			return(
			<div key={movie.id}>
				<h3> {movie.title} </h3>
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

		
