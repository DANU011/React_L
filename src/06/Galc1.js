const Galc1 = (probs) => {
     
     let galc1 =[];

     for(let k in probs.galc1name ){
          galc1.push(<button className="galc1bt" onClick={()=>probs.selBt(k)}>{probs.galc1name[k]}</button>)
     }

     return(
          <div className="gc1">
          {galc1}
          </div>
     );
}
export default Galc1;

