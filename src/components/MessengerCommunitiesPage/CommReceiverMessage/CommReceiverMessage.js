import { AiFillHeart, AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from 'react-icons/ai';

const CommReceiverMessage = ({pic, date, message, isLove, isLike, loveCount, likeCount, moreMessages }) => {
  return (
    <div
      className="receiver__message__container"
      style={{ marginBottom: isLove || isLike ? "0rem" : "1.3rem" }}
    >
        <div className="d-flex">
            <div className="receiver__message__container">
      <p className="date">{date}</p>
      <div className="message">
        <p>{message}</p>
      </div>
      <div className="d-flex">
      {isLike && (
        <div className="heart" style={{marginRight: 2, 
        border: 0,
        borderRadius: 4, 
        backgroundColor: "#EFEFF0",
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
        }}>
          <AiFillLike
            style={{
              color: "#fee500",
              fontSize: "20px",
            //   margin: 0,
            // marginTop: -15
            }}
          />
          <p style={{fontSize: 12, fontFamily: 'GilroyLight',marginTop: 15}} >{likeCount}</p>
        </div>
      )}
      {isLove && (
        <div className="heart" style={{marginRight: 2, 
            border: 0,
            borderRadius: 4, 
            backgroundColor: "#EFEFF0",
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
          <AiFillHeart
            style={{
              color: "#ff0000",
              fontSize: "20px",
              margin: 0,
            }}
          />
          <p style={{fontSize: 12, fontFamily: 'GilroyLight',marginTop: 15}} >{loveCount}</p>
        </div>
      )}
      </div>

      {moreMessages &&
        moreMessages.map((mesg, index) => (
          <div className="message" key={index} style={{ marginTop: "3px" }}>
            <p>{mesg}</p>
          </div>
        ))}
        </div>
        <img src={pic} alt="" height="50px" width="50px" style={{padding: 2, borderRadius: 50}} />
    </div>
    </div>
  );
};

export default CommReceiverMessage;
