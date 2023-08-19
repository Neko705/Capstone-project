import logo from "./images/Asset 16@4x.png";
import footImg from './images/Asset 20@4x.png';
function Login(){
    return (
            <div>
              <header>
                {/*Add your website name or logo here*/}
                <img alt="logo" src={logo} id="img" />
                <p />
              </header>
              <nav>{/*Add your website navigation here*/}</nav>
              <main>
                <form action="">
                  <div className="card">
                    <br />
                    <div id="div1">
                      <label htmlFor="user_first_name">First name</label>
                      <br />
                      <input type="text" id="user_first_name" name="user_first_name" />
                    </div>
                    <div id="div2">
                      <label htmlFor="user_last_name">Last name</label>
                      <br />
                      <input type="text" id="user_last_name" name="user_last_name" />
                    </div>
                    <div id="div3">
                      <label htmlFor="user_email">Email</label>
                      <br />
                      <input type="email" id="user_email" name="user_email" />
                    </div>
                    <div id="div4">
                      <label htmlFor="user_pass">Password</label>
                      <br />
                      <input type="password" id="user_pass" name="user_pass" />
                    </div>
                    <div id="div5">
                      <label htmlFor="user_confirm_pass">Confirm password</label>
                      <br />
                      <input
                        type="password"
                        id="user_confirm_pass"
                        name="user_confirm_pass"
                      />
                    </div>
                  </div>
                  <div id="last_div">
                    <br />
                    <button type="submit">
                      <span>
                        <samp>Sign In</samp>
                      </span>
                    </button>
                  </div>
                </form>
              </main>
              <footer>
              <div>
                <img src={footImg} alt='footer' width={90} />
                </div>
                <div>
                <p>
              Contact:
              <br/>
              2395 Maldove Way,
              <br/>
              Chicago Illinois
              <br/>
              (629)-243-6827
              <br/>
              info@littlelemon.com
              </p>
              </div>
              </footer>
            </div>
    );
}
export default Login;