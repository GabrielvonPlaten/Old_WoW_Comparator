class UI_State {
  constructor() {
    // Player 1
    this.stats_P1   = document.querySelector('.playerOne__baseStats');
    this.mounts_P1  = document.querySelector('.playerOne__mounts');
    this.gear_P1    = document.querySelector('.playerOne__gear');
    this.prog_P1    = document.querySelector('.playerOne__progress');

    // Player 2
    this.stats_P2   = document.querySelector('.playerTwo__baseStats');
    this.mounts_P2  = document.querySelector('.playerTwo__mounts');
    this.gear_P2    = document.querySelector('.playerTwo__gear');
    this.prog_P2    = document.querySelector('.playerTwo__progess');

    // Buttons
    this.btnMounts = document.querySelector('#js-mounts'),
    this.btnStats  = document.querySelector('#js-stats'),
    this.btnProg   = document.querySelector('#js-prog'),
    this.btnGear   = document.querySelector('#js-gear');
  }

  showMounts() {
    if(this.btnMounts.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnGear.value = 'off';
  
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
  
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
  
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';

      this.stats_P1.style.display = 'block';
      this.stats_P2.style.display = 'block';
      
      this.btnStats.value = 'on';
  
    }
  };

  showFeed() {
    if(this.btnFeed.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnGear.value = 'off';
      this.btnMounts.value = 'off';
  
      this.gear_P1.style.display = 'none';
      this.gear_P2.style.display = 'none';
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';

      
      this.btnFeed.value = 'on';
  
    }
  }

  showGear() {
    if(this.btnGear.value === 'off') {
      this.btnStats.value = 'off';
      this.btnProg.value = 'off';
      this.btnMounts.value = 'off';
  
      this.prog_P1.style.display = 'none';
      this.prog_P2.style.display = 'none';
      this.mounts_P1.style.display = 'none';
      this.mounts_P2.style.display = 'none';
      this.stats_P1.style.display = 'none';
      this.stats_P2.style.display = 'none';
      
      this.gear_P1.style.display = 'block';
      this.gear_P2.style.display = 'block';
      
      this.btnGear.value = 'on';
  
    }
  }


  showProg() {
    console.log('Prog!')
  };
}