class Game {
  //add logic to see if save exists and load that save instead
  constructor(json) {
    //Check if user has played before, if they have not set first played
    //And set this.tutorial to true to trigger tutorial after game setup
    if (json.general.first_played != null) {
      this.first_played = json.general.first_played;
      this.tutorial = false;
    } else {
      this.first_played = Date.now();
      this.tutorial = true;
    }

    //Set starting stage to loaded stage, and loading resources
    this.stage = json.general.stage;
    this.resources = json.resources;
    if (!this.tutorial) {
      this.buildings = json.buildings;
      this.upgrades = json.upgrades;
      this.mutations = json.mutations;
      this.achievements = json.achievements;
    }
  }
}
export default Game;
