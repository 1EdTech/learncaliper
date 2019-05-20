class Quiz < Model

  def model_name
    "quizzes"
  end

  def self.defaults
    {
            "id" => "42",
            "name" => "Chapter 1 Quiz"
    }
  end

  def quiz_item(opts={})
    QuizItem.current(opts)
  end

end
