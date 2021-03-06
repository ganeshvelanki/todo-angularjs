angular.module('todoApp').controller('TasksController', ['$scope', 
function ($scope) {
  
  $scope.vm = {};

  $scope.vm.taskName = null;

  $scope.vm.tasks = [];

  $scope.vm.addTask = function addTask() {
    if($scope.vm.taskName) {
      $scope.vm.tasks.push($scope.vm.taskName);
      $scope.vm.taskName = null;
    }
  };
  $scope.vm.removeTask=function removeTask(taskName){
    if(taskName) {
      $scope.vm.tasks.splice(tasks.indexOf(taskName), 1);
    }
  }
}]);