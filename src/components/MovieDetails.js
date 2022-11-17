function MovieDetails({ title, genre, rating, runtime, year, fullDescription }) {
  return (
    <div>
      <h1>Details</h1>
      <span>Title: {title}</span>
      <br />
      <span>Rating: {rating} out of 10</span>
      <br />
      <span>Runtime: {runtime} minutes</span>
      <br />
      <span>Year: {year}</span>
      <br />
      <h3>Description</h3>
      <span>{fullDescription}</span>
      <br />
      <h3>Genre</h3>
      <ul>
        {genre.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
