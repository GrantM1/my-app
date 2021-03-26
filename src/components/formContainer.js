import React from "react"
import FormComponents from "./formComponent"
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      inKosher: false,
      isLactoseTolerant: false
    }
    this.handelChange = this.handelChange.bind(this)
  }

  handelChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      })
  }

  render() {
    return (
      <FormComponents
        handelChange={this.handelChange}
        firstName={this.state.firstName}
        data={this.state}
      />
    )

  }
}


export default Form