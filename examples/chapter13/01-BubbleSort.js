const { bubbleSort } = PacktDataStructuresAlgorithms;

function RunBubbleSort(){
  var valuepicked = document.getElementById('numberOfValues').value;
  if (valuepicked > 0) {
      const array = bubbleSort(createNonSortedArray(valuepicked));
      console.log(array);
  } else {
    console.error("");
    alert("invalid input");
  }
} 

function createNonSortedArray(){
  var array = [];
  for (let i = 5; i > 0; i--){
      array.push(i);
  }
  return array;
}

function createNonSortedArray(Parameter){
  var array = [];
  for (let i = Parameter; i > 0; i--){
      array.push(i);
  }
  return array;
}


const array = bubbleSort(createNonSortedArray());
console.log(array);
