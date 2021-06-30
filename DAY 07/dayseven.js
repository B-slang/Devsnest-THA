// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

//  2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]


// first question
function myFunction(object) { 
  
    var text = "";
    var x;
    for (x in object) {
      text += x + ",";
      }
     return text
  }
  myFunction({ name : "David Rayy", sclass : "VI", rollno : 12 });
//   second question
function deleterollno(object) {
    delete object.rollno;
}
deleterollno({ name : "David Rayy", sclass : "VI", rollno : 12 });
// third question
function myFunction(object) { 
  
    var text = 0;
    for (var x in object) {
      text += 1;
      }
     return text
  }
  myFunction({ name : "David Rayy", sclass : "VI", rollno : 12 });
//   fourth question
function myFunction(object) { 
    //   console.log(object)
      var text = "";
      var x;
      for (x in object) {
        text += object[x] + " ,";
    //     console.log(object[x])
        }
       return text
    }
    var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
    for (var x in library){
      console.log(myFunction(library[x]));
// fifth question
function myFunction(object) { 
    var volume=(22/7)*object.radius**2*object.height;
    console.log(volume.toFixed(4));
  }
  myFunction({radius:10,height:15})
// sixth question
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort(function (obj1, obj2) {
    return obj1["libraryID"] - obj2["libraryID"];
});
console.log(library);