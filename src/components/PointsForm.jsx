function PointsForm() {
    return (
        <div>
            <div className="space-x-6">
                <label htmlFor="rank" className="text-xl pl-5">Rank select:</label>
                <select name="rank" className="text-center w-44" id="rank">
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum" selected>Platinum</option>
                    <option value="diamond">Diamond</option>
                    <option value="master">Master</option>
                    <option value="apex_predator">Apex Predator</option>
                </select>
            </div>
            <div className="space-x-6">
                <label htmlFor="points" className="text-xl">Points earned:</label>
                <input type="number" className="text-center w-44" />
            </div>
        </div>
    )
}

export default PointsForm