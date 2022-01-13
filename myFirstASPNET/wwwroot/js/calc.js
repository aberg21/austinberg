const getResult = () => {
    
    var Assignments = $('#txtAssnt').val() * 0.55);
    var GroupProjects = $('#txtGP').val() * 0.05);
    var Quizzes = $('#txtQZ').val() * 0.10);
    var Exams = $('#txtEX').val() * 0.20);
    var INTEX = $('#txtINTEX').val() * 0.10);
    grades = "";

    }
    var total = (Assignments) + (GroupProjects) + (Quizzes) + (Exams) + (INTEX);
    percentage = total

    if (percentage >= 94) {
        $("#grade").innerHTML = "A";
    }
    else if (percentage >= 90) {
        $("#grade").innerHTML = "A-";

    }
    else if (percentage >= 87) {
        $("#grade").innerHTML = "B+";

    }
    else if (percentage >= 84) {
        $("#grade").innerHTML = "B";

    }
    else if (percentage >= 80) {
        $("#grade").innerHTML = "B-";

    }
    else if (percentage >= 77) {
        $("#grade").innerHTML = "C+";

    }
    else if (percentage >= 74) {
        $("#grade").innerHTML = "C";

    }
    else if (percentage >= 70) {
        $("#grade").innerHTML = "C-";

    }
    else if (percentage >= 67) {
        $("#grade").innerHTML = "D+";

    }
    else if (percentage >= 64) {
        $("#grade").innerHTML = "D";

    }
    else if (percentage >= 60) {
        $("#grade").innerHTML = "D-";

    }
    
    else {
        $("#grade").innerHTML = "E";

    }


    percentage= $('#percentage').innerHTML;
    total = $('#total').innerHTML;
 
}