function getStudentIdsSum(students) {
    if (!Array.isArray(students)) {
        // Return 0 if the students parameter is not an array
        return 0;
    }

    return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;