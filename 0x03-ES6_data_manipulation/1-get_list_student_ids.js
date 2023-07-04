function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        // Return an empty array if the argument is not an array
        return [];
    }

    return students.map((student) => student.id);
}

export default getListStudentIds;