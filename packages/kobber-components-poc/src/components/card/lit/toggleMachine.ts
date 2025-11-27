// toggleMachine.ts
export class ToggleMachine {
  #state = false;
  #subscribers = new Set<() => void>();

  subscribe(fn: () => void) {
    this.#subscribers.add(fn);
    return () => this.#subscribers.delete(fn);
  }

  #notify() {
    for (const fn of this.#subscribers) fn();
  }

  toggle() {
    this.#state = !this.#state;
    this.#notify();
  }

  get state() {
    return this.#state;
  }
}
