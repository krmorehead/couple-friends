angular.module("coupleFriends.LoginController", [])

.controller("LoginController", function($scope, $interval){
  $scope.currentPhoto = "resources/doubleDating1.jpg"
  var currentPhotoIndex = 0;
  //maybe throw this into the node backend some how? start with a single image and then thrown the others across when the page is ready
  var photos = [
  "resources/doubleDating1.jpg",
  "resources/doubleDating2.jpg",
  "resources/doubleDating3.jpg",
  "resources/doubleDating4.jpg"
  ]

  $interval(function(){
    console.log ("testing", $scope.currentPhoto, currentPhotoIndex)
    if(currentPhotoIndex === photos.length - 1){
      currentPhotoIndex = 0
    } else {
      currentPhotoIndex++
    }
    $scope.currentPhoto = photos[currentPhotoIndex]
  }, 3000)
})