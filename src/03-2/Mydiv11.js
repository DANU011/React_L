const Mydiv11 = (probs) => {
    const user=probs.user;
    console.log(probs);//probs는 obj로 넘어온다. 
     return(
          <div className="mydiv11">
               <h3 className="divh3">Mydiv11</h3>
               <p>
                    {user}
               </p>
               <p>
                    {probs.divname}
               </p>
          </div>
     );
}
export default Mydiv11;