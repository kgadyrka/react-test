import './App.css';
import {CoinsList} from "./components/CoinsList";
import {useEffect, useState} from "react";

function App() {

    const [coins, setCoins] = useState(null);

    useEffect(() => {
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=USD')
            .then(response => response.json())
            .then(data => {
                setCoins(data.coins);
            });
    }, []);

    return (
        <div>
            <CoinsList coins={coins}/>
        </div>
    );
}

export default App;
