const API_KEY = 'cssxkvznfbce4tn3tqqw29q3ffd2n563';


let playerOne_Form = document.querySelector('#js-playerOne_Form'),
    playerTwo_Form = document.querySelector('#js-playerTwo_Form');

// Player One
playerOne_Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let playerOne_Realm = document.querySelector('#js-playerOne_Realm').value,
      playerOne_Name = document.querySelector('#js-playerOne_Name').value;

  const http_playerOne = new HTTPCall__PlayerOne;
  const ui_P_One = new UI__PlayerOne;


  
  if(playerOne_Realm === '' || playerOne_Name === '') {
    ui_P_One.errorMessage('Please fill in both fields.', 'red');

  } else {
    ui_P_One.loading();
    http_playerOne.get_API(`https://eu.api.battle.net/wow/character/${playerOne_Realm}/${playerOne_Name}?fields=stats&locale=en_GB&apikey=${API_KEY}`)
      .then(data => {
        console.log(data)
        ui_P_One.avatar__PlayerOne(data)
        ui_P_One.baseStats__PlayerOne(data)
      })
      .catch(() => {
        ui_P_One.errorMessage('Wrong input or player not found.', 'red');
      });

      // Mounts
      http_playerOne.get_API(`https://eu.api.battle.net/wow/character/${playerOne_Realm}/${playerOne_Name}?fields=mounts&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          console.log(data)
          ui_P_One.getMounts__PlayerOne(data);
        });

      // Feed
      http_playerOne.get_API(`https://eu.api.battle.net/wow/character/${playerOne_Realm}/${playerOne_Name}?fields=feed&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          console.log(data)
          ui_P_One.getFeed__PlayerOne(data);
        })
  }
});

// Player TWO
playerTwo_Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let playerTwo_Realm = document.querySelector('#js-playerTwo_Realm').value,
      playerTwo_Name = document.querySelector('#js-playerTwo_Name').value;

      const http_playerTwo = new HTTPCall_PlayerTwo;
      const ui_P_Two = new UI__PlayerTwo;


      if(playerTwo_Realm === '' || playerTwo_Name === '') {
        ui_P_Two.errorMessage('Please fill in both fields.', 'red');

      } else {
        ui_P_Two.loading();
        http_playerTwo.get_API(`https://eu.api.battle.net/wow/character/${playerTwo_Realm}/${playerTwo_Name}?fields=stats&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          ui_P_Two.avatar__PlayerTwo(data)
          ui_P_Two.baseStats__PlayerTwo(data);
        })
        .catch(() => {
          ui_P_Two.errorMessage('Wrong input or player not found.', 'red');
        });

        // Mounts
        http_playerTwo.get_API(`https://eu.api.battle.net/wow/character/${playerTwo_Realm}/${playerTwo_Name}?fields=mounts&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          ui_P_Two.getMounts__PlayerTwo(data);
        });

        // Feed
        http_playerTwo.get_API(`https://eu.api.battle.net/wow/character/${playerTwo_Realm}/${playerTwo_Name}?fields=feed&locale=en_GB&apikey=${API_KEY}`)
        .then(data => {
          console.log(data)
          ui_P_Two.getFeed__PlayerTwo(data);
        })
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

