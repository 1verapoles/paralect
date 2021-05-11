import './repocard.css';

function RepoCard({ repo }) {
  const onClickRepoHandler = e => {
    window.open(`${repo.html_url}`, '_blank')
  };
  return (
    <div className="repocard">
      <div className="repocard-title" onClick={onClickRepoHandler}>{repo.name}</div>
      <div className="repocard-desc">{repo.description}</div>
    </div>
  );
}

export default RepoCard;
