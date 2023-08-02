import React from "react";
import "./hero.css";
export const Hero = () => {
  return (
    <>
      <div className="flex">
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3Rqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="React"
          />
        </div>
        <div className="left">
          <p>
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like Thumbnail,
            LikeButton, and Video. Then combine them into entire screens, pages,
            and apps. React makes it painless to create interactive UIs. Design
            simple views for each state in your application, and React will
            efficiently update and render just the right components when your
            data changes. Declarative views make your code more predictable and
            easier to debug.
          </p>
        </div>
      </div>
    </>
  );
};
