/*=============Pending Request Table==========================*/
    
var clients = [
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 72, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 51, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 81, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": false },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true },
    { "Name": "Shubhajit Giri", "Age": 22, "Weight": 61, "Quantity": 2, "Eligable": true }
    
];

/*===========Pending Request Table ================================*/

$("#jsGrid2").jsGrid({
    height: "500px",
    width: "100%",

    autoload: true,
    selecting: false,

    //controller: db,
    data: clients,

    fields: [
        { name: "Name", type: "text", width: 100, validate: "required" },
        { name: "Age", type: "number", width: 20 },
        { name: "Weight", type: "number", width: 30},
        { name: "Quantity", type: "number", width:30 },
        { name: "Eligable", type: "checkbox",width:40, title: "Is Eligable", sorting: false },
        { type: "control" , width:40}
    ]
});


$("#sort").click(function() {
    var field = $("#sortingField").val();
    $("#jsGrid2").jsGrid("sort", field);
});
/*===========JsGrid sorting Table ================================*/



