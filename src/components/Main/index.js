import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './main.css';
import Initial from '../Initial';
import NotFound from '../NotFound';
import Loader from '../Loader';
import User from '../User';
import RepoCard from '../RepoCard';
import RepoNotFound from '../RepoNotFound';

function Main({ hideInitial, notfound, loading, userdata, repos }) {
  const [pageNumber, setPageNumber] = useState(0);
  const repoLength = repos.length;
  const reposPerPage = 4;
  const reposVisited = pageNumber * reposPerPage;


  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main">
      <div className="container h-full">
        {!hideInitial && <Initial />}
        {loading && <Loader />}
        {notfound && <NotFound />}
        {userdata.login && (
          <div className="main-wrapper">
            <User userdata={userdata} />
            {repoLength && (
              <div className="repo-wrapper">
                <div className="repo-header">{`Repositories (${repos.length})`}</div>
                {repos.slice(reposVisited, reposVisited + reposPerPage).map(repo => (<RepoCard repo={repo} key={repo.id} />))}
                <ReactPaginate onPageChange={changePage}
                  pageCount={Math.ceil(repoLength / 4)}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"} />
              </div>
            )}
            {!repoLength && <div className="repo-wrapper"><RepoNotFound /></div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
