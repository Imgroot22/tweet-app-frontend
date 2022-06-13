import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTweetsByLoginId } from "../../services/tweet-service";
import { useAuth } from "../../store/auth-context";
import Tweets from "./Tweets/Tweets";

const TweetsByLoginId = () => {
  const param = useParams();
  const auth = useAuth();
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getTweetsByLoginId(
      auth.token,
      param.loginId,
      (data) => {
        setTweets(data);
      },
      (err) => {
        setError(err.data);
      }
    );
  }, [param.loginId, auth.token]);

  const onDeleteHandler = (tweet) => {
    setTweets((prev) => prev.filter((x) => x.id !== tweet.id));
  };

  return (
    <div className="mt-3">
      {error ? (
        error
      ) : auth.user.loginId === param.loginId ? (
        <Tweets tweets={tweets} editEnabled={true} onDelete={onDeleteHandler} />
      ) : (
        <Tweets tweets={tweets} editEnabled={false} />
      )}
    </div>
  );
};

export default TweetsByLoginId;
