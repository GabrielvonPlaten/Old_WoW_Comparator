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

    getGear__PlayerOne(data) {
      let container = this.gearContainer;
      let output = '';

      output += `
        <ul>
          <li><a href="//www.wowhead.com/item=${data.items.head.id}" class="q${data.items.head.quality} data-wowhead="ench=${data.items.head.tooltipParams.enchant}"></a>${data.items.head.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.neck.id}" class="q${data.items.neck.quality} data-wowhead="gems=${data.items.neck.tooltipParams.gem0}&amp;ench=${data.items.neck.tooltipParams.enchant}"></a>${data.items.neck.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.shoulder.id}" class="q${data.items.shoulder.quality} data-wowhead="ench=${data.items.shoulder.tooltipParams.enchant}"></a>${data.items.shoulder.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.back.id}" class="q${data.items.back.quality} data-wowhead="ench=${data.items.back.tooltipParams.enchant}"></a>${data.items.back.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.chest.id}" class="q${data.items.chest.quality} data-wowhead="ench=${data.items.chest.tooltipParams.enchant}"></a>${data.items.chest.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.wrist.id}" class="q${data.items.wrist.quality} data-wowhead="ench=${data.items.wrist.tooltipParams.enchant}"></a>${data.items.wrist.itemLevel}</li>
          
          <br>
          <li><a href="//www.wowhead.com/item=${data.items.hands.id}" class="q${data.items.hands.quality}" data-wowhead="ench=${data.items.hands.tooltipParams.enchant}"></a>${data.items.hands.itemLevel} --- </li>
          <li><a href="//www.wowhead.com/item=${data.items.waist.id}" class="q${data.items.waist.quality}"></a>${data.items.waist.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.legs.id}" class="q${data.items.legs.quality}"></a>${data.items.legs.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.feet.id}" class="q${data.items.feet.quality}"></a>${data.items.feet.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.finger1.id}" class="q${data.items.finger1.quality}"></a>${data.items.finger1.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.finger2.id}" class="q${data.items.finger2.quality}"></a>${data.items.finger2.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.trinket1.id}" class="q${data.items.trinket1.quality}"></a>${data.items.trinket1.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.trinket2.id}" class="q${data.items.trinket2.quality}"></a>${data.items.trinket2.itemLevel}</li>

          <br>
          <li><a href="//www.wowhead.com/item=${data.items.mainHand.id}" class="q${data.items.mainHand.quality}"></a>${data.items.mainHand.itemLevel}</li>
          <li><a href="//www.wowhead.com/item=${data.items.offHand.id}" class="q${data.items.offHand.quality}"></a>${data.items.offHand.itemLevel}</li>
        </ul>
      `;

      container.innerHTML = output;
      console.log(data.items.head);
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