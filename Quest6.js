class Player{
     constructor(){
        this.armor=0;
        this.health=0;
        this.name=0;
        this.weapon=0;
     }
     setArmor(newArmor){
        this.armor=newArmor;
     }
     getArmor(){
        return this.armor
     }
     setHealth(newHealth){
        this.health=newHealth;
     }
     getHealth(){
        return this.health
     }
     setName(newName){
        this.name=newName;
     }
     
     getName(){
        return this.name
     }
     setWeapon(newWeapon){
        this.weapon=newWeapon
     }
     getWeapon(){
        return this.weapon
     }


}

const armor = new Player()
armor.setArmor(1);
console.log("Armor Used = " + armor.getArmor());

const health = new Player()
health.setHealth(100);
console.log("Health Level = " + health.getHealth());

const ezio = new Player()
ezio.setName("Ezio Auditore");
console.log("Player's Name = " + ezio.getName());

const spear = new Player()
spear.setWeapon(1);
console.log("Weapon used = " + spear.getWeapon());
