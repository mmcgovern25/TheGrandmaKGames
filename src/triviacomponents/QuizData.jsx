function QuizData() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)

  const data = [
    {
      id: 1,
      question: "What year did grandma graduate high school?",
      answers: [
        {
          text: "1940",
          correct: false,
        },
        {
          text: "1930",
          correct: false,
        },
        {
          text: "1955",
          correct: false,
        },
        {
          text: "1958",
          correct: true,
        }
      ]
    }
  ]

}
