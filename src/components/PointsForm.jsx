function PointsForm() {
    return (
        <div>
            <div className="space-x-6">
                <label htmlFor="rank" className="text-xl pl-5">Rank select:</label>
                <select name="rank" className="text-center w-44 focus:outline-none" id="rank" value="platinum">
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
                <input type="number" className="text-center w-44" placeholder="0" />
            </div>
            <div className="flex flex-row mt-6 md:flex-row md:space-y-0 items-center justify-around">
                <button className="font-semibold bg-apexRed w-28 py-3 rounded-lg hover:bg-apexRedDark hover:scale-105">Max Loss</button>
                <button className="font-semibold bg-apexRed w-28 py-3 rounded-lg hover:bg-apexRedDark hover:scale-105">Sum Points</button>
            </div>
        </div>
    )
}

export default PointsForm