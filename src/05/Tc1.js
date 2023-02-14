const Tc1 = ({c1, selc1, setSelc1}) => {
     //대분류가 클릭되었을 때
     const handleSelect =(item)=>{
          setSelc1(item);
     }
     const c1Tag=c1.map((item)=>
     <div className={item===selc1 ? "tcardSel" : "tc1card"}  
     key={item} 
     onClick={()=>handleSelect(item)}>
          {item}
          </div>
     );

     /*const handleSelect =(item)=>{
          setSelc1(item);
     }
     const c1Tag=c1.map((item)=>
     <div className={item===selc1 ? "tcardSel" : "tc1card"}  
     key={item} 
     onClick={()=>handleSelect(item)}>
          {item}
          </div>
     ); */
     return (
          <div className="tc1" >
            <h2>대분류</h2>
               {c1Tag}
          </div>
     );
} 
export default Tc1;