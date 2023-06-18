import { Header } from "./components/header";
import { Post } from "./components/post";
import { SideBar } from "./components/sidebar";
import { parseISO } from "date-fns";

import styles from "./App.module.css";

import "./global.css";
import posts from "../posts.json";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              data={{ ...post, publishedAt: parseISO(post.publishedAt) }}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
