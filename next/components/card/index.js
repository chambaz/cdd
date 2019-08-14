function Card(props) {
  return (
    <div className="card">
      <h2 className="card__heading">{props.heading}</h2>
      <p className="card__body">{props.body}</p>

      <a className="card__button" href={props.button.url}>
        {props.button.text}
      </a>
      <style jsx>{`
        .card {
          background: ${props.highlight ? '#3498db' : '#fff'};
          box-shadow: 0 10px 40px 0 rgba(25, 38, 45, 0.2);
          color: ${props.highlight ? '#fff' : '#000'};
          font-family: sans-serif;
          margin: auto auto 0;
          max-width: 320px;
          padding: 30px;
          transition: 0.3s;
        }

        .card:hover {
          transform: scale(1.03);
        }

        .card__heading {
          margin: 0 0 20px;
        }

        .card__body {
          line-height: 1.5;
          margin: 0 0 20px;
        }

        .card__button {
          background: ${props.highlight ? '#fff' : '#3498db'};
          border: solid 2px;
          border-color: ${props.highlight ? '#3498db' : '#fff'};
          color: ${props.highlight ? '#3498db' : '#fff'};
          display: inline-block;
          margin: 0;
          padding: 10px 20px;
          text-decoration: none;
          transition: 0.3s;
        }

        .card__button:hover {
          background: ${props.highlight ? '#3498db' : '#fff'};
          border-color: ${props.highlight ? '#fff' : '#3498db'};
          color: ${props.highlight ? '#fff' : '#3498db'};
        }
      `}</style>
    </div>
  )
}

export default Card
