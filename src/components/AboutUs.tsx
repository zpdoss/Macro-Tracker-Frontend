import Zach from '../assets/Zach.jpg';
import Arjun from '../assets/Arjun.jpg';
import Dylan from '../assets/Dylan.jpg';
import Luke from '../assets/Luke.jpg';
import Noah from '../assets/Noah.jpg';
import James from '../assets/James.jpg';

//style={{ margin: '100px' }}

/*function AboutUs()
{
    return(
        <>
            <h2>This Is the About Us Page</h2>

            <div id="bodyContainer">
                <div id = "container">
                    <div id="grid-container">
                        <div id="grid-item"><img src='../assets/Zach.jpg' alt="Zach"/><br/>Zach Doss</div>
                        <div id="grid-item"><img src='../assets/Noah.jpg'/><br/>Noah Bethel</div>
                        <div id="grid-item"><img src='../assets/Arjun.jpg'/><br/>Arjun Vooturi</div>
                        <div id="grid-item"><img src='../assets/Dylan.jpg'/><br/>Dylan Katchen</div>
                        <div id="grid-item"><img src='../assets/Luke.jpg'/><br/>Luke Reyes</div>
                        <div id="grid-item"><img src='../assets/James.jpg'/><br/>James Mims</div>
                    </div> 
                </div>
            </div>
        </>
    );
};
export default AboutUs;*/

function AboutUs()
{
    return(
        <>
            <h2>This Is the About Us Page</h2>

            <div id="bodyContainer">
                <div id = "container">
                    <div id="grid-container">
                        <div className="grid-item"><img src={Zach} style={{ width: '200px', }} /><br/>Zach Doss</div>
                        <div id="grid-item"><img src={James} style={{ width: '200px', }} /><br/>Zach Doss</div>
                        <div id="grid-item"><img src={Noah} style={{ width: '200px', }}/><br/>Zach Doss</div>
                        <div id="grid-item"><img src={Luke} style={{ width: '200px', }}/><br/>Zach Doss</div>
                        <div id="grid-item"><img src={Arjun} style={{ width: '200px', }}/><br/>Zach Doss</div>
                        <div id="grid-item"><img src={Dylan} style={{ width: '200px', }}/><br/>Zach Doss</div>


                       
                    </div> 
                </div>
            </div>
        </>
    );
};
export default AboutUs;