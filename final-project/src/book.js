import logo from "./images/Asset 16@4x.png"
function Booktable(){
    return (
      <div className="container">
      <header>
      <img alt="logo" src={logo} id="img" />
      </header>
    <h2>Table Booking Form</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required="" />
      </div>
      <button type="submit" className="button">Book Table</button>
    </form>
  </div>
);
}
export default Booktable;