import PointsStats from "./PointsStats"
import PointsForm from "./PointsForm"

import logo from "../assets/logo.png"

function Container() {
    return (
        <div className="container mx-auto my-32 flex flex-col items-center space-y-6">
            <img src={logo} alt="Apex Logo" className="w-32 h-32" />
            <PointsStats />
            <PointsForm />
        </div>
    )
}

export default Container