import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floor = floors;
  }

  get floors() {
    return this._floors;
  }
  
  set floors() {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the NUMBER_OF_FLOORS floors`;
  }
}
