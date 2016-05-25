(function(){
    "use strict"
    angular
        .module('myApp')
        .controller("HomeController", HomeControllerFunc)
        .controller("AboutController", AboutControllerFunc)
        .controller("SecondController", SecondControllerFunc)
        .controller("SixthController", SixthControllerFunc)

        HomeControllerFunc.$inject = [];
        function HomeControllerFunc() {
            var vm = this;
        }

        AboutControllerFunc.$inject = [];
        function AboutControllerFunc() {
            var vm = this;
        }

        SecondControllerFunc.$inject = [];
        function SecondControllerFunc() {
            var vm = this;
            vm.myFunc = function(name) {
                if (name == 'language') {
                    vm.showLanguage = true;
                    vm.showVision = false;
                    vm.showHearing = false;
                    vm.showMotility = false;
                    console.log(name);
                } else if (name == 'vision') {
                    vm.showLanguage = false;
                    vm.showVision = true;
                    vm.showHearing = false;
                    vm.showMotility = false;
                    console.log(name);
                } else if (name == 'hearing') {
                    vm.showVision = false;
                    vm.showLanguage = false;
                    vm.showHearing = true;
                    vm.showMotility = false;
                    console.log(name);
                } else if (name == 'motility') {
                    vm.showVision = false;
                    vm.showLanguage = false;
                    vm.showHearing = false;
                    vm.showMotility = true;
                    console.log(name);
                }
            }
            vm.dragControlListeners = {
                containment: '#blocks' 
            };
            vm.items = {
            "columns": [
                    {"name": "Ideas", "cards": [
                      {"url": "img/j.png"},
                      {"url": "img/l.png"},
                      {"url": "img/d.png"},
                      {"url": "img/p.png"},
                      {"url": "img/m.png"}
                    ]},
                    {"name": "Not started", "cards": [
                      {"url": "img/dog.png"},
                      {"url": "img/pig.png"},
                      {"url": "img/lion.png"},
                      {"url": "img/monkey.png"},
                      {"url": "img/juice.png"}
                    ]}
                  ]
            }
        }

        SixthControllerFunc.$inject = [];
        function SixthControllerFunc() {
            var vm = this;
        }
})();
