// fold as the core support of List operations
const fold = (bags, fn, initial = undefined) => {
  const [head, ...tail] = bags
  return head ? fold(tail, fn, fn(initial, head)) : initial
};

// List operations
export class List {
  constructor(values = []) {
    this.values = values
  }

  foldl(reducer, initial = undefined) {
    return fold(this.values, reducer, initial)
  }

  push(item) {
    this.values = [...this.values, item]
    return this
  }

  filter(predicate) {
    return this.foldl(
      (result, item) => (predicate(item) && result.push(item)) || result,
      new List()
    )
  }

  length() {
    return this.foldl(acc => acc + 1, 0)
  }

  append(other) {
    return other.foldl((result, item) => result.push(item), this)
  }

  concat(others) {
    return others.foldl((result, other) => result.append(other), this)
  }

  foldr(fn, initial = undefined) {
    this.values = this.values.reverse()
    return this.foldl(fn, initial)
  }

  unshift(item) {
    this.values = [item, ...this.values]
    return this
  }
  reverse() {
    return this.foldl((result, item) => result.unshift(item), new List())
  }
  map(mapper) {
    return this.foldl((result, item) => result.push(mapper(item)), new List())
  }

}
