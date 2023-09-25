$(document).ready(function () {
    $("#registerbtn").on("click", function (e) {
        e.preventDefault();
        location.href = "/register";
    })

    $("#registerBtn").on("click", function (e) {
        e.preventDefault();
        // var usignatureFiles = $("#usignature")[0].files;
        var myData = new FormData(this.form);

        // for (var i = 0; i < usignatureFiles.length; i++) {
        //     myData.append("usignature", usignatureFiles[i]);
        // }
        // for (const entry of myData.entries()) {
        //     console.log(entry[0], entry[1]);
        // }
        $.ajax({
            url: "/registerData",
            method: "POST",
            data: myData,
            processData: false,
            contentType: false,
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                var errors = error.responseJSON["errors"];
                console.log(errors.length);
                for (i = 0; i < errors.length; i++) {
                    $("#err_" + errors[i].path).text("*" + errors[i].msg);
                }
            }
        })
    })


})