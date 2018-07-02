class UI__PlayerTwo {
  constructor() {
    this.avatarImage = document.querySelector('#UI-avatar__playerTwo');
    this.statsContainer = document.querySelector('#UI-mainStats__playerTwo');
    this.mountsContainer = document.querySelector('#UI-mounts__playerTwo');
    this.gearContainer = document.querySelector('#UI-gear__playerTwo');
    this.feedContainer = document.querySelector('#UI-feed__playerTwo');
    this.progContainer = document.querySelector('#UI-progress__playerTwo');

    this.errContainer = document.querySelector('#UI-error__playerTwo');

    this.spinner = document.querySelector('#UI-spinner__PlayerTwo');

  }
  loading() {
    let spinner = this.spinner;

    spinner.style.display = 'block';
  }

  avatar__PlayerTwo(data) {
    let spinner = this.spinner;
    let avatarContainer = this.avatarImage;
    let output = '';

    output += `
      <img src=http://render-eu.worldofwarcraft.com/character/${data.thumbnail}>
      <br>
      <h2>Level: ${data.level} - ${data.name}</h2>
    `;

    avatarContainer.innerHTML = output;
    spinner.style.display = 'none';
    this.clearErr();
  }

  

  baseStats__PlayerTwo(data) {
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

  getMounts__PlayerTwo(data) {
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
  getFeed__PlayerTwo(data) {
    let container = this.feedContainer;
    let output = '';

  
    data.feed.forEach((feed) => {

      if(feed.type === "LOOT") {
        let year = new Date(feed.timestamp);
        let month = new Date(feed.timestamp);
        let day = new Date(feed.timestamp);


        // Output
        output += `
          <li class="feed-result__playerTwo">
            <a target="_blank" class="q" href="//www.wowhead.com/?item=${feed.itemId}" data-wowhead="item=${feed.itemId}"></a>
            <p class="date">${day.getDate()}/${month.getMonth()}/${year.getFullYear()}</p>
          </li>
        `;
      }

      if(feed.type === "ACHIEVEMENT") {
        let year = new Date(feed.timestamp);
        let month = new Date(feed.timestamp);
        let day = new Date(feed.timestamp);

        output += `
          <li class="feed-result__playerTwo">
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
    this.refreshLinks();
  }

  getGear__PlayerTwo(data) {
    let container = this.gearContainer;
    let output = '';

    output += `
      <li>${data.items.head.itemLevel}: Head<a href="//www.wowhead.com/item=${data.items.head.id}" class="q${data.items.head.quality} data-wowhead="ench=${data.items.head.tooltipParams.enchant}"></a></li>
      <li>${data.items.neck.itemLevel}: Neck<a href="//www.wowhead.com/item=${data.items.neck.id}" class="q${data.items.neck.quality}"></a></li>
      <li>${data.items.shoulder.itemLevel}: Shoulder<a href="//www.wowhead.com/item=${data.items.shoulder.id}" class="q${data.items.shoulder.quality} data-wowhead="ench=${data.items.shoulder.tooltipParams.enchant}"></a></li>
      <li>${data.items.back.itemLevel}: Back<a href="//www.wowhead.com/item=${data.items.back.id}" class="q${data.items.back.quality} data-wowhead="ench=${data.items.back.tooltipParams.enchant}"></a></li>
      <li>${data.items.chest.itemLevel}: Chest<a href="//www.wowhead.com/item=${data.items.chest.id}" class="q${data.items.chest.quality} data-wowhead="ench=${data.items.chest.tooltipParams.enchant}"></a></li>
      <li>${data.items.wrist.itemLevel}: Wrist<a href="//www.wowhead.com/item=${data.items.wrist.id}" class="q${data.items.wrist.quality} data-wowhead="ench=${data.items.wrist.tooltipParams.enchant}"></a></li>
      
      <br>
      <li>${data.items.hands.itemLevel}: Hands<a href="//www.wowhead.com/item=${data.items.hands.id}" class="q${data.items.hands.quality}" data-wowhead="ench=${data.items.hands.tooltipParams.enchant}"></a></li>
      <li>${data.items.waist.itemLevel}: Waist<a href="//www.wowhead.com/item=${data.items.waist.id}" class="q${data.items.waist.quality}"></a></li>
      <li>${data.items.legs.itemLevel}: Legs<a href="//www.wowhead.com/item=${data.items.legs.id}" class="q${data.items.legs.quality}"></a></li>
      <li>${data.items.feet.itemLevel}: Feet<a href="//www.wowhead.com/item=${data.items.feet.id}" class="q${data.items.feet.quality}"></a></li>
      <li>${data.items.finger1.itemLevel}: Ring<a href="//www.wowhead.com/item=${data.items.finger1.id}" class="q${data.items.finger1.quality}"></a></li>
      <li>${data.items.finger2.itemLevel}: Ring<a href="//www.wowhead.com/item=${data.items.finger2.id}" class="q${data.items.finger2.quality}"></a></li>
      <li>${data.items.trinket1.itemLevel}: Trinket<a href="//www.wowhead.com/item=${data.items.trinket1.id}" class="q${data.items.trinket1.quality}"></a></li>
      <li>${data.items.trinket2.itemLevel}: Trinket<a href="//www.wowhead.com/item=${data.items.trinket2.id}" class="q${data.items.trinket2.quality}"></a></li>

      <br>
      <li>${data.items.mainHand.itemLevel}: Main-Hand<a href="//www.wowhead.com/item=${data.items.mainHand.id}" class="q${data.items.mainHand.quality}"></a></li>
      <li>${data.items.offHand.itemLevel}: Off-Hand<a href="//www.wowhead.com/item=${data.items.offHand.id}" class="q${data.items.offHand.quality}"></a></li>
    `;

    container.innerHTML = `
      <ul>
        <p>iLvl: ${data.items.averageItemLevelEquipped}</p>
        ${output}
      </ul>
    `;
    this.refreshLinks();
    
  }

  // Error Message
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

  refreshLinks() {
    $WowheadPower.refreshLinks();
  }
}