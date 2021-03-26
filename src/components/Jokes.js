const Jokes = props =>
  <div>
    <h3 style={{ display: !props.question && "none" }}>Question: {props.question}</h3>
    <h3>Punchline: {props.punchline}</h3>

  </div>


export default Jokes;