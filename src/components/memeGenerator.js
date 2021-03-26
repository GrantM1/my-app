import React from "react"
class memeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imglfip.com/1bij.jpg",
      allMemeImgs: []
    }
  }

  handelChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handelSubmit = event => {
    event.preventDefault()
    // reandom number
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    console.log(randMemeImg);
    // set randomImg to irl item grabbed
    this.setState({ randomImg: randMemeImg })
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        this.setState({ allMemeImgs: memes })
      })
  }


  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handelSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="here is topText"
            onChange={this.handelChange}
          />

          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="here is bottomText"
            onChange={this.handelChange}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div >
    )
  }

}
export default memeGenerator