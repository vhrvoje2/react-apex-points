import React from 'react'
import { useContext } from "react";
import { PointsContext } from "../context/PointsContext"


function PointsStats() {
    const { totalPoints, noGames } = useContext(PointsContext);

    return (
        <div className="flex flex-col justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-12">
            <div>
                <h2 className="text-bold text-center text-2xl">
                    Net Points Today
                </h2>
                <p className="text-center text-extrabold text-2xl">
                    {totalPoints}
                </p>
            </div>
            <div>
                <h2 className="text-bold text-center text-2xl">
                    No. of games played
                </h2>
                <p className="text-center text-extrabold text-2xl">
                    {noGames}
                </p>
            </div>
        </div>
    )
}

export default PointsStats