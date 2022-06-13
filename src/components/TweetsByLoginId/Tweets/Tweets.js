import Tweet from "./Tweet/Tweet";

const Tweets = ({ tweets, ...props }) => {
  if (tweets.length === 0)
    return <p className="text-center fw-bold">No Tweets</p>;

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            {...props}
            deleteHandler={props.onDelete}
            updateHandler={props.onUpdate}
          />
        );
      })}
    </>
  );
};

export default Tweets;
