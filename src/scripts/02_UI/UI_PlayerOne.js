class UI__PlayerOne {
  constructor() {
    this.realInput = document.querySelector('#js-playerOne_Realm').value;

    this.avatarImage = document.querySelector('#UI-avatar__playerOne');
    this.statsContainer = document.querySelector('#UI-mainStats__playerOne');
    this.mountsContainer = document.querySelector('#UI-mounts__playerOne');
    this.gearContainer = document.querySelector('#UI-gear__playerOne');
    this.feedContainer = document.querySelector('#UI-feed__playerOne');
    this.progContainer = document.querySelector('#UI-progress__playerOne');
    
    this.errContainer = document.querySelector('#UI-error__playerOne');
    
    this.spinner = document.querySelector('#UI-spinner__PlayerOne');

  }

  loading() {
    let spinner = this.spinner;

    spinner.style.display = 'block';
  }

  avatar__PlayerOne(data) {
    let spinner = this.spinner;
    let avatarContainer = this.avatarImage;
    let output = '';

    output += `
      <img src=http://render-eu.worldofwarcraft.com/character/${data.thumbnail}>
      <br>
      <h2>${data.name}</h2>
    `;  

    avatarContainer.innerHTML = output;

    spinner.style.display = 'none';
    this.clearErr();
  }

  baseStats__PlayerOne(data) {
    let statsContainer = this.statsContainer;
    let output = '';

    output += `
    <span class="baseStat">Base Stat</span>
    <ul>
      <li>Mastery<span class="statNumber">${data.stats.mastery}</span></li>
      <li>Strength<span class="statNumber">${data.stats.str}</span></li>
      <li>Agility<span class="statNumber">${data.stats.agi}</span></li>
      <li>Stamina<span class="statNumber">${data.stats.sta}</span></li>
      <li>Intellect<span class="statNumber">${data.stats.int}</span></li>
      <li>Armor<span class="statNumber">${data.stats.armor}</span></li>
      <li>Versatility<span class="statNumber">${data.stats.versatility}</span></li>
    </ul>
    <br>
    <span class="baseStat">Defense</span>
      <ul>
        <li>Dodge<span class="statNumber">${data.stats.dodge}</span></li>
        <li>Parry<span class="statNumber">${data.stats.parry}</span></li>
        <li>Block<span class="statNumber">${data.stats.block}</span></li>
      </ul>
    <br>
    <span class="baseStat">Melee / Ranged</span>
    <ul>
      <li>Crit<span class="statNumber">${data.stats.crit}</span></li>
      <li>Haste Rating<span class="statNumber">${data.stats.hasteRating}</span></li>
    </ul>
    <br>
    <span class="baseStat">Caster Info</span>
    <ul>
      <li>MP5 out:<span class="statNumber">${data.stats.mana5Combat}</span></li>
      <li>MP5 in<span class="statNumber">${data.stats.mana5}</span></li>
      <li>Spell Crit<span class="statNumber">${data.stats.spellCrit}</span></li>
      <li>Spell Crit Rating<span class="statNumber">${data.stats.spellCritRating}</span></li>
      <li>Haste<span class="statNumber">${data.stats.haste}</span></li>
    </ul>
    `;

    statsContainer.innerHTML = output;
    };

    getMounts__PlayerOne(data) {
      let container = this.mountsContainer;
      let output = '';

      data.mounts.collected.forEach((mount) => {
        if(mount.qualityId === 4) {
          output += `
          <li><div class="mounts--epic"></div><span>${mount.name}</span><img src="https://wow.zamimg.com/images/wow/icons/large/${mount.icon}.jpg"></li>
          `;
        } else if(mount.qualityId === 3) {
          output += `
          <li><div class="mounts--rare"></div><span>${mount.name}</span><img src="https://wow.zamimg.com/images/wow/icons/large/${mount.icon}.jpg"></li>
          `;
        } else if(mount.qualityId === 1) {
          output += `
          <li><div class="mounts--common"></div><span>${mount.name}</span><img src="https://wow.zamimg.com/images/wow/icons/large/${mount.icon}.jpg"></li>
          `;
        };
      });

      container.innerHTML = `
        <ul>
          <p>Collected: ${data.mounts.numCollected}</p>
          ${output}
        </ul>`;
    };

  // Feed
  getFeed__PlayerOne(data) {
    let container = this.feedContainer;
    let output = '';

  
    data.feed.forEach((feed) => {

      if(feed.type === "LOOT") {
        let year = new Date(feed.timestamp);
        let month = new Date(feed.timestamp);
        let day = new Date(feed.timestamp);


        // Output
        output += `
          <li class="feed-result__playerOne">
            <a target="_blank" class="q" href="//www.wowhead.com/?item=${feed.itemId}" data-wowhead="item=${feed.itemId}"></a>
            <p class="date">${day.getDate()}/${month.getMonth()}/${year.getFullYear()}</p>
          </li>
        `;
        console.log(`<a href="//www.wowhead.com/item=${feed.itemId}" data-wowhead="item=${feed.itemId}">hai</a>`)
      }

      if(feed.type === "ACHIEVEMENT") {
        let year = new Date(feed.timestamp);
        let month = new Date(feed.timestamp);
        let day = new Date(feed.timestamp);

        output += `
          <li class="feed-result__playerOne">
          <a class="q1" target="_blank" href="//www.wowhead.com/achievement=${feed.achievement.id}"><img src="https://wow.zamimg.com/images/wow/icons/large/${feed.achievement.icon}.jpg"></a>
            <p class="date">${day.getDate()}/${month.getMonth()}/${year.getFullYear()}</p>
          </li>
        `;
      }
    });

    container.innerHTML = `
      <ul>
        ${output}
      </ul>
    `;
    $WowheadPower.refreshLinks();
  }


    errorMessage(msg, color) {
      let errContainer = this.errContainer;
      
      errContainer.style.color = color;
      errContainer.style.display = '';
      errContainer.textContent = msg;

      let spinner = this.spinner;
      spinner.style.display = 'none';
    }

    clearErr() {
      let errContainer = this.errContainer;

      errContainer.textContent = '';
      errContainer.style.display = 'none';
    }

}