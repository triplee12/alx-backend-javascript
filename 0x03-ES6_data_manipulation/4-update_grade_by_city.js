function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students)) {
        // Return an empty array if the students parameter is not an array
        return [];
    }

    return students
    .filter((student) => student.location === city)
    .map((student) => {
        const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
        const grade = gradeObj ? gradeObj.grade : 'N/A';
        return { ...student, grade };
    });
}

export default updateStudentGradeByCity;