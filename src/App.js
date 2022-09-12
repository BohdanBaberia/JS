
import './App.css';

const Navlist = ({text,url}) =>
<ul className="nav-list">
    <li className="nav-item">
    <a href="{url}" className="nav-link">Головна</a>
    </li>
    <li className="nav-item">
    <a href="{url}" className="nav-link">Про автора</a>
    </li>
    <li className="nav-item">
    <a href="{url}" className="nav-link">Роботи</a>
    </li>
    <li className="nav-item">
    <a href="{url}" className="nav-link">Процес</a>
    </li>
    <li className="nav-item">
    <a href="{url}" className="nav-link">Контакти</a>
    </li>
</ul>

const Skilllist = ({text})=>
<>
    <div className="skill-item">
        <span className="skill-title">adobe photoshop</span>
        <div className="skill-loader">
            <div className="skill-load"></div>
        </div>
    </div>
    <div className="skill-item">
        <span className="skill-title">adobe photoshop</span>
        <div className="skill-loader">
            <div className="skill-load"></div>
        </div>
    </div>
    <div className="skill-item">
        <span className="skill-title">adobe photoshop</span>
        <div className="skill-loader">
          <div className="skill-load" /*style="width:75%;"*/></div>
        </div>
    </div>
</>    

function App() {
  return (
    <div class="wrapper">
    <header class="header">
        <div class="header-wrap">
            <div class="header-logo"> 
              <span>WD</span>
            </div>
            <nav class="nav">
                 <label class="opener" for="burger" >
                     <span></span>
                 </label>
                 <input class="burger" /*type="checkbox" name="#" id="burger"*/ />
                 <Navlist></Navlist>  
            </nav>
    </div>
    </header>
    <main class="main">
         <section class="section-content">
            <div class="container">
                <div class="content-col">
                   <img src="/images/Frame.png" alt="frame" class="content-image" />
                </div>   
                <div class="content-row">
                    <h1 class="phare">Дизайн і верстка</h1>
                    <p class="text-word">Lorem Ipsum - це текст-"риба", який часто використовується в друку та веб-дизайні. Lorem Ipsum є стандартним "рибом" для текстів на латиниці початку XVI століття</p>
                    <a href="#">
                        <div class="button">Написати мені</div>
                    </a> 
                </div>
            </div>
         </section>           
        <div class="container">
            <div class="about-me">
               <h2 class="me">Про мене</h2>
                <p class="text-me">Lorem Ipsum - це текст-"риба", який часто використовується в друку та веб-дизайні. Lorem Ipsum є стандартним "рибом" для текстів на латиниці початку XVI століття</p>
            </div>
        </div>
        <div class="projects">  
            <div class="container">
                <img src="/images/projects.png" alt="project1" class="projects-example first" />
                <img src="/images/projects.png" alt="project1" class="projects-example second" />
                <img src="/images/projects.png" alt="project1" class="projects-example third" />
                <img src="/images/projects.png" alt="project1" class="projects-example fourth" />
                <img src="/images/projects.png" alt="project1" class="projects-example" />
                <img src="/images/projects.png" alt="project1" class="projects-example" />
            </div>      
        </div>
        <section class="section-skills">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="skill-holder">
                            <header class="header-section">
                                <h2 class="section-title">Мої навики</h2>
                            </header>
                            <Skilllist></Skilllist>
                        </div>
                    </div>
                        <div class="col">
                            <div class="col-img" /*style="background-image: url(/images/denis.png);"*/></div>
                        </div>
                    
                </div>
            </div>
        </section>
        <section class="section-work">
            <div class="container">
                <div class="cont-work">
                    <h2 class="how-work">Як я працюю</h2>
                    <p class="text-work">Lorem Ipsum - це текст-"риба", який часто використовується в друку та веб-дизайні. Lorem Ipsum є стандартним "рибом" для текстів на латиниці початку XVI століття</p>
                </div>
                <div class="cont-img" >
                    <img src="/images/video.png" alt="video" class="img-box" /> 
                    <a href="#" class="play-box">
                      <img src="/images/play.png" alt="play" class="play-size" />
                    </a> 
                </div>
            </div>
        </section>
        <section class="section-gallery">
            <div class="gallery-list">
                <a href="#" class="gallery-item" /*style="background-image: url(/images/list.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/computer.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/list.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/computer.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/list.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/computer.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/list.jpg);"*/></a>
                <a href="#" class="gallery-item" /*style="background-image: url(/images/computer.jpg);"*/></a>
            </div>
        </section>
        <section class="image-list">
            <div class="container">
                <img src="/images/microsoft.png" alt="img1" class="content-microsoft" />
                <img src="/images/microsoft.png" alt="img2" class="content-microsoft" />
                <img src="/images/microsoft.png" alt="img3" class="content-microsoft" />
                <img src="/images/microsoft.png" alt="img4" class="content-microsoft" />
            </div>
        </section>
      
        <section class="site">
            <div class="container">
                <div class="site-container">
                    <div class="site-text">
                        <h2 class="want-site">Бажаєте сайт?</h2>
                        <p class="text-site">Lorem Ipsum - це текст-"риба", який часто використовується в друку та веб-дизайні. Lorem Ipsum є стандартним "рибом" для текстів на латиниці початку XVI століття</p>
                    </div>
                    <div class="site-offer">
                        <input type="text" class="user-name" placeholder="Ваше ім'я" />
                        <input type="text" class="user-mail" placeholder="Ваш e-mail" />
                        <input type="text" class="user-message" placeholder="Повідомлення" />
                        <a href="#">
                            <div class="button">Відправити</div>
                        </a> 
                    </div>
                </div>
            </div>
        </section>
    </main>
   <footer class="footer">
    <div class="container">
        <div class="footer-name">
            <div class="footer-list">
                <h3 class="name">Іван Іванов</h3>
                <p class="law">(c).2018.Всі права захищені</p>
            </div>
            
        </div>
        <div class="footer-name">
            <img src="/images/instagram.png" alt="instagram" class="insta-img" />
            <img src="/images/instagram.png" alt="instagram" class="insta-img" />
            <img src="/images/instagram.png" alt="instagram" class="insta-img" />
        </div>
    </div>
    </footer>
    </div>

  );
}

export default App;
