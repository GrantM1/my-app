const FormCompnents = props => {
  return (
    <main>
      <form>
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handelChange}
          placeholder="First name"></input>
        <br />
        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handelChange}
          placeholder="Last name"></input>
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handelChange}
          placeholder="Age"></input>
        <br />

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.data.gender === "male"}
            onChange={props.handelChange}
          /> Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.data.gender === "female"}
            onChange={props.handelChange}
          /> Female
        </label>
        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handelChange}
        >
          <option value="">-- Please Choose the destionation</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="north pole">North Pole</option>
          <option value="south pole">South Pole</option>
        </select>

        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handelChange}
            checked={props.data.isVegan}
          />is Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handelChange}
            checked={props.data.isKosher}
          /> is Kosher?
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseTolerant"
            onChange={props.handelChange}
            checked={props.data.isLactoseTolerant}
          /> is LactoseTolerant?
        </label>

        <br />
        <button>Submit</button>
      </form>
      <br />
      <h2>Entered information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender:  {props.data.gender}</p>
      <p>Your destination:  {props.data.destination}</p>
      <p>Your dietery restriction:</p>
      <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {props.data.isKosher ? "Yes" : "No"} </p>
      <p>lactose free: {props.data.isLactoseTolerant ? "Yes" : "No"}</p>

    </main>
  )
}

export default FormCompnents