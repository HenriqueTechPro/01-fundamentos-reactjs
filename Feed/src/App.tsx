import { Header } from "./components/Header";
import "./styles/global.css";
import styles from "./App.Module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

//author: {avatar_url:"", name: "", role""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Henrique Schneider",
      role: "Web Developer"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2023-11-18 22:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.istockphoto.com/id/679727680/pt/foto/studio-shot-of-young-muscular-handsome-man-against-gray-background.webp?s=2048x2048&w=is&k=20&c=fs_-PB7QZMqxkz5OezTtX_o8OVfnODzx2zoh9w5NAmY=",
      name: "Theo Schneider",
      role: "CEO"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2023-11-17 22:00:00")
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}  
                key={post.id}  
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
