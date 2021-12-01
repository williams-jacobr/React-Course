const User = function (props) {
  return (
    <div>
      <p>{props.username} ({props.age} year old)</p>
    </div>
  );
};

export default User;
