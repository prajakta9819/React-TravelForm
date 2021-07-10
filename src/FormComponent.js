function FormComponent(props) {
  return (
    <main>
      <form>
        First Name:
        <input
          placeholder="First Name"
          name="fname"
          onChange={props.handleChange}
        />
        <br /> <br />
        Last Name:
        <input
          placeholder="Last Name"
          name="lname"
          onChange={props.handleChange}
        />
        <br /> <br />
        Age:
        <input placeholder="Age" name="age" onChange={props.handleChange} />
        <br /> <br />
        Gender:{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          checked={props.data.gender === "other"}
          onChange={props.handleChange}
        />
        Other
        <br />
        <br />
        Destination:
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value=""> Choose a destination</option>
          <option value="Bali">Bali</option>
          <option value="Greenland">Greenland</option>
          <option value="Prague">Prague</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Las Vegas">Las Vegas</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Iceland">Iceland</option>
          <option value="Tahiti">Tahiti</option>
        </select>
        <br />
        <br />
        Dietary restrictions:
        <input
          type="checkbox"
          name="vegan"
          checked={props.data.vegan}
          onChange={props.handleChange}
        />
        Vegan
        <br />
        <input
          type="checkbox"
          name="veg"
          checked={props.data.veg}
          onChange={props.handleChange}
        />
        Vegeterian
        <input
          type="checkbox"
          name="nonveg"
          checked={props.data.nonveg}
          onChange={props.handleChange}
        />
        Non-Vegeterian
        <br />
        <br />
        <button>Submit</button>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {props.data.fname} {props.data.lname}
        </p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>
          Your dietary restrictions:
          <p>Vegan? {props.data.vegan ? "Yes" : "No"}</p>
          <p>Vegeterian? {props.data.veg ? "Yes" : "No"}</p>
          <p>Non-Vegeterian? {props.data.nonveg ? "Yes" : "No"}</p>
        </p>
      </form>
    </main>
  );
}

export default FormComponent;
