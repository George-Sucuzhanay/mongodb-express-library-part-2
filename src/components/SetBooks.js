export default function SetBooks({isbn, author, genres, imageLink, title, year}){
    return(
        <div>
            <img src={imageLink} alt="" />
            <h1>{title}, {year}</h1>
            <h2>By: {author}</h2>
            <h2>Genres: {genres}</h2>
            <h3>ISBN: {isbn}</h3>
            <br></br>
        </div>
    )
}