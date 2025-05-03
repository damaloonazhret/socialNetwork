import './App.css';

export const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Social Network</h1>
        <nav className="nav">
          <button className="nav-button">Home</button>
          <button className="nav-button">Profile</button>
          <button className="nav-button">Messages</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="sidebar">
          <div className="user-profile">
            <div className="avatar"></div>
            <h3>User Name</h3>
          </div>
          <nav className="side-nav">
            <button>Friends</button>
            <button>Groups</button>
            <button>Events</button>
          </nav>
        </div>

        <div className="feed">
          <div className="post">
            <div className="post-header">
              <div className="post-avatar"></div>
              <div className="post-info">
                <h4>User Name</h4>
                <span>2 hours ago</span>
              </div>
            </div>
            <p className="post-content">This is a sample post content...</p>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
