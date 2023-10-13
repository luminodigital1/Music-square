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
import CollabStatusDsActivities from "../../components/CollabStatusDsPage/CollabStatusDsActivities/CollabStatusDsActivities";
import CollabStatusCsActivities from "../../components/CollabStatusCsPage/CollabStatusCsActivities/CollabStatusCsActivities";
import CollabCompletedHeader from "../../components/CollabCompletedPage/CollabCompletedHeader/CollabCompletedHeader";
import CollabCompletedActivities from "../../components/CollabCompletedPage/CollabCompletedActivities/CollabCompletedAcctivities";
import CollabCompletedTrackCollab from "../../components/CollabCompletedPage/CollabCompletedTractCollab/CollabCompletedTrackCollab";

const CollabCompleted = () => {
  return (
    <div>
        <CollabStatusPageHeader/>
        <div className="collab__container__main">
        <CollabCompletedHeader/>

        <div className="collab__main">
            {/* Left Container */}

            <div className="left__main">
            <CollabStatusDetails/>
            <CollabCompletedActivities/>
            </div>

            {/* Right Container */}

            <div className="right__main">
            <DeliveryTime />
            <CollabCompletedTrackCollab/>
            <Support />
            </div>
        </div>
        </div>
    </div>
  );
};

export default CollabCompleted;
