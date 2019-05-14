class ContentPage

  attr_accessor :id, :name

  def initialize(id=nil, name=nil)
    @id = id || '6'
    @name = name || 'Chapter 1 Reading'
  end

  def referencable_url
    "https://imsglobal.org/readings/#{@id}"
  end

  def self.current_page
    ContentPage.new
  end

end
