get '/api/producer/profiles' do
  content_type :json
  File.read(File.join(File.dirname(__FILE__), "profiles.json"))
end

get '/api/producer/defaults' do
  content_type :json

  {
          user: User.defaults,
          page: ContentPage.defaults,
          quiz: Quiz.defaults,
          item: QuizItem.defaults
  }.to_json
end

post '/api/producer/send_event' do
  content_type :json
  params = JSON.parse(request.body.read)
  event = params["event"]
  creds = params["credentials"]

  method = Events::find_event(event["profile"], event["event"], event["action"])
  halt 404 unless method

  caliper_event = Events.send(method, params)

  options = Caliper::Options.new
  sensor = Caliper::Sensor.new('https://example.edu/sensors/1', options)
  requestor = Caliper::Request::HttpRequestor.new({'host' => creds["endpointUrl"], 'auth_token' => creds["apiToken"]})
  json_payload = requestor.generate_payload(sensor, caliper_event)

  requestor.send(sensor, caliper_event)

  pretty_json(json_payload)
end
