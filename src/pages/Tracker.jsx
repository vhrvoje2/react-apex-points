import Container from "../components/Container"
import GameHistory from "../components/GameHistory"

import { PointsContext } from "../context/PointsContext"
import { useState } from "react";

function Tracker() {
    const [totalPoints, setTotalPoints] = useState(0);
    const [rank, setRank] = useState("platinum");
    const [noGames, setNoGames] = useState(0);
    const maxLossData = {
        "bronze": 0,
        "silver": 12,
        "gold": 24,
        "platinum": 36,
        "diamond": 48,
        "master": 60,
        "apex_predator": 60,
    }

    return (
        <>
            <PointsContext.Provider value={{
                totalPoints,
                setTotalPoints,
                rank,
                setRank,
                noGames,
                setNoGames,
                maxLossData,
            }}>
                <Container />
                <GameHistory />
            </PointsContext.Provider>
        </>
    )
}

export default Tracker