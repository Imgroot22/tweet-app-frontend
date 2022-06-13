import { Link } from "react-router-dom";
import ProfileImage from "../../../UI/ProfileImage/ProfileImage";
import Tag from "../../../UI/Tag/Tag";

const Tweet = (props) => {
  let tweetMsg = [];
  let parMsg = "";
  let count = 0;
  props.message.split("").forEach((x) => {
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
  if (parMsg !== "") tweetMsg.push(parMsg);
  return (
    <div className="container pt-2 flex-wrap card ">
      <div className="hstack gap-2 mb-3">
        <div className="avatar">
          <a href="/#">
            <ProfileImage
              key={props.loginId}
              seed={props.loginId}
              className="rounded-circle bg-dark bg-opacity-50"
            />
          </a>
        </div>
        <div className="overflow-hidden ms-1">
          <Link
            className="text-decoration-none text-capitalize text-dark fw-bold mb-0"
            to={"../tweets/" + props.loginId}
          >
            {props.firstName + " " + props.lastName}
          </Link>
          <p className="mb-0 small text-truncate">
            {props.loginId} &middot; {getTimeDiff(props.lastModifiedDate)}
          </p>
        </div>
      </div>
      <div className="">
        <p className="">{tweetMsg}</p>
        <p>
          {props.tags.map((x, index) => (
            <Tag key={props.id + index}>{"#" + x + " "}</Tag>
          ))}
        </p>
      </div>
    </div>
  );
};

const getTimeDiff = (t) => {
  if (t == null) return "(--)";
  const timeDiffInMs = new Date() - new Date(t);
  const timeDiffInDays = timeDiffInMs / (1000 * 60 * 60 * 24);
  if (timeDiffInDays >= 1) return Math.round(timeDiffInDays) + "d";
  const timeDiffInHrs = timeDiffInDays * 24;
  if (timeDiffInHrs >= 1) return Math.round(timeDiffInHrs) + "h";
  const timeDiffInMins = timeDiffInHrs * 60;
  if (timeDiffInMins >= 1) return Math.round(timeDiffInMins) + "m";
  const timeDiffInSecs = timeDiffInMins * 60;
  return Math.round(timeDiffInSecs) + "s";
};

export default Tweet;
