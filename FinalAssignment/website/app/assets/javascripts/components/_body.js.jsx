class Body extends React.Component
{
	constructor(props)
	{
		super(props);
		 this.state = { movies: [] };
	}

	componentDidMount()
	{
		$.getJSON('movies.json', (response) => {this.setState({movies: response})} );
	}

	handleSubmit(movie)
	{
		var newState = this.state.movies.concat(movie)
		this.setState({ movies: newState });
	}

	render()
	{
		return (
			<div>
				<NewMovie handleSubmit={this.handleSubmit} />
				<AllMovies movies={this.state.movies} />
			</div>
		)
	}
}