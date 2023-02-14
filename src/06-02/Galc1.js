
const Galc1 = ({ galt, selgalt, setSelgalt }) => {

    const handleSelect = (item) => {
      console.log(item);
      setSelgalt(item);
    }
    let v = 0;
    const galtTag = galt.map((item) =>
      <div className={item === selgalt ? "galtTagSel" : "galtTag"} key={item + v++} onClick={() => handleSelect(item)}>{item}</div>
    )
  
    return (
      <div className="galc1">
        {galtTag}
      </div>
    );
  }
  
  export default Galc1;

