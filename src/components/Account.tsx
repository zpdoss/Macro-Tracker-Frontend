import React, { useState, useEffect } from 'react';

function Account()
{
    const [message,setMessage] = useState('');
    const [calories,setCalories] = React.useState('');
    const [protein,setProtein] = React.useState('');
    const [carbs,setCarbs] = React.useState('');
    const [fats,setFats] = React.useState('');
    const [userId, setUserId] = useState('');

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
                <label htmlFor="Height">Calories:</label><span id="accntRow1">
                <label htmlFor="Weight">Protien(g):</label>
                </span><br/>

                <input type="text" id="registerInput" placeholder="2400" onChange={handleSetCalories}/><span id="accntInputSpan">
                <input type="text" id="registerInput" placeholder="200" onChange={handleSetProtein}/></span><br />

                <label htmlFor="Age">Carbs(g):</label><span id="accntRow2">
                <label htmlFor="Sex">Fats(g):</label></span><br />

                <input type="text" id="registerInput" placeholder="150" onChange={handleSetCarbs}/><span id="accntInputSpan">
                <input type="text" id="registerInput" placeholder="70" onChange={handleSetFats}/></span><br />

                <input type="submit" id="accntButtons" className="buttons" value = "Save"
                onClick={enterInfo} />
                <span id="InfoRestult">{message}</span>

                <input type="submit" id="accntButtons" className="buttons" value = "Edit" onClick={enterInfo}/>

                <input type="submit" id="accntButtons" className="buttons" value = "Delete" onClick={enterInfo}/>

                <input type="submit" id="loginButtons" className="buttons" value = "Reset Password"
                onClick={resetPass} />
            </div>
        </>
    );
};
export default Account;