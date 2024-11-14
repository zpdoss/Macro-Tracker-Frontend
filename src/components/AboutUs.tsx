import Zach from '../assets/Zach.jpg';
import Arjun from '../assets/Arjun.jpg';
import Dylan from '../assets/Dylan.jpg';
import Luke from '../assets/Luke.jpg';
import Noah from '../assets/Noah.jpg';
import James from '../assets/James.jpg';


function AboutUs()
{
    return(
        <>
            <h2 id="aboutTitle">About Us</h2>

            <div className="row">
                <div className="column">
                    <div className="card">
                    <br/><img className="aboutUs" src={Arjun} style={{ width: '165px', }} />
                    <div className="container">
                        <h2 id="name">Arjun Vooturi</h2>
                        <p className="aboutUsTitle">PM/App</p>
                    </div>
                    </div>
                </div>
         
                <div className="column">
                    <div className="card">
                    <br/><img className="aboutUs" src={Dylan} style={{ width: '165px', }} />
                    <div className="container">
                        <h2 id="name">Dylan Katchen</h2>
                        <p className="aboutUsTitle">API</p>
                    </div>
                    </div>
                </div>
            
                <div className="column">
                    <div className="card">
                    <br/> <img className="aboutUs" src={Noah} style={{ width: '165px', }} />
                    <div className="container">
                        <h2 id="name">Noah Bethel</h2>
                        <p className="aboutUsTitle">API</p>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <br/><img className="aboutUs" src={Luke} style={{ width: '165px', }} />
                    <div className="container">
                        <h2 id="name">Luke Reyes</h2>
                        <p className="aboutUsTitle">Frontend</p>
                    </div>
                    </div>
                </div>
            

                <div className="column">
                    <div className="card">
                    <br/><img className="aboutUs" src={Zach} style={{ width: '165px', }} />
                    <div className="container">
                        <h2 id="name">Zach Doss</h2>
                        <p className="aboutUsTitle">Frontend/Server</p>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <br/><img className="aboutUs" src={James} style={{ width: '165px', }} />
                    <div className="container">
                        <h2 id="name">James Mims</h2>
                        <p className="aboutUsTitle">Frontend</p>
                    </div>
                    </div>
                </div>
            </div>   
        </>
    );
};
export default AboutUs;

