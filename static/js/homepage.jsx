"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p class='greeting'>Hello! Welcome to the Site!</p>
      <a href="/cards" class= 'next-link'>Click here</a><br></br>
      <img src='/static/img/balloonicorn.jpg' />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
