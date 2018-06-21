const API_KEY = 'cssxkvznfbce4tn3tqqw29q3ffd2n563';


let playerOne_Form = document.querySelector('#js-playerOne_Form'),
    playerTwo_Form = document.querySelector('#js-playerTwo_Form');

// Player One
playerOne_Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let playerOne_Realm = document.querySelector('#js-playerOne_Realm').value,
      playerOne_Name = document.querySelector('#js-playerOne_Name').value;

  const http_playerOne = new HTTPCall__PlayerOne;
  const ui_one = new UI__PlayerOne;
  const ui_Message = new UIMessage;

  // Base Stats API
  if(playerOne_Realm === '' || playerOne_Name === '') {
    ui_Message.getMessage('Please fill in the fields.');
  } else {
    http_playerOne.get_API(`https://eu.api.battle.net/wow/character/${playerOne_Realm}/${playerOne_Name}?fields=stats&locale=en_GB&apikey=${API_KEY}`)
      .then(data => {
        console.log(data)
        ui_one.avatar__PlayerOne(data)
        ui_one.baseStats__PlayerOne(data)
      })
      .catch((err) => {
        console.log(err)
      });

      // Mounts
      http_playerOne.get_API(`https://eu.api.battle.net/wow/character/${playerOne_Realm}/${playerOne_Name}?fields=mounts&locale=en_GB&apikey=${API_KEY}`)
        .then(data => console.log(data))
        .catch((err) => console.log(err));
  }
});

// Player TWO
playerTwo_Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let playerTwo_Realm = document.querySelector('#js-playerTwo_Realm').value,
      playerTwo_Name = document.querySelector('#js-playerTwo_Name').value;

      const http_playerTwo = new HTTPCall_PlayerTwo;
      const ui__two = new UI__PlayerTwo;
      const ui_Message = new UIMessage;

      if(playerTwo_Realm === '' || playerTwo_Name === '') {
        ui_Message.getMessage('Please fill in the fields.');
      } else {
        http_playerTwo.get_API(`https://eu.api.battle.net/wow/character/${playerTwo_Realm}/${playerTwo_Name}?fields=stats&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          ui__two.avatar__PlayerTwo(data)
          ui__two.baseStats__PlayerTwo(data);
        })
        .catch((err) => console.log(err));
      }
});



const ui_state = new UI_State;

// States Buttons
let btnFeed   = document.querySelector('#js-feed'),
    btnMounts = document.querySelector('#js-mounts'),
    btnStats  = document.querySelector('#js-stats'),
    btnProg   = document.querySelector('#js-prog'),
    btnGear   = document.querySelector('#js-gear');
  
btnFeed.addEventListener('click', () => {
  ui_state.showFeed();
});

btnMounts.addEventListener('click', () => {
  ui_state.showMounts();
});

btnStats.addEventListener('click', () => {
  ui_state.showStats();
});

btnProg.addEventListener('click', () => {
  ui_state.showProg();
});

btnGear.addEventListener('click', () => {
  ui_state.showGear();
});

