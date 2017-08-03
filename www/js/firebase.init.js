angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEKLlq2Ca4LZUoQ4XEuL1ZHhtIfWg8yQs",
    authDomain: "testproject2017-28c83.firebaseapp.com",
    databaseURL: "https://testproject2017-28c83.firebaseio.com",
    storageBucket: "testproject2017-28c83.appspot.com",
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/