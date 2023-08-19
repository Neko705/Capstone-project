
import Headlogo from './images/Asset 16@4x.png';
import img1 from './images/301998.jpg';
import img2 from './images/1291090.jpg';
import img3 from './images/653318.jpg';
import footImg from './images/Asset 20@4x.png';
function Home(){
    return (
        <>
    <header>
      <div>
        <img
        id="Headlogo"
        alt='Headlogo'
        src={Headlogo}
        height={90}
        />
      </div>
    </header>
    <br />
    <br />
    <main>
      <section>
        <div className="col-12 col-lg-6">
          <article>
            <img
              src={img1}
              alt="Images 1"
              height={250}
              className="img-fluid"
            />
            <h1>Our New Menu</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              minus distinctio sunt dolor laudantium? Non aut repudiandae, rerum
              esse et laudantium labore totam suscipit eveniet nesciunt hic
              libero iste quos?
            </p>
          </article>
        </div>
      </section>
      <section>
        <div className="col-12 col-lg-6">
          <article>
            <img
              src={img2}
              alt="Images 2"
              height={250}
              className="img-fluid"
            />
            <h1>Book a Table</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              officiis, accusamus error veniam ratione asperiores obcaecati ab,
              blanditiis vero quisquam nisi dolorem unde tempora voluptatem
              suscipit sint velit ex maiores!
            </p>
          </article>
        </div>
      </section>
      <section>
        <div className="col-12 col-lg-6">
          <article>
            <img
              src={img3}
              alt="Images 3"
              height={250}
              className="img-fluid"
            />
            <h1>Opening Hours</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              adipisci corrupti animi. Similique, iste numquam. Quasi
              necessitatibus fugiat quas, debitis dolores tempora, iste quisquam
              possimus nemo, perferendis eos doloribus similique.
            </p>
          </article>
        </div>
      </section>
    </main>
    <br />
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
  </>
  )
}
export default Home;