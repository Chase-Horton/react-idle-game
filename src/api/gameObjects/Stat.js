//Object for keeping track of the requirements to unlock
class Stat {
  constructor(startCap, requirements, produces, storage){
    this.startCap = startCap;
    this.requirements = requirements;
    this.produces = produces;
    this.storage = storage;
  }
}