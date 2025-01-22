function Form() {
  return (
    <div>
      <h2>Contact Information</h2>
      <form action="submit">
        <label htmlFor="">First & Last name</label>
        <input type="text" placeholder="Enter first & last name" />
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder="Enter email address" />
        <label htmlFor="">Country</label>
        <input type="text" />
        <label htmlFor="">Postal Code</label>
        <input type="text" />
        <button>Continue</button>
      </form>
    </div>
  );
}

export default Form;
