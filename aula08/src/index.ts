import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: {_count: {id: "desc"}}
  })
  console.log(students);
})();

// SELECT COUNT(*), s."class" FROM students s
// WHERE s."jobId" is null
// GROUP BY s."class"
// ORDER BY COUNT(*) desc

(async () => {
  const studentsNoJob = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true},
    where: {jobId: null},
    orderBy: {_count : {id: "desc"}}
  })
  console.log(studentsNoJob)
})()