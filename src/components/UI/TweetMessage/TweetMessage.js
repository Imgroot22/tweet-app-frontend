import Tag from "../Tag/Tag";

const TweetMessage = (props) => {
  let tweetMsg = [];
  let parMsg = "";
  let count = 0;
  props.msg.split("").forEach((x) => {
    if (x === "@" || x === "#") {
      tweetMsg.push(parMsg);
      parMsg = "";
    } else if (parMsg !== "" && x === " ") {
      if (parMsg.indexOf("@") > -1 || parMsg.indexOf("#") > -1) {
        tweetMsg.push(<Tag key={"inMsg" + props.id + count++}>{parMsg}</Tag>);
        parMsg = "";
      } else {
        // tweetMsg.push(parMsg);
      }
    }
    parMsg += x;
  });
  if (parMsg !== "") {
    if (parMsg.indexOf("@") > -1 || parMsg.indexOf("#") > -1) {
      tweetMsg.push(<Tag key={"inMsg" + props.id + count++}>{parMsg}</Tag>);
    } else {
      tweetMsg.push(parMsg);
    }
  }

  return <p>{tweetMsg}</p>;
};

export default TweetMessage;
