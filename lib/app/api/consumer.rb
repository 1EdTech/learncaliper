

def redis_key(params)
  "events_#{params[:session_id]}"
end


post "/api/consumer/events/:session_id" do
  halt 404 unless params[:session_id]
  key = redis_key(params)

  #todo check the auth header just cuz
  #todo validate the events at least a little?
  # todo push the event into the redis queue
  event = JSON.parse(request.body.read)

  puts "pushing on key: #{key}"
  REDIS.lpush key, event.to_json

  "ok"
end

get "/api/consumer/events/:session_id" do
  content_type :json
  halt 404 unless params[:session_id]
  key = redis_key(params)

  events = REDIS.lrange(key, 0,19) || []

  {events: events.map{|e| JSON.parse(e) }}.to_json
end
