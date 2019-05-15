

get '/api/producer/profiles' do
  content_type :json
  File.read(File.join(File.dirname(__FILE__ ), "profiles.json"))
end

