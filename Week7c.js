class Warrior {

    constructor() {
        this.health = 0; 
        this.damage = 0;
    }


    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth(){
        return this.health;
    }
    setDamage(newDamage) {
        this.damage = newDamage;
    }
    getDamage() {
        return this.damage;
    }

}
  
const leviathan = new Warrior();
leviathan.setDamage(10);
leviathan.setHealth(100);
console.log("Leviathan's Stats:");
console.log(leviathan.getDamage());
console.log(leviathan.getHealth());

const behemoth = new Warrior();
behemoth.setDamage(15);
behemoth.setHealth(90);
console.log("Behemoth's Stats:");
console.log(behemoth.getDamage());
console.log(behemoth.getHealth());

const Thanos = new Warrior();
Thanos.setDamage(99);
Thanos.setHealth(100);
console.log("Thanos's Stats");
console.log(Thanos.getDamage());
console.log(Thanos.getHealth());







