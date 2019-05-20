
class Model
  attr_accessor :id, :name

  def initialize(opts={})
    @id = opts["id"]
    @name = opts["name"]
  end

  def model_name
    "stuff"
  end

  def referencable_url
    "https://imsglobal.org/#{model_name}/#{@id}"
  end

  def self.defaults
    {
            "id" => "4",
    }
  end

  def self.current(opts={})
    self.new(defaults.merge(opts || {}))
  end

end

Dir[File.join(__dir__, '*.rb')].each { |file| require file }
