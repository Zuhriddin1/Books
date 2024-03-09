const Cards = (props) => {
  const { imageLink, author, country, language, title, year } = props.data;
  // let.
  return (
    <>
      <div className="card w-96 glass gap-4">
        <figure>
          <img src={imageLink} alt="Img yoq link hatto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-white">{title}</h2>
          <p>{author}</p>
          <p>{country}</p>
          <p>{language}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              style={{ backgroundColor: year > 1780 ? "red" : "blue" }}
            >
              {year}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
