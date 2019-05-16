

post "/api/consumer/:session_id" do
  halt 500 unless params[:session_id]
  key = "events_#{params[:session_id]}"

  #todo check the auth header just cuz
  #todo validate the events at least a little?
  # todo push the event into the redis queue
  event = JSON.parse(request.body.read)

  puts "pushing on key: #{key}"
  REDIS.lpush key, event.to_json

  "ok"
end

get "/api/consumer/:session_id" do
  redis.lrange
end
