import React from "react"
import { makeAutoObservable } from "mobx"

var localCounter = null

// Model the application state.
class Counter {
    counter = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.counter += 1
    }

    reset() {
        this.counter = 0
    }
}

const getCounter = () => {
    if (!localCounter){
        localCounter = new Counter();
    }
    return localCounter;
}

export default getCounter;