class QuizItem

  attr_accessor :id, :name

  def initialize(id=nil, name=nil)
    @id = id || '24'
    @name = name || 'Question 1'
  end

  def referencable_url
    "https://imsglobal.org/quizzes/items/#{@id}"
  end

  def self.current_quiz_item
    QuizItem.new
  end

end
