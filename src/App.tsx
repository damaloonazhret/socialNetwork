import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Feed } from './components/Feed/Feed';
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
  return (
    <div className="app">
      <Header title="Social Network" />
      <main className="main-content">
        <Sidebar userName="Current User" />
        <Feed posts={mockPosts} />
      </main>
    </div>
  );
};
