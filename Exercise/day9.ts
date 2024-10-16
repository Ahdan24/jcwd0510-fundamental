/* 
      You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
      you can perform operations such as adding customers to the queue, calling the next customer, and 
      counting the number of customers in the queue.
  
     constructor:
     - this.queue
  
     method : 
     - enqueue : menambahkan value baru dalam antrian
     - dequeue : menghilangkan value paling depan dalam antrian
     - size : melihat jumlah antrian saat ini
  */

class BankQueue {
  private queue: any[]; // iniliasi queue

  constructor() {
    this.queue = [];
  }

  // menambahkan costumer ke antrian dengan mengguanakan.push
  enqueue(value: any): void {
    this.queue.push(value);
  }

  // menghilangkan value paling depan dalam antrian
  dequeue(): any {
    if (this.queue.length === 0) {
      return null; // null digunakan jika antrian kosong akan dikembalikan ke null
    }
    return this.queue.shift(); // .shift berguna untuk menghapus antrian
  }

  size(): number {
    return this.queue.length; // mengembalikan jumlah antrian saat ini
  }
}

const bankQueue = new BankQueue();

bankQueue.enqueue("Customer 1");
bankQueue.enqueue("Customer 2");

console.log(bankQueue.size());
console.log(bankQueue.dequeue());
console.log(bankQueue.size());

bankQueue.enqueue("Customer 3");

console.log(bankQueue.size());
console.log(bankQueue.dequeue());
console.log(bankQueue.dequeue());
console.log(bankQueue.size());

/* 
      You are given a JavaScript class called Train that simulates a train's passenger management system. 
      The Train class has the following methods and properties:
  
      - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
      capacity of 10 passengers.
      - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
      and false otherwise.
      - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
      train is empty and false otherwise.
      - showPassenger(): Returns an object that contains the list of passengers on the train and 
      the remaining available seats.
      - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
      success" if the passenger is successfully added, "train full" if the train is at full capacity, 
      and "passenger already exists" if the passenger is already on the train.
      - passengerOut(name): Removes a passenger with the given name from the train. It returns 
      "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
      if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
      "passenger not found" if the passenger with the given name is not found on the train.
  */
class Train {
  container: string[];
  maxSize: number;

  constructor() {
    this.container = ["masinis"];
    this.maxSize = 5;
  }
  private isFull() {
    return this.container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.container.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.container
        .filter((value) => value != "masinis")
        .join(" , "),
      remainingSeat: this.maxSize - this.container.length
    };
  }

  passengerIn(name: string) {
    if (this.isFull()) {
      return "Train is full";
    }
    if (this.container.includes(name)) {
      return "Passenger already exist";
    }
    this.container.push(name);
    return "add passenger success";
  }

  passengerOut(name: string) {
    if (name === "masinis") {
      return "cannot remove masinis";
    }
    if (this.isEmpty()) {
      return "train is empty";
    }
    const index = this.container.indexOf(name);
    if (index === -1) {
      return "passenger not found";
    }
    this.container.splice(index, 1); 
    return "remove passenger succes"
  }

}

const taksaka = new Train();

console.log(taksaka.passengerIn("budi"));
console.log(taksaka.passengerIn("tono"));
console.log(taksaka.passengerIn("anto"));
console.log(taksaka.passengerIn("siti"));
console.log(taksaka.passengerIn("jono"));
console.log(taksaka.passengerIn("jono2"));
console.log(taksaka.passengerIn("jono3"));

console.log(taksaka.showPassenger());

console.log(taksaka.passengerOut("budi"));
console.log(taksaka.showPassenger());








