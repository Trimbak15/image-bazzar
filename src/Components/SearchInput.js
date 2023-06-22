import React,{useState} from "react";
import axios from "axios";

// api = https://api.unsplash.com/
// ?client_id=YOUR_ACCESS_KEY
// RfUnoLkMCK-DC6PcQd5qNtMDn_mhqmWDGPELAqXfU48

const SearchInput = ({addImages}) =>{

const [searchItem, setSearchItem] = useState("");

function handleChnage() {
    axios.get("https://api.unsplash.com/search/photos", {
        params:{
            client_id: "RfUnoLkMCK-DC6PcQd5qNtMDn_mhqmWDGPELAqXfU48",
            // query was foregt to add
            query: searchItem
        }
    })
    .then(response=> addImages(response.data.results))
    .catch(err => console.log(err))
}

    return (
        <div className="input">
            <input type="text" placeholder="Search Something"
             onChange={(e) => setSearchItem(e.target.value)}
             />

             <button onClick={handleChnage}>Search</button>
        </div>
    )
}

export default SearchInput;