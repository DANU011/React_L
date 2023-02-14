
const Galcard = ({ selcard }) => {
  let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];

  let selcardTag = [];
  if (Object.keys(selcard).length > 0) {
    selcardTag.push(<img src={selcard["galWebImageUrl"]} className="img" key="img"></img>);
    selcardTag.push(keys.map((item) =>
      <div className={item} key={item}>
        {item.includes("galPhotographyMonth") ? parseInt(selcard[item] / 100) + "." + ((selcard[item] % 100 < 10) ? "0" + selcard[item] % 100 : selcard[item] % 100) : selcard[item]}
      </div>));
  }

  // console.log(selcardTag)
  return (
    <div className="galcard">
      {selcardTag}
    </div>
  );
}

export default Galcard;

