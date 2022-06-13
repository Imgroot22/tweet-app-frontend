const Reply = (props) => {
  return (
    <div className="w-100">
      {props.index !== 0 && <hr />}
      <p>{props.reply.userLoginId}</p>
      <p>{props.reply.message}</p>
    </div>
  );
};

export default Reply;
