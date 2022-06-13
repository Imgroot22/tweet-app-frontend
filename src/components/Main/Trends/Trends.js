import { useEffect, useState } from "react";
import { getAllTweets } from "../../../services/tweet-service";
import { useAuth } from "../../../store/auth-context";
import Card from "../../UI/Card/Card";
import Tweet from "./Tweet/Tweet";

const Trends = () => {
  const [trendingTweets, setTrendingTweets] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    getAllTweets(
      auth.token,
      (data) => {
        const filteredTrendingTweet = data
          .filter(
            (x) =>
              new Date().getTime() - new Date(x.lastModifiedDate).getTime() <=
              86400000
          )
          .sort(
            (a, b) =>
              b.likes.length +
              b.replies.length -
              a.likes.length -
              a.replies.length
          )
          .filter((_, i) => i < 5);
        console.log(filteredTrendingTweet);
        setTrendingTweets(filteredTrendingTweet);
      },
      () => {}
    );
  }, [auth.token]);

  return (
    <Card title="Trending Tweets">
      {trendingTweets.map((user) => (
        <Tweet key={user.id} {...user} />
      ))}
    </Card>
  );
};

export default Trends;
