class Quiz

  attr_accessor :id, :name

  def initialize(id=nil, name=nil)
    @id = id || '42'
    @name = name || 'Chapter 1 Quiz'
  end

  def referencable_url
    "https://imsglobal.org/quizzes/#{@id}"
  end

  def quiz_item
    QuizItem.current_quiz_item
  end

  def self.current_quiz
    Quiz.new
  end

end
