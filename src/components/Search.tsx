
import {useState} from 'react';

export const Search = ({setResults}: any) => {
    const [input, setInput] = useState("");
        
    const fetchData = (value: any) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(json=>{
                const results = json.filter((user: any)=>{
                    return (
                        value && 
                        user && 
                        user.name && 
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });

        };

        const handleChange = (value: any) =>{
            setInput(value)
            fetchData(value)
        };

    

    return(
        <input 
            className="diarySearch" 
            type="text"
            placeholder="Apple" 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

