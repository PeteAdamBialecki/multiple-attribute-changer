window.onload = function () {

    var tablerow = document.body.getElementsByTagName('tr');
    console.log(tablerow);

    // Convert the HTMLCollection into a true javascript Array, so we can do "stuff" with it       
    var tablerowArr = Array.prototype.slice.call(tablerow);
    console.log(tablerowArr);

    // Do stuff
    tablerowArr.forEach(function (value, i) {
        console.log(i, value);

        tablerow[i].onclick = function (e) {
            //console.log("clicked!");


            var newArr = tablerowArr.slice(i, i + 1);
            //console.log(tablerow);
            console.log(i);
            //console.log(tablerowArr);
            console.log('newArr', newArr);


            tablerowArr.forEach(function (value, i) {

                // first reset all instances of data-XXX  
                tablerowArr[i].setAttribute('data-display', "collapsed");
                // tablerowArr[i].setAttribute('data-state', "enabled");

                // Set the <tr> data-display attribute to expanded/collapsed on click
                newArr[0].setAttribute('data-display', tablerowArr[i].getAttribute('data-display') === "collapsed" ? "expanded" : "collapsed");
                //tablerowArr[i].setAttribute('data-display', tablerowArr[i].getAttribute('data-display') === "collapsed" ? "expanded" : "collapsed");

                // Set the <tr> data-state attribute to enabled/disabled on click
                newArr[0].setAttribute('data-state', newArr[0].getAttribute('data-state') === "disabled" ? "enabled" : "enabled");
                tablerowArr[i].setAttribute('data-state', newArr[0].getAttribute('data-state') === "enabled" ? "disabled" : "enabled");

            });

            e.preventDefault();
        };
    });
};
