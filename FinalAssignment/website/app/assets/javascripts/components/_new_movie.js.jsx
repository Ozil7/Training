class NewMovie extends React.Component
{
	handleClick()
	{
		var name = (this.refs.name).value;
		var overview = (this.refs.overview).value;
		var release_date = (this.refs.release_date).value;
		var runtime = (this.refs.runtime).value;

		$.ajax({
			url: '/movies',
			type: 'POST',
			data: {movie: {name: name, overview: overview, release_date: release_date, runtime: runtime}},
			success: (movie) => {
				this.props.handleSubmit(movie);
			}
		});
	}

	render()
	{
		return (
		<div>
			<input ref='name' placeholder='Enter name of movie:' />
			<input ref='overview' placeholder='Enter a description' />
			<input ref='release_date' placeholder='Enter release date' />
			<input ref='runtime' placeholder='Enter runtime' />
				<button onClick={this.handleClick}>Submit</button>
		</div>
		)
	}
}