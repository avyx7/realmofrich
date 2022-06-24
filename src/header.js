import Navbar from "./navbar";
import style from "./index.module.css";


function Header() {
    return (
    <header className={style.appheader}>
      
        
        <Navbar/>
        <div className={style.bookcontainer}>
          {/*<img className="books" id = "first-book" src="IMG_0888.png"></img>
          <img className="books" id = "second-book" src="191794358.png"></img>*/}
        </div>
        <div className={style.headerstoryboard}>
          <div className={style.headertext} id ={style.h1}><span id = {style.backgroundwhite}>Unlimited Coaching</span> Tution courses
          <br/><span id={style.h2}>Solve challenges & Earn money</span>
          <br/><span id={style.h3}>Enter your email to get a magic chestbox</span></div>

          <div className={style.inputboxcontainer}>
            <div class={`${style.materialtextfield} ${style.blue}`}>
              <input type="text" required/>
              <label data-content="mobile number">Mobile number</label>
            </div>
            <div className={style.headerbutton} id={style.getstartedbutton}>Get Started</div>
          </div>
        </div>
        
    </header>
        );
}

export default Header;