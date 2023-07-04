function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
        // Return an empty array if the students parameter is not an array
        return [];
    }

    return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;