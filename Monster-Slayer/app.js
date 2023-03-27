function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return { width: 0 + "%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return { width: 0 + "%" };
      }
      return { width: this.playerHealth + "%" };
    },
    ifSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    ifHeal() {
      return this.currentRound % 5 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "It's a draw";
      } else if (value <= 0) {
        this.winner = "Monster won the game";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "It's a draw";
      } else if (value <= 0) {
        this.winner = "Player won the game";
      }
    },
  },
  methods: {
    onPlayerAttack() {
      const attackValuePlayer = getRandomValue(8, 15);
      this.addLogMessage("Monster", "attack", attackValuePlayer);
      this.playerHealth -= attackValuePlayer;
    },
    onAttack() {
      this.currentRound++;
      const attackValueMonster = getRandomValue(5, 12);
      this.monsterHealth -= attackValueMonster;
      this.addLogMessage("Player", "attack", attackValueMonster);
      this.onPlayerAttack();
    },
    onSpecialAttack() {
      this.currentRound++;
      const attackValueMonster = getRandomValue(10, 25);
      this.monsterHealth -= attackValueMonster;
      this.addLogMessage("Player", "attack", attackValueMonster);
      this.onPlayerAttack();
    },
    onHeal() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.addLogMessage("Player", "heal", healValue);
      if (this.playerHealth + healValue >= 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
    },
    onSurrender() {
      this.winner = "Monster won the game";
      this.addLogMessage("Player", "surrender", 0);
    },
    onStartNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");
