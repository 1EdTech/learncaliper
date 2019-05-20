class User < Model

  def model_name
    "users"
  end

  def self.defaults
    {
            "id" => "4",
            "name" => "Coquilla"
    }
  end

end
