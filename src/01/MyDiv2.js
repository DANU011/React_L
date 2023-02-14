

const MyDiv2 = () => {
  const myName = 'KIM DANU';
  const myGit = 'https://github.com/DANU011';
  console.log(myName);

  return (
    <div>
     <p>{myName}입니다.</p>
     <p>Github : <a href={myGit}> {myGit}</a></p>
    </div>
  );
}

export default MyDiv2;