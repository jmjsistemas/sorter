/*
dev sane @ jmj
github @codersquirrel
@jmjsistemas
*/
function ctrl($scope) {
    $scope.sort = function () {
        try {
            var config1 = JSON.parse($scope.config);
        }
        catch (err) {
            console.log(err);
            alert("Error while parsing consifg1, see console")
            return;
        }
        var extensions1 = config1.extensions.toString().split(',');
        extensions1.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
        config1.extensions = extensions1;
        var components1 = config1.components.toString().split(',');
        components1.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
        config1.components = components1;
        $scope.sorted = config1;
    };
}
