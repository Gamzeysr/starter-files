import { ChangeEvent, useState } from "react";





export default function Search() {
    const API_KEY = process.env.REACT_APP_API_KEY;


    const [term, setTerm] = useState("");
    const [options, setOptions] = useState([])


    const getSearch = (value: string) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`)
            .then((res) => res.json())
            // .then((data) => console.log(data));
            .then((data) => setOptions(data));
    };




    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target.value.trim());
        setTerm(value);


        getSearch(value);

    };
    return (
        <div>
            <section>
                <h1>Weather App</h1>
                <p>Enter a place</p>
                <div>
                    <input type="text" value={term} onChange={handleChange} />
                    {/* term ile değerleri tutabileceğiz  */}

                    <ul>
                        {options.map((optionsCity))}
                    </ul>
                    <button>
                        Search
                    </button>
                </div>
            </section>





        </div>
    )
}
