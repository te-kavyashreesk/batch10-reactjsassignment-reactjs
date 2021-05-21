import React from "react";


const App=() =>{
  return <React.Fragment>
  
   <h1 className='text-center text-danger text-capitalized my-5'>quotes post</h1>
   {}
   

<div className="container">
  <div className="row row-cols-4">
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Because learning anything requires a lot of commitment, a little motivation can go a long way.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/202/300" class="card-img-top" alt="..."height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Two things are infinite: the universe and human stupidity; and I'm not sure about the universe</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/204/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead walk  beside me… just be my frien</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/206/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  </div>
</div>
  </React.Fragment> 
};
export default App;