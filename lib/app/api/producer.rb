

get '/api/producer/oi' do
  "hey"
end


get '/api/producer/:event_name' do
  content_type :json

  event = view_event

  pretty_json(event.to_json)
end

