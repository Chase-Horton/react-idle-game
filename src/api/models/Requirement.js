//Items passed in will be the type of requirement, AMOUNT needed, and a list of the amt the player has of each item
//unit, must have amt of units described by amounts
//building, must have amt of buildings described by amounts
//mutation, must have mutation described by amounts
//combination, must have amounts of items as described by amounts and items
//resource, must have amount of resources >= type
//buildingType, have certain amount of buildings of a type ?

class Requirement {
  constructor(type, amounts, items) {
    this.type = type;
    this.amounts = amounts;
    this.items = items;
  }
}

export default Requirement;
