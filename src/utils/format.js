const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
  ]
  
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
  
    // Funcionalidades
    
  function getSubjects(subjectNumber) {
      const position = +subjectNumber -1
      return subjects[position]
    }
  
    function convertHoursToMinutes(time) {
        const [ hour, minutes ] = time.split(":")
        return Number((hour * 60) + minutes)
      }

      // Exportando os arrays acima para ser utilizado em server.js
      module.exports = {
        subjects,
        weekdays,
        getSubjects,
        convertHoursToMinutes
      }