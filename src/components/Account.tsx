import React, { useState, useEffect } from 'react';

function Account()
{
    const [message,setMessage] = useState('');
    const [calories,setCalories] = React.useState('');
    const [protein,setProtein] = React.useState('');
    const [carbs,setCarbs] = React.useState('');
    const [fats,setFats] = React.useState('');
    const [userId, setUserId] = useState('');
    //const [isEditing, setIsEditing] = useState(true); // Toggle between edit/view mode

    useEffect(() => {
        // Parse user_data array from local storage
        const userDataString = localStorage.getItem('user_data');
        if (userDataString) {
            const userDataArray = JSON.parse(userDataString);
            if (userDataArray && userDataArray.id) {
                setUserId(userDataArray.id); // Set the userId from user_data
            }
        }
    }, []);

    function handleSetCalories( e: any ) : void
    {
        setCalories( e.target.value );
    }

    function handleSetProtein( e: any ) : void
    {
        setProtein( e.target.value );
    }

    function handleSetCarbs( e: any ) : void
    {
        setCarbs( e.target.value );
    }

    function handleSetFats( e: any ) : void
    {
        setFats( e.target.value );
    }

    async function enterInfo(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('Button Test - Info should now be saved');

        const obj = {
            userId, 
            cal: Number(calories),
            carb: Number(carbs),
            prot: Number(protein),
            fat: Number(fats)
        };

        // Console log user information
        console.log("User ID:", userId);
        console.log("User Health Information:", obj);

        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/createuserhealth',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                setMessage('Health info saved\n');
                await displayUserHealth();
            }
            else if(res.message === "no duplicate UserHealth"){
                setMessage("No duplicate health info\n");
            }
            else{
                setMessage(res.message || "An error occurred sending the email.");
            }

        }
        catch(error:any)
        {
            alert(error.toString());
            return;
        }
    }

    async function displayUserHealth() : Promise<void>
    {
        try
        {
            //const obj = {userId};
            //var js = JSON.stringify(obj);

            console.log("USER ID FOR DISPLAY IS: ", userId);

            const url = 'http://COP4331-t23.xyz:5079/api/getuserhealth/' + userId;
            console.log("full api url: " + url);
            const response = await fetch(`${url}`,
                {method:'GET', headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());
            

            if(res.success){
                console.log("Parsed UserHealth data:", res.UserHealth);
                //console.log(res.UserHealth.cal);
                //console.log(res.UserHealth.prot);
                //console.log(res.UserHealth.carb);
                //console.log(res.UserHealth.fat);
            }
            else if(res.message === "userId format doesn't conform with schema"){
                setMessage("userId format doesn't conform with schema\n");
            }
            else{
                setMessage(res.message || "An error occurred sending the email.");
            }

        }
        catch(error:any)
        {
            alert(error.toString());
            return;
        }
    }

    function resetPass(event:any) : void
    {
        event.preventDefault();
        alert('Button Test - Password should be reset');
        window.location.href = '/NewPass'
    }

    return(
        <>
            <h2 id="accntTitle">Account Page</h2>

            <div id="accountDiv">
                
                <h3 id="accntGoals">Set your goals here:</h3>
                <label id="accntRow1" htmlFor="Calories">Calories:</label>
                <label htmlFor="Protein">Protein(g):</label>
                <br/>

                <input type="text" id="accntInput" placeholder="2400" onChange={handleSetCalories}/><span id="accntInputSpan">
                <input type="text" id="accntInput" placeholder="200" onChange={handleSetProtein}/></span><br />

                <label id="accntRow2" htmlFor="Carbs">Carbs(g):</label>
                <label htmlFor="Fats">Fats(g):</label>
                <br />

                <input type="text" id="accntInput" placeholder="150" onChange={handleSetCarbs}/><span id="accntInputSpan">
                <input type="text" id="accntInput" placeholder="70" onChange={handleSetFats}/></span><br />

                <span id="InfoRestult">{message}</span><br/>

                <input type="submit" id="accntButtons" className="buttons" value = "Save"
                onClick={enterInfo} />

                <input type="submit" id="accntButtons" className="buttons" value = "Edit" onClick={enterInfo}/>

                <input type="submit" id="accntButtons" className="buttons" value = "Delete" onClick={enterInfo}/>

                <input type="submit" id="loginButtons" className="buttons" value = "Reset Password"
                onClick={resetPass} />
            </div>
        </>
    );
};
export default Account;