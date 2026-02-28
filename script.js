const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

let students = [];

// اضافه کردن دانشجو
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const major = document.getElementById('major').value.trim();

    if (name && major) {
        students.push({name, major, present: false}); // اضافه کردن دانشجو با وضعیت حضور
        form.reset();
        renderStudents();
    }
});

// نمایش دانشجویان
function renderStudents() {
    studentList.innerHTML = ''; // پاک کردن لیست قبلی

    students.forEach((student, index) => {
        const li = document.createElement('li');

        // متن دانشجو
        const studentText = document.createElement('span');
        studentText.textContent = `${index + 1}. ${student.name} - ${student.major}`;

        // چک‌باکس حضور و غیاب
        const attendance = document.createElement('input');
        attendance.type = 'checkbox';
        attendance.checked = student.present;
        attendance.addEventListener('change', () => {
            students[index].present = attendance.checked;
        });

        // دکمه حذف
        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', () => {
            students.splice(index, 1);
            renderStudents();
        });

        // اضافه کردن المان‌ها به لیست
        li.appendChild(studentText);
        li.appendChild(attendance);
        li.appendChild(deleteBtn);

        studentList.appendChild(li);
    });
}