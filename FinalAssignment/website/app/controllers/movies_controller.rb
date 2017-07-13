class MoviesController < BaseController
	def index
		respond_with Movie.all
	end 

	def create
		respond_with Movie.create(movie_params)
	end 

	def destroy
		respond_with Movie.destroy(params[:id])
	end

	def update
		movie = Movie.find(params["id"])
		movie.update_attributes(movie_params)
		respond_with movie, json: movie
	end

	private

	def movie_params
		params.require(:movie).permit(:id, :name, :overview, :release_date, :runtime)
	end
end
