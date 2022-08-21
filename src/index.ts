import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([5, 4, 3, 2, 1, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaAyB');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-50);
linkedList.add(30);
linkedList.add(50);

linkedList.sort();
linkedList.print();
