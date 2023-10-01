// function age() {
//     var d1 = document.getElementById('date').value;
//     var m1 = document.getElementById('month').value;
//     var y1 = document.getElementById('year').value;

//     var date = new Date();
//     var d2 = date.getDate();
//     var m2 = 1 + date.getMonth();
//     var y2 = date.getFullYear();
//     var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     if(d1 > d2){
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1;
//     }
//     if(m1 > m2){
//     m2 = m2 + 12;
//     y2 = y2 - 1;
//     }
//     var d = d2 - d1;
//     var m = m2 - m1;
//     var y = y2 - y1;

//     document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
//     }


document.querySelector('.btn button').addEventListener('click', function(event) {
    event.preventDefault();

    const birthDay = parseInt(document.querySelector("#date").value);
    const birthMonth = parseInt(document.querySelector("#month").value);
    const birthYear = parseInt(document.querySelector("#year").value);

    
    if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear) || birthDay <= 0 || birthMonth <= 0 || birthYear <= 0) {
        alert('Invalid input. Please enter valid day, month, and year.');
        return;
    }

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    
    if (birthDate.getDate() !== birthDay || birthDate.getMonth() + 1 !== birthMonth || birthDate.getFullYear() !== birthYear) {
        alert('Invalid date. Please enter a valid date.');
        return;
    }

    // Calculate age
    const currentDate = new Date();
    const ageYear = currentDate.getFullYear() - birthYear;
    const ageMonth = currentDate.getMonth() - birthMonth + 1;
    const ageDay = currentDate.getDate() - birthDay;

    // Display the result
    const yearElement = document.querySelector('.result.year span');
    const monthElement = document.querySelector('.result.month span');
    const dayElement = document.querySelector('.result.day span');

    yearElement.textContent = ageYear ;
    monthElement.textContent = ageMonth ;
    dayElement.textContent = ageDay;
});
