import * as React from 'react';
import * as ReactDOM from 'react-dom';
import searchIcon from './img/search-icon.png';
import fbIcon from './img/fb-icon.png';
import twIcon from './img/tw-icon.png';

function Address({country, city, street, location}) {
    let googleMap = `https://www.google.com/maps/@${location.lat},${location.lng},18z`;
    return <div id="address">
        <address>Country: {country}</address>
        <address>City: {city}</address>
        <address>Street: {street}</address>
        <a href={googleMap} target="_blank">{googleMap}</a>
    </div>
}

function Header() {
    return <header>
        <a className="header-menu" href="#">menu</a>
        <div className="header-logo">
            <a href="#">dmt</a>
            <div>Design Meets Tech</div>
        </div>
        <div className="header-search">
            <input type="search" id="search" placeholder="search"/>
            <a href="#"><img src={searchIcon} alt="search"/></a>
        </div>
</header>
}

function Main() {
    return <main>
        <section className="section1">
            <article>
                <a className="article-name" href="#">home</a>
                <div className="article-header">Buster Bulb</div>
                <div className="article-text">
                    The first designer
                    LED bulb, finished 
                    in gold glass.
                </div>
                <a className="article-button" href="#">Read more</a>
            </article>
        </section>
        <section className="section2">
            <article className="a1">
                    <a className="article-name" href="#">accessories</a>
                    <div className="article-header">Peak</div>
                    <div className="article-text">
                        A playful pouch
                        with a trick up its
                        sleeve
                    </div>
                    <a className="article-button" href="#">Read more</a>
            </article>
            <article className="subscribe">
                    <div className="article-header">Good Things</div>
                    <div className="article-text">
                        ...<br/>
                        come to those who sign up
                        for our newsletter.
                    </div>
                    <input type="email" name="email" id="email" placeholder="Your email"/>
                    <a className="article-button" href="#">Subscribe</a>
                    <div className="article-text2">
                        We respect your privacy and we won’t
                        share your information.
                    </div>
            </article>
        </section>
        <section className="section3">
            <article className="a1">
                    <a className="article-name" href="#">cameras</a>
                    <div className="article-header">Leica M</div>
                    <a className="article-button" href="#">Review</a>
            </article>
            <article className="a2">
                    <a className="article-name" href="#">sound</a>
                    <div className="article-header">Trobla Amplifier</div>
                    <a className="article-button" href="#">Review</a>
            </article>
            <article className="a3">
                    <a className="article-name" href="#">cameras</a>
                    <div className="article-header">Leica D-Lux</div>
                    <div className="article-text">
                        Limited-edition DIesel
                        collaboration
                    </div>
                    <a className="article-button" href="#">Read More</a>
            </article>
        </section>
    </main>

}

function User({firstName, LastName, age, children}) {
    const addition = children
        ? <div style={{border: '1px dashed red'}}>{children}</div>
        : null;

    return (
        <div style={{ border: '1px solid black',
                      marginBottom: '15px',
                      padding: '5px'}}>
            <span>{firstName}</span> 
            <span>&nbsp;{LastName}</span><br/>
            He(she) is {age} years old
            {addition}
        </div>
    );
}

function Circle({color, children}) {
    const text = children
        ? children
        : null;
    return <div style={{
        background: `${color}`}} className="circle">{text}</div>
}

function Square({color, children}) {
    const text = children
        ? children
        : null;
    return <div className="square" style={{
        background: `${color}`}}>{text}</div>
}

function Footer() {
    return <footer>
        <Address country='Ukraine' city='Poltava' street='Steshenka lane' location={{lat: 49.5979715, lng: 34.5346919}}></Address>
        <User firstName="Illia" LastName="Kharlamov" age="19"></User>
        <div className="footer-icons">
            <Circle color='green'><img src={fbIcon} alt="Facebook"/></Circle>
            <Square color="red"><img src={twIcon} alt="Twitter"/></Square>
        </div>
    </footer>
}


//49.5979715,34.5346919
ReactDOM.render((
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
), document.getElementById('container'));
