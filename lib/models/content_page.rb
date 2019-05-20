class ContentPage < Model

  def model_name
    "readings"
  end

  def self.defaults
    {
            "id" => "6",
            "name" => "Chapter 1 Reading"
    }
  end

end
