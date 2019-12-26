class Goal {
  serialize() {
    return JSON.stringify(this);
  }
  static deserialize(jsonString) {
    const {
      name,
      currentAmount,
      desiredAmount,
      endDate,
      startDate
    } = JSON.parse(jsonString);
    return Object.assign(new Goal(), {
      name,
      currentAmount,
      desiredAmount,
      startDate: new Date(startDate),
      endDate: new Date(endDate)
    });
  }
  name = "";
  startDate = new Date();
  endDate = new Date();
  currentAmount = 0;
  desiredAmount = 1;
  constructor(name, startDate, endDate, currentAmount, desiredAmount) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.currentAmount = currentAmount;
    this.desiredAmount = desiredAmount;
  }

  get idealAmountPerDay() {
    return this.desiredAmount / this.daysBetweenStartAndEnd;
  }

  get idealAmountPerMonth() {
    return (this.idealAmountPerDay * 365) / 12;
  }

  get idealAmountPerFortnight() {
    return this.idealAmountPerDay * 14;
  }

  get daysBetweenStartAndEnd() {
    return (this.endDate - this.startDate) / 1000 / 60 / 60 / 24;
  }

  get daysBetweenCurrentAndEnd() {
    return (this.endDate - new Date()) / 1000 / 60 / 60 / 24;
  }

  get daysBetweenStartAndCurrent() {
    return (new Date() - this.startDate) / 1000 / 60 / 60 / 24;
  }

  get remainingAmount() {
    return this.desiredAmount - this.currentAmount;
  }

  get expectedAmountAsOfToday() {
    return this.idealAmountPerDay * this.daysBetweenStartAndCurrent;
  }

  get behindAmount() {
    return this.expectedAmountAsOfToday - this.currentAmount;
  }

  get percentDone() {
    return (100 * this.currentAmount) / this.desiredAmount;
  }

  get expectedPercentDone() {
    return (100 * this.expectedAmountAsOfToday) / this.desiredAmount;
  }
}

export default Goal;
