export class BankAccount {
  amount
  opened
  constructor() {
    this.amount = 0
    this.opened = false
  }

  open() {
    if (this.opened) throw new ValueError()
    this.opened = true
  }

  close() {
    if (!this.opened) throw new ValueError()
    this.opened = false
    this.amount = 0
  }

  deposit(amount) {
    if (!this.opened || amount < 0 ) throw new ValueError()
    this.amount += amount
  }

  withdraw(amount) {
    if (!this.opened || amount > this.amount || amount < 0 ) throw new ValueError()
    this.amount -= amount
  }

  get balance() {
    if (!this.opened) throw new ValueError()
    return this.amount
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
