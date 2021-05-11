import './user.css';
import followers from "../../img/followers.png";
import following from "../../img/following.png";

function User({ userdata }) {
  const onClickHandler = e => {
    window.open(`${userdata.html_url}`, '_blank')
  };

  return (
    <div className="user-wrapper">
      <img src={userdata.avatar_url} className="user-img" alt="user" />
      <div className="user-name">{userdata.name} </div>
      <div className="user-login" onClick={onClickHandler}>{userdata.login} </div>
      <div className="user-fol">
        <div className="follow"> <img src={followers} alt="followers" className="follow-img" /> <span className="follow-text">{userdata.followers} followers</span></div>
        <div className="follow"> <img src={following} alt="following" className="follow-img" /> <span className="follow-text">{userdata.following} following</span></div>
      </div>
    </div>
  );
}

export default User;
