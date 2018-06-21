class UI_State {
  constructor() {
    this.stats_P1   = document.querySelector('.playerOne__baseStats');
    this.mounts_P1  = document.querySelector('.playerOne__mounts');
    this.gear_P1    = document.querySelector('.playerOne__gear');
    this.feed_P1    = document.querySelector('.playerOne__feed');
    this.prog_P1    = document.querySelector('.playerOne__progress');

    this.stats_P2   = document.querySelector('.playerTwo__baseStats');
    this.mounts_P2  = document.querySelector('.playerTwo__mounts');
    this.gear_P2    = document.querySelector('.playerTwo__gear');
    this.feed_P2    = document.querySelector('.playerTwo__feed');
    this.prog_P2    = document.querySelector('.playerTwo__progess');

    this.btnFeed   = document.querySelector('#js-feed'),
    this.btnMounts = document.querySelector('#js-mounts'),
    this.btnStats  = document.querySelector('#js-stats'),
    this.btnProg   = document.querySelector('#js-prog'),
    this.btnGear   = document.querySelector('#js-gear');
  }


  showFeed() {
    console.log('Feed!')
  };

  showMounts() {
    if(this.btnMounts.value === 'off') {
      this.btnFeed.value = 'off';
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnGear.value = 'off';
  
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.feed_P1.style.display = 'none';
      this.feed_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
  
      this.mounts_P1.style.display = 'block';
      this.mounts_P2.style.display = 'block';
      
      this.btnMounts.value = 'on';
    }
  };

  showStats() {
    if(this.btnStats.value === 'off') {
      this.btnFeed.value = 'off';
      this.btnProg.value = 'off';
      this.btnGear.value = 'off';
      this.btnMounts.value = 'off';
  
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.feed_P1.style.display = 'none';
      this.feed_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';

      this.stats_P1.style.display = 'block';
      this.stats_P2.style.display = 'block';
      
      this.btnStats.value = 'on';
  
    }
  };


  showProg() {
    console.log('Prog!')
  };

  showGear() {
    console.log('Gear!')
  };
}