import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Feed } from './components/Feed/Feed';
import { useCurrentRoute } from './hooks/useCurrentRoute';
import './App.css';

const mockPosts = [
  {
    id: 1,
    userName: 'John Doe',
    timeAgo: '2 hours ago',
    content: 'This is a sample post content...',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    timeAgo: '3 hours ago',
    content: 'Another interesting post...',
  },
];

export const App = () => {
  const currentRoute = useCurrentRoute();

  const renderContent = () => {
    switch (currentRoute) {
      case '/profile':
        return <div>Profile Page Content</div>;
      case '/messages':
        return <div>Messages Page Content</div>;
      default:
        return <Feed posts={mockPosts} />;
    }
  };

  return (
    <div className="app">
      <Header title="Social Network" />
      <main className="main-content">
        <Sidebar userName="Current User" />
        {renderContent()}
      </main>
    </div>
  );
};
