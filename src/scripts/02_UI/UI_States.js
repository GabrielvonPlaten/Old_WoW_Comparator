class UI_State {
  constructor() {
    // Player 1
    this.stats_P1   = document.querySelector('.playerOne__baseStats');
    this.mounts_P1  = document.querySelector('.playerOne__mounts');
    this.gear_P1    = document.querySelector('.playerOne__gear');
    this.prog_P1    = document.querySelector('.playerOne__progress');
    this.feed_P1    = document.querySelector('.playerOne__feed');
    this.pets_P1    = document.querySelector('.playerOne__pets');

    // Player 2
    this.stats_P2   = document.querySelector('.playerTwo__baseStats');
    this.mounts_P2  = document.querySelector('.playerTwo__mounts');
    this.gear_P2    = document.querySelector('.playerTwo__gear');
    this.prog_P2    = document.querySelector('.playerTwo__progess');
    this.feed_P2    = document.querySelector('.playerTwo__feed');
    this.pets_P2    = document.querySelector('.playerTwo__pets');

    // Buttons
    this.btnMounts = document.querySelector('#js-mounts'),
    this.btnStats  = document.querySelector('#js-stats'),
    this.btnProg   = document.querySelector('#js-prog'),
    this.btnGear   = document.querySelector('#js-gear');
    this.btnFeed   = document.querySelector('#js-feed');
    this.btnPets   = document.querySelector('#js-pets');
  }

  showMounts() {
    if(this.btnMounts.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnGear.value = 'off';
      this.btnFeed.value = 'off';
      this.btnPets.value = 'off';
  
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.feed_P1.style.display = 'none';
      this.feed_P2.style.display = 'none';
      this.pets_P1.style.display = 'none';
      this.pets_P2.style.display = 'none';
  
      this.mounts_P1.style.display = 'block';
      this.mounts_P2.style.display = 'block';
      
      this.btnMounts.value = 'on';
    }
  };

  showStats() {
    if(this.btnStats.value === 'off') {
      this.btnProg.value = 'off';
      this.btnGear.value = 'off';
      this.btnMounts.value = 'off';
      this.btnFeed.value = 'off';
      this.btnPets.value = 'off';
  
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.feed_P1.style.display = 'none';
      this.feed_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';
      this.pets_P1.style.display = 'none';
      this.pets_P2.style.display = 'none';
      

      this.stats_P1.style.display = 'block';
      this.stats_P2.style.display = 'block';
      
      this.btnStats.value = 'on';
  
    }
  };

  showGear() {
    if(this.btnGear.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnMounts.value = 'off';
      this.btnFeed.value = 'off';
      this.btnPets.value = 'off';
  
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      this.feed_P1.style.display = 'none';
      this.feed_P2.style.display = 'none';
      this.pets_P1.style.display = 'none';
      this.pets_P2.style.display = 'none';
      
      this.gear_P1.style.display = 'block';
      this.gear_P2.style.display = 'block';
      
      this.btnGear.value = 'on';
  
    }
  }


  showProg() {
    console.log('Prog!')
  };

  showPets() {
    if(this.btnPets.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnMounts.value = 'off';
      this.btnFeed.value = 'off';
      this.btnGear.value = 'off';
  
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      this.feed_P1.style.display = 'none';
      this.feed_P2.style.display = 'none';
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      
      this.pets_P1.style.display = 'block';
      this.pets_P2.style.display = 'block';
      
      this.btnPets.value = 'on';
  
    }
  }

  showFeed() {
    if(this.btnFeed.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnMounts.value = 'off';
      this.btnGear.value = 'off';
      this.btnPets.value = 'off';
  
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.pets_P1.style.display = 'none';
      this.pets_P2.style.display = 'none';

      this.feed_P1.style.display = 'block';
      this.feed_P2.style.display = 'block';

      
      this.btnFeed.value = 'on';
    }
  }
}