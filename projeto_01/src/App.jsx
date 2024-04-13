import { useState } from "react";
import Post, { PostComponent } from "./post";

export function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <Post
        author="Henrique Schneider"
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi id natus atque a illum possimus, facere sed, voluptate odit consectetur nostrum corporis est quam adipisci odio. Eos, temporibus ex!"
      />
      <PostComponent
        author="Henrique Legal"
        content="Um post Legal"
      />
    </>
  );
}
