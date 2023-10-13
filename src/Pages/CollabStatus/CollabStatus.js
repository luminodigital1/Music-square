import Activities from "../../components/CollabPage/Activities/Activities";
import CollabHeader from "../../components/CollabPage/CollabHeader/CollabHeader";
import Details from "../../components/CollabPage/Details/Details";
import Support from "../../components/CollabPage/Support/Support";
import TrackCollab from "../../components/CollabPage/TrackCollab/TrackCollab";
import DeliveryTime from "../../components/CollabPage/DeliveryTime/DeliveryTime";
import "../Collab.css";
import CollabStatusPageHeader from "../../components/CollabStatusPage/CollabStatusPageHeader/CollabStatusPageHeader";
import CollabStatusHeader from "../../components/CollabStatusPage/CollabStatusHeader/CollabStatusHeader";
import CollabStatusDetails from "../../components/CollabStatusPage/CollabStatusDetails/CollabStatusDetails";
import CollabStatusActivities from "../../components/CollabStatusPage/CollabStatusActivities/CollabStatusActivities";

const CollabStatus = () => {

  return (
    <div>
        <CollabStatusPageHeader/>
        <div className="collab__container__main">
        <CollabStatusHeader/>

        <div className="collab__main">
            {/* Left Container */}

            <div className="left__main">
            <CollabStatusDetails/>
            <CollabStatusActivities/>
            </div>

            {/* Right Container */}

            <div className="right__main">
            <DeliveryTime />
            <TrackCollab />
            <Support />
            </div>
        </div>
        </div>
    </div>
  );
};

export default CollabStatus;
