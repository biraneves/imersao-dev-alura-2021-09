function averageGrade(gradesArray) {

    var sumGrades = 0.0;

    if (gradesArray.length === 0)
        return -1;
    
    for (var i = 0; i < gradesArray.length; i++) {

        sumGrades += gradesArray[i];

    }

    return sumGrades / gradesArray.length;

}

function calculateFinalGrade() {

    const passingGrade = 5.0;
    var grades = new Array();
    var finalGrade = 0.0;
    var i = 1;

    for (i = 1; i <= 6; i++) {

        if (document.getElementById("grade_" + i).value != "") {

            grades.push(parseFloat(document.getElementById("grade_" + i).value));

        }

    }

    finalGrade = averageGrade(grades);

    if (finalGrade >= 0) {

        var fixedGrade = finalGrade.toFixed(1);

        document.getElementById("text-final-grade").innerHTML = 'Sua nota final é <span class="highlight">' + fixedGrade + 
            '</span>. Você foi <span class="highlight">' + (finalGrade >= passingGrade ? "APROVADO(A)" : "REPROVADO(A)") + "</span>!";

    } else {

        document.getElementById("text-final-grade").innerHTML = '<span class="highlight">Campos vazios ou notas inválidas.</span>';

    }

    document.getElementById("text-final-grade").style.display = "block";

}