class UI__PlayerTwo {
  constructor() {
    this.avatarImage = document.querySelector('#UI-avatar__playerTwo');
    this.statsContainer = document.querySelector('#UI-mainStats__playerTwo');
    this.mountsContainer = document.querySelector('#UI-mounts__playerTwo');
    this.gearContainer = document.querySelector('#UI-gear__playerTwo');
    this.feedContainer = document.querySelector('#UI-feed__playerTwo');
    this.progContainer = document.querySelector('#UI-progress__playerTwo');
    this.petsContainer = document.querySelector('#UI-pets__playerTwo');

    this.errContainer = document.querySelector('#UI-error__playerTwo');

    this.spinner = document.querySelector('#UI-spinner__PlayerTwo');

  }
  loading() {
    let spinner = this.spinner;

    spinner.style.display = 'block';
  }

  // Avatar
  avatar__PlayerTwo(data) {
    let spinner = this.spinner;
    let avatarContainer = this.avatarImage;
    let output = '';

    // The index of the variables classes and classColor are matched.
    let classes = ['', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Deathknight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demonhunter'];
    let classColor = ['', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569', '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9', '#00FF96', '#FF7D0A', '#A330C9'];
    let dynamicAvatarImage = `http://render-eu.worldofwarcraft.com/character/${data.thumbnail}`;
    let backdropAvatarImage = `https://us.battle.net/wow/static/images/2d/avatar/${data.race}-${data.gender}.jpg`;
    
    let classOutput = `<span style="color: ${classColor[data.class]}">${classes[data.class]}</span>`;
    
    // Output the rest of the player's information
    output += `
      <img src="${dynamicAvatarImage}" onerror="if (this.src != '${backdropAvatarImage}') this.src = '${backdropAvatarImage}';">
      <br>
      <h2>${data.name}</h2>
      <h2>Level: ${data.level} - ${classOutput}</h2>
    `;

    avatarContainer.innerHTML = output;
    spinner.style.display = 'none';
    this.clearErr();
  }

  // Base stats
  baseStats__PlayerTwo(data) {
    let statsContainer = this.statsContainer;
    let output = '';

    output += `
    <span class="baseStat">Base Stat</span>
    <ul>
      <li>Stamina<span class="statNumber">${data.stats.sta}</span></li>
      <li>Strength<span class="statNumber">${data.stats.str}</span></li>
      <li>Agility<span class="statNumber">${data.stats.agi}</span></li>
      <li>Intellect<span class="statNumber">${data.stats.int}</span></li>
      <li>Mastery<span class="statNumber">${data.stats.mastery}</span></li>
      <li>Versatility<span class="statNumber">${data.stats.versatility}</span></li>
      <li>Armor<span class="statNumber">${data.stats.armor}</span></li>
      <li>Haste<span class="statNumber">${data.stats.haste}</span></li>
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
    </ul>
    `;

    statsContainer.innerHTML = output;
    
    };

  // Mounts
  getMounts__PlayerTwo(data) {
    let container = this.mountsContainer;
    let output = '';

    data.mounts.collected.forEach((mount) => {
      if(mount.qualityId === 4) {
        output += `
        <li><span class="mounts--epic">${mount.name}</span><img src="https://wow.zamimg.com/images/wow/icons/large/${mount.icon}.jpg"></li>
        `;
      } else if(mount.qualityId === 3) {
        output += `
        <li><span class="mounts--rare">${mount.name}</span><img src="https://wow.zamimg.com/images/wow/icons/large/${mount.icon}.jpg"></li>
        `;
      } else if(mount.qualityId === 1) {
        output += `
        <li><span class="mounts--common">${mount.name}</span><img src="https://wow.zamimg.com/images/wow/icons/large/${mount.icon}.jpg"></li>
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
            <a class="q" href="//www.wowhead.com/?item=${feed.itemId}" data-wowhead="item=${feed.itemId}"></a>
            <p class="date">${day.getDate()}/${1 + (month.getMonth())}/${year.getFullYear()}</p>
          </li>
        `;
      }

      if(feed.type === "ACHIEVEMENT") {
        let year = new Date(feed.timestamp);
        let month = new Date(feed.timestamp);
        let day = new Date(feed.timestamp);

        output += `
          <li class="feed-result__playerTwo">
          <a class="q1" href="//www.wowhead.com/achievement=${feed.achievement.id}"><img src="https://wow.zamimg.com/images/wow/icons/large/${feed.achievement.icon}.jpg"></a>
            <p class="date">${day.getDate()}/${1 + (month.getMonth())}/${year.getFullYear()}</p>
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

  // Gear
  getGear__PlayerTwo(data) {
    let container = this.gearContainer;
    let output = '';
    let noGearFoundOutput = '<li style="color: #6a6a6a; text-align: right;">';

    if(data.items.head) {
      output +=
      `<li>Head: ${data.items.head.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.head.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.head.id}&bonus=${data.items.head.bonusLists[0]}:${data.items.head.bonusLists[1]}:${data.items.head.bonusLists[2]}:${data.items.head.bonusLists[3]}&ilvl=${data.items.head.itemLevel}" class="q${data.items.head.quality} data-wowhead="ench=${data.items.head.tooltipParams.enchant}"></a>
      </li>`
    } else {
      output += `${noGearFoundOutput}Head: None</li>`
    };

    if(data.items.neck) {
      output += `
      <li>Neck: ${data.items.neck.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.neck.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.neck.id}&bonus=${data.items.neck.bonusLists[0]}:${data.items.neck.bonusLists[1]}:${data.items.neck.bonusLists[2]}:${data.items.neck.bonusLists[3]}&ilvl=${data.items.neck.itemLevel}" class="q${data.items.neck.quality} data-wowhead="gems=${data.items.neck.tooltipParams.gem0}&amp;ench=${data.items.neck.tooltipParams.enchant}"></a>
      </li>`
    } else {
      output += `${noGearFoundOutput}Neck: None</li>`;
    };

    if(data.items.shoulder) {
      output += `
      <li>Shoulder: ${data.items.shoulder.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.shoulder.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.shoulder.id}&bonus=${data.items.shoulder.bonusLists[0]}:${data.items.shoulder.bonusLists[1]}:${data.items.shoulder.bonusLists[2]}:${data.items.shoulder.bonusLists[3]}&ilvl=${data.items.shoulder.itemLevel}" class="q${data.items.shoulder.quality} data-wowhead="ench=${data.items.shoulder.tooltipParams.enchant}"></a>
      </li>`
    } else {
      output += `${noGearFoundOutput}Shoulder: None</li>`;
    };

    if(data.items.back) {
      output += `
      <li>Back: ${data.items.back.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.back.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.back.id}&bonus=${data.items.back.bonusLists[0]}:${data.items.back.bonusLists[1]}:${data.items.back.bonusLists[2]}:${data.items.back.bonusLists[3]}&ilvl=${data.items.back.itemLevel}" class="q${data.items.back.quality} data-wowhead="ench=${data.items.back.tooltipParams.enchant}"></a>
      </li>`
    } else {
      output += `${noGearFoundOutput}Back: None</li>`;
    };

    if(data.items.chest) {
      output += `
      <li>Chest: ${data.items.chest.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.chest.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.chest.id}&bonus=${data.items.chest.bonusLists[0]}:${data.items.chest.bonusLists[1]}:${data.items.chest.bonusLists[2]}:${data.items.chest.bonusLists[3]}&ilvl=${data.items.chest.itemLevel}" class="q${data.items.chest.quality} data-wowhead="ench=${data.items.chest.tooltipParams.enchant}"></a>
      </li>`
    } else {
      output += `${noGearFoundOutput}Chest: None</li>`;
    };

    if(data.items.wrist) {

      output += `
      <li>Wrist: ${data.items.wrist.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.wrist.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.wrist.id}&bonus=${data.items.wrist.bonusLists[0]}:${data.items.wrist.bonusLists[1]}:${data.items.wrist.bonusLists[2]}:${data.items.wrist.bonusLists[3]}&ilvl=${data.items.wrist.itemLevel}" class="q${data.items.wrist.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Wrist: None</li>`;
    };

    // Separation -----------------------
    output += `<br>`;

    if(data.items.hands) {
      output += `
      <li>Hands: ${data.items.hands.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.hands.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.hands.id}&bonus=${data.items.hands.bonusLists[0]}:${data.items.hands.bonusLists[1]}:${data.items.hands.bonusLists[2]}:${data.items.hands.bonusLists[3]}&ilvl=${data.items.hands.itemLevel}" class="q${data.items.hands.quality}" data-wowhead="ench=${data.items.hands.tooltipParams.enchant}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Hands: None</li>`;
    };

    if(data.items.waist) {
      output += `
      <li>Waist: ${data.items.waist.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.waist.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.waist.id}&bonus=${data.items.waist.bonusLists[0]}:${data.items.waist.bonusLists[1]}:${data.items.waist.bonusLists[2]}:${data.items.waist.bonusLists[3]}&ilvl=${data.items.waist.itemLevel}" class="q${data.items.waist.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Waist: None</li>`;
    };

    if(data.items.legs) {
      output += `
      <li>Legs: ${data.items.legs.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.legs.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.legs.id}&bonus=${data.items.legs.bonusLists[0]}:${data.items.legs.bonusLists[1]}:${data.items.legs.bonusLists[2]}:${data.items.legs.bonusLists[3]}&ilvl=${data.items.legs.itemLevel}" class="q${data.items.legs.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Legs: None</li>`;
    };

    if(data.items.feet) {
      output += `
      <li>Feet: ${data.items.feet.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.feet.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.feet.id}&bonus=${data.items.feet.bonusLists[0]}:${data.items.feet.bonusLists[1]}:${data.items.feet.bonusLists[2]}:${data.items.feet.bonusLists[3]}&ilvl=${data.items.feet.itemLevel}" class="q${data.items.feet.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Feet: None</li>`;
    };

    if(data.items.finger1) {
      output += `
      <li>Ring: ${data.items.finger1.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.finger1.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.finger1.id}&bonus=${data.items.finger1.bonusLists[0]}:${data.items.finger1.bonusLists[1]}:${data.items.finger1.bonusLists[2]}:${data.items.finger1.bonusLists[3]}&ilvl=${data.items.finger1.itemLevel}" class="q${data.items.finger1.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Ring: None</li>`;
    };

    if(data.items.finger2) {
      output += `
      <li>Ring: ${data.items.finger2.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.finger2.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.finger2.id}&bonus=${data.items.finger2.bonusLists[0]}:${data.items.finger2.bonusLists[1]}:${data.items.finger2.bonusLists[2]}:${data.items.finger2.bonusLists[3]}&ilvl=${data.items.finger2.itemLevel}" class="q${data.items.finger2.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Ring: None</li>`;
    };

    if(data.items.trinket1) {
      output += `
      <li>Trinket: ${data.items.trinket1.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.trinket2.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.trinket1.id}&bonus=${data.items.trinket1.bonusLists[0]}:${data.items.trinket1.bonusLists[1]}:${data.items.trinket1.bonusLists[2]}:${data.items.trinket1.bonusLists[3]}&ilvl=${data.items.trinket1.itemLevel}" class="q${data.items.trinket1.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Trinket: None</li>`;
    };

    if(data.items.trinket2) {
      output += `
      <li>Trinket: ${data.items.trinket2.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.trinket2.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.trinket2.id}&bonus=${data.items.trinket2.bonusLists[0]}:${data.items.trinket2.bonusLists[1]}:${data.items.trinket2.bonusLists[2]}:${data.items.trinket2.bonusLists[3]}&ilvl=${data.items.trinket2.itemLevel}" class="q${data.items.trinket2.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Trinket: None</li>`;
    };

    output += `<br>`;

    if(data.items.mainHand) {
      output += `
      <li>Main-Hand: ${data.items.mainHand.itemLevel}
        <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.mainHand.icon}.jpg>
        <a href="//www.wowhead.com/item=${data.items.mainHand.id}&bonus=${data.items.mainHand.bonusLists[0]}:${data.items.mainHand.bonusLists[1]}:${data.items.mainHand.bonusLists[2]}:${data.items.mainHand.bonusLists[3]}&ilvl=${data.items.mainHand.itemLevel}" class="q${data.items.mainHand.quality}"></a>
      </li>`;
    } else {
      output += `${noGearFoundOutput}Main-Hand: None</li>`;
    };
        
    if(data.items.offHand) {
      output += `
        <li>Off-Hand: ${data.items.offHand.itemLevel}
          <img src=https://wow.zamimg.com/images/wow/icons/large/${data.items.offHand.icon}.jpg>
          <a href="//www.wowhead.com/item=${data.items.offHand.id}&bonus=${data.items.offHand.bonusLists[0]}:${data.items.offHand.bonusLists[1]}:${data.items.offHand.bonusLists[2]}:${data.items.offHand.bonusLists[3]}&ilvl=${data.items.offHand.itemLevel}" class="q${data.items.offHand.quality}"></a>
        </li>`
    } else {
      output += `${noGearFoundOutput}Off-Hand: None</li>`;
    };

    container.innerHTML = `
      <ul>
        <p>iLvl: ${data.items.averageItemLevelEquipped}</p>
        ${output}
      </ul>`;
      
    this.refreshLinks();
  }

  // Pets
  getPets__PlayerTwo(data) {
    let container = this.petsContainer;
    let output = '';
    let backdropPetImage = "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"; 

    data.pets.collected.forEach((pet) => {
      if(pet.qualityId === 3) {
        if(pet.isFavorite) {
          output += `
          <li>
            <div class="pets--rare"></div>
            <span>${pet.name} - LvL: ${pet.stats.level} <i class="fas fa-star"></i></span>
            <img src="https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg" onerror="if (this.src != '${backdropPetImage}') this.src = '${backdropPetImage}';">
          </li>
        `;
        } else {
          output += `
            <li>
              <div class="pets--rare"></div>
              <span>${pet.name} - LvL: ${pet.stats.level}</span>
              <img src="https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg" onerror="if (this.src != '${backdropPetImage}') this.src = '${backdropPetImage}';">
            </li>
          `;
        }
      } else if(pet.qualityId === 2) {
        if(pet.isFavorite) {
          output += `
            <li>
              <div class="pets--uncommon"></div>
              <span><span>${pet.name} - LvL: ${pet.stats.level} <i class="fas fa-star"></i></span>
              <img src="https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg" onerror="if (this.src != '${backdropPetImage}') this.src = '${backdropPetImage}';">
            </li>
          `;
        } else {
          output += `
          <li>
            <div class="pets--uncommon"></div>
            <span>${pet.name} - LvL: ${pet.stats.level}</span>
            <img src="https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg" onerror="if (this.src != '${backdropPetImage}') this.src = '${backdropPetImage}';">
          </li>
          `;
        }
      } else if(pet.qualityId === 1) {
        if(pet.isFavorite) {
          output += `
            <li>
              <div class="pets--common"></div>
              <span>${pet.name} - LvL: ${pet.stats.level} <i class="fas fa-star"></i></span>
              <img src="https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg" onerror="if (this.src != '${backdropPetImage}') this.src = '${backdropPetImage}';">
            </li>
          `; 
        } else {
          output += `
          <li>
            <div class="pets--common"></div>
            <span>${pet.name} - LvL: ${pet.stats.level}</span>
            <img src="https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg" onerror="if (this.src != '${backdropPetImage}') this.src = '${backdropPetImage}';">
          </li>
          `;
        }
      };
    });

    container.innerHTML = `
      <ul>
        <p>Collected: ${data.pets.numCollected}</p>
        ${output}
      </ul>`;
  }

  // Progression
  getProg__PlayerTwo(data) {
    let progContainer = this.progContainer;
    let output = '';

    data.progression.raids.forEach((raid) => {
      output += `
        <li class="playerTwo__progression__box">
          <h2 class="raid-name">${raid.name}</h2>
          <h4>LRF: ${raid.lfr} | Normal: ${raid.normal} | Heroic: ${raid.heroic} | Mythic: ${raid.mythic}</h4>
      `;
      
      output += '</li>';
    });

    progContainer.innerHTML = `
      <ul>
        ${output}
      </ul>
    `;
  };

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