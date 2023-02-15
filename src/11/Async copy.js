const Async = () => {

     const func = () => {
          console.log("함수명령")
     }
     console.log("명령1");
     console.log("명령2");
     console.log("명령3");
     
     // setTimeout(() => {
     //      console.log("타임아웃 명령1")
     // }, 1000);
     // setTimeout(() => {
     //      console.log("타임아웃 명령2")
     // }, 100);
     // setTimeout(() => {
     //      console.log("타임아웃 명령3")
     // }, 500);//231순서로 찍힘.

     setTimeout(() => {
          console.log("타임아웃 명령1");
          setTimeout(() => {
               console.log("타임아웃 명령2");
               setTimeout(() => {
                    console.log("타임아웃 명령3")
               }, 500);
          }, 100);
     }, 1000);
     
     
     return (
          <>
          </>
     );
}

export default Async;