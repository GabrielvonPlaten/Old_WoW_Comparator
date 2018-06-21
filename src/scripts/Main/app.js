const API_KEY = 'cssxkvznfbce4tn3tqqw29q3ffd2n563';


let playerOne_Form = document.querySelector('#js-playerOne_Form'),
    playerTwo_Form = document.querySelector('#js-playerTwo_Form');

// Player One
playerOne_Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let playerOne_Realm = document.querySelector('#js-playerOne_Realm').value,
      playerOne_Name = document.querySelector('#js-playerOne_Name').value;

  const http_playerOne = new HTTPCall__PlayerOne;
  const ui_playerOne = new UI__PlayerOne;
  const ui_Message = new UIMessage;

  // Base Stats API
  if(playerOne_Realm === '' || playerOne_Name === '') {
    ui_Message.getMessage('Please fill in the fields.');
  } else {
    http_playerOne.get(`https://eu.api.battle.net/wow/character/${playerOne_Realm}/${playerOne_Name}?fields=stats&locale=en_GB&apikey=${API_KEY}`)
      .then(data => {
        console.log(data)
        ui_playerOne.avatar__PlayerOne(data)
        ui_playerOne.baseStats__PlayerOne(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
});

// Player TWO
playerTwo_Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let playerTwo_Realm = document.querySelector('#js-playerTwo_Realm').value,
      playerTwo_Name = document.querySelector('#js-playerTwo_Name').value;

      const http_playerTwo = new HTTPCall_PlayerTwo;
      const ui__PlayerTwo = new UI__PlayerTwo;
      const ui_Message = new UIMessage;

      if(playerTwo_Realm === '' || playerTwo_Name === '') {
        ui_Message.getMessage('Please fill in the fields.');
      } else {
        http_playerTwo.get(`https://eu.api.battle.net/wow/character/${playerTwo_Realm}/${playerTwo_Name}?fields=stats&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          ui__PlayerTwo.avatar__PlayerTwo(data)
          ui__PlayerTwo.baseStats__PlayerTwo(data);
        })
        .catch((err) => console.log(err));
      }
})

