import Replies from "./Replies/Replies";
import ReplyForm from "./ReplyForm/ReplyForm";
import classes from "./TweetWithReply.module.css";

const TweetWithReply = (props) => {
  const tweet = props.tweet;
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-5 d-flex gap-2">
          <img
            className="rounded-circle"
            src="https://picsum.photos/50"
            alt="profile"
            width="50"
            height="50"
          />
          <div className="w-100">
            <span className="">
              {"name!!"}
              <span className="text-muted">
                @{tweet.loginId} &middot; {getTimeDiff(tweet.lastModifiedDate)}
              </span>
            </span>
            <p className="">{tweet.message}</p>
          </div>
        </div>
        <div className={`col-sm-1 d-none d-sm-flex ${classes["vr-h"]}`}>
          <div className="vr"></div>
        </div>
        <div className={`col-12 col-sm-6`}>
          <Replies replies={tweet.replies} />
          <ReplyForm onSubmit={props.postReply} />
        </div>
      </div>
    </>
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

export default TweetWithReply;
