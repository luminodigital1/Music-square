import { AiFillHeart } from "react-icons/ai";

const CommSenderMessage = ({pic, date, message, isLove, moreMessages }) => {
  return (
    <div className="d-flex ">
        <img src={pic} alt="" height="50px" width="50px" style={{padding: 2, borderRadius: 50}} />
    <div
      className="sender__message__container"
      style={{ marginBottom: isLove ? "0rem" : "1.3rem" , width: "100%"}}
    >
      <p className="date">{date}</p>
      <div className="message">
        <p>{message}</p>
      </div>
      {isLove && (
        <div className="heart">
          <AiFillHeart
            style={{
              color: "#ff0000",
              fontSize: "20px",
              margin: 0,
            }}
          />
        </div>
      )}
      {moreMessages &&
        moreMessages.map((mesg, index) => (
          <div className="message" key={index} style={{ marginTop: "3px" }}>
            <p>{mesg}</p>
          </div>
        ))}
    </div>
    </div>
  );
};

export default CommSenderMessage;
