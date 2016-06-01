angular.module('AudioCtrl',['ngAudio'])

.controller('AudioController',function($scope,ngAudio){
    // returns NgAudioObject
    $scope.sound = ngAudio.load('sounds/breeze.mp3');
    // plays the loaded sound
    $scope.play = ngAudio.play('sounds/breeze.mp3');
    // mutes sounds globally
    $scope.mute = ngAudio.mute('sounds/breeze.mp3');
});
