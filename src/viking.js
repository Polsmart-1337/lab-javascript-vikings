// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength;            
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage //veut dire --> this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength, name)
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 1) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {    
    constructor(){
    this.vikingArmy = []
    this.saxonArmy = []    
    }

    addViking(Viking){  
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]  
        
        const saxDamageReceive = saxon.receiveDamage(viking.attack())

        if (saxon.health <1){
            this.saxonArmy.splice(randomSaxon, 1)
        }

        return saxDamageReceive
        
    }
    saxonAttack(){  
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]  
        
        const vikDamageReceive = viking.receiveDamage(saxon.strength)

        if (viking.health <1){
            this.vikingArmy.splice(randomSaxon, 1)
        }

        return vikDamageReceive
    }

    showStatus(){
        if (this.vikingArmy.length = [""]){
            return ("Vikings have won the war of the century!")
        }
}
}

// const war = new War()
// const viking = new Viking("Ragnar", 100, 2)
// const vikingOdin = new Viking("Odin", 120, 5)
// const vikingIvar = new Viking("Ivar", 103, 7)

// const saxon = new Saxon(100, 2)
// const saxon1 = new Saxon(105, 4)
// const saxon2 = new Saxon(110, 8)

// war.addViking(viking)
// war.addViking(vikingOdin)
// war.addViking(vikingIvar)

// war.addSaxon(saxon)
// war.addSaxon(saxon1)
// war.addSaxon(saxon2)

// console.log(`vikings: ${war.vikingArmy}`)