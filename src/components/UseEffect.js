import React from "react";
import { useEffect, useState } from "react";

// function UseEffect() {
//   const [num, setNum] = useState(0);
//   const [nums, setNums] = useState(0);
//   useEffect(() => {
//     alert("Clicked");
//   }, [num]);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         Click Me {num}
//       </button>
//       <button
//         onClick={() => {
//           setNums(nums + 1);
//         }}
//       >
//         Click Me {nums}
//       </button>
//     </div>
//   );
// }

function UseEffect() {
  // const [num, setNum] = useState(0);
  // const [nums, setNums] = useState(0);
  // useEffect(() => {
  //   alert("Clicked");
  // }, [num]);

  const [count, setCount] = useState(window.screen.width);
  const currentScreenWidth = () => {
    setCount(() => window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth)
    return () => {
      window.removeEventListener("resize", currentScreenWidth)
    }
    });

  return (
    <div>
      <h2>
        The size of the window is <span>{count}</span>
      </h2>
    </div>
  );
}

export default UseEffect;
