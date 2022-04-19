import PointsStats from "./PointsStats"
import PointsForm from "./PointsForm"

function Container() {
    return (
        <div className="container mx-auto my-24 flex flex-col items-center space-y-6">
            <PointsStats />
            <PointsForm />
        </div>
    )
}

export default Container