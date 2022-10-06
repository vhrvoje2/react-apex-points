import { useContext, useState, useRef } from "react";
import { PointsContext } from "../context/PointsContext"

function PointsForm() {
    const {
        totalPoints,
        setTotalPoints,
        rank,
        setRank,
        noGames,
        setNoGames,
        maxLossData
    } = useContext(PointsContext);
    const [newPoints, setNewPoints] = useState(0);

    const inputRef = useRef(null);

    const updateStats = () => {
        setTotalPoints(totalPoints + newPoints);
        setRank(rank);
        setNoGames(noGames + 1);
        setNewPoints(0);
        inputRef.current.focus();
    }

    const updateStatsMaxLoss = () => {
        let lossPoints = maxLossData[rank];
        setTotalPoints(totalPoints - lossPoints);
        setRank(rank);
        setNoGames(noGames + 1);
        setNewPoints(0);
        inputRef.current.focus();
    }

    const onChangeNewPoints = (e) => {
        let points = +e.target.value;

        if (points > 255) {
            setNewPoints(255);
        }
        else {
            setNewPoints(points);
        }
    }

    return (
        <div>
            <div className="space-x-6">
                <label htmlFor="rank" className="text-xl pl-5">Rank select:</label>
                <select name="rank" className="text-center w-44 focus:outline-none" id="rank" value={rank} onChange={(e) => setRank(e.target.value)}>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                    <option value="diamond">Diamond</option>
                    <option value="master">Master</option>
                    <option value="apex_predator">Apex Predator</option>
                </select>
            </div>
            <div className="space-x-6">
                <label htmlFor="points" className="text-xl">Points earned:</label>
                <input type="number" ref={inputRef} className="text-center w-44" placeholder="0" value={newPoints} onChange={onChangeNewPoints} />
            </div>
            <div className="flex flex-row mt-6 md:flex-row md:space-y-0 items-center justify-around">
                <button className="font-semibold bg-apexRed w-28 py-3 rounded-lg hover:bg-apexRedDark hover:scale-105" onClick={updateStatsMaxLoss}>Max Loss</button>
                <button className="font-semibold bg-apexRed w-28 py-3 rounded-lg hover:bg-apexRedDark hover:scale-105" onClick={updateStats}>Sum Points</button>
            </div>
        </div>
    )
}

export default PointsForm