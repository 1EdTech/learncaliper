class User

  attr_accessor :id, :name

  def initialize(id=nil, name=nil)
    @id = id || '4'
    @name = name || 'Coquille'
  end

  def referencable_url
    "https://imsglobal.org/users/#{@id}"
  end

  def self.current_user
    User.new
  end

end
