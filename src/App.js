import { BackgroundColor } from "chalk";
import React from "react";
import Wave from "react-wavify";
function App() {
  return (
   <div style={{paddingTop:"37.3rem", backgroundColor:"#FF6700"}}>
     <Wave 
     fill="#1277b0"
     paused={false}
     options={{
       height:40,
       amplitude:30,
       speed:0.55,
       points:9
     }}
   />
   </div>
  );
}
export default App
