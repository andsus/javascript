export class BankAccount {
  amount
  isOpen
  constructor() {
    this.amount = 0
    this.isOpen = false
  }

  open() {
    if (this.isOpen) throw new ValueError()
    this.isOpen = true
  }

  close() {
    if (!this.isOpen) throw new ValueError()
    this.isOpen = false
    this.amount = 0
  }

  deposit(amount) {
    if (!this.isOpen || amount <= 0 ) throw new ValueError()
    this.amount += amount
  }

  withdraw(amount) {
    if (!this.isOpen || amount > this.amount || amount <= 0 ) throw new ValueError()
    this.amount -= amount
  }

  get balance() {
    if (!this.isOpen) throw new ValueError()
    return this.amount
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
