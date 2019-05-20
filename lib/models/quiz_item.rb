class QuizItem < Model

  def model_name
    "items"
  end

  def self.defaults
    {
            "id" => "24",
            "name" => "Question 1"
    }
  end

end
