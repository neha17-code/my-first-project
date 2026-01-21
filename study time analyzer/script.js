let studyData = [];

function addStudyTime() {
    let subject = document.getElementById("subject").value.trim();
    let hours = parseFloat(document.getElementById("hours").value);

    if (subject === "" || isNaN(hours) || hours <= 0) {
        alert("Please enter valid subject name and hours");
        return;
    }

    studyData.push({ subject: subject, hours: hours });

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";

    updateDisplay();
}

function updateDisplay() {
    let totalHours = 0;
    let maxHours = 0;
    let topSubject = "None";

    let list = document.getElementById("subjectList");
    list.innerHTML = "";

    for (let i = 0; i < studyData.length; i++) {
        totalHours += studyData[i].hours;

        if (studyData[i].hours > maxHours) {
            maxHours = studyData[i].hours;
            topSubject = studyData[i].subject;
        }

        let li = document.createElement("li");
        li.textContent = studyData[i].subject + " - " + studyData[i].hours + " hours";
        list.appendChild(li);
    }

    document.getElementById("totalTime").textContent =
        "Total Study Time: " + totalHours + " hours";

    document.getElementById("topSubject").textContent =
        "Most Studied Subject: " + topSubject;
}
