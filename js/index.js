const UIController = (function () {

    const btnMenuBar = document.getElementsByClassName("navbar-toggle")[0];
    const menuBar = document.getElementsByClassName("navbar-collapse scroll-nav clearfix")[0];

    return {
        btnMenuBar,
        menuBar
    };

})();

const Model = (function () {

    let toggleMenuBar = false;

    return [
        toggleMenuBar,
    ]

})();

const Controller = (function (UICtrl, Model) {

    UICtrl.btnMenuBar.addEventListener("click", function() {
        if (Model.toggleMenuBar === false) {
            UICtrl.menuBar.classList.remove("collapse");
            UICtrl.menuBar.classList.add("collapsing");
        }
        else {
            UICtrl.menuBar.classList.remove("collapsing");
            UICtrl.menuBar.classList.add("collapse");
        }
        Model.toggleMenuBar = !Model.toggleMenuBar;
    });


})(UIController, Model);

