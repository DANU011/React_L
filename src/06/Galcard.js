const Galcard = (probs) => {
   
     return (
          <div className="gcd">
               <div className="images"><img src={probs.selcard["galWebImageUrl"] } className="img"/>
               </div>
               <div className="gcdtext">
               <div className="galTitle">{probs.selcard["galTitle"]}</div>
               <div className="galPhotographyLocation">{probs.selcard["galPhotographyLocation"]}</div>
               <div className="galPhotographer">{probs.selcard["galPhotographer"]}</div>
               <div className="galSearchKeyword">{probs.selcard["galSearchKeyword"]}</div>
               </div>
          </div>
     );
};
export default Galcard;