require 'sinatra'
require 'json'
require 'redis'

require_relative  'models/models'
require_relative  'events/events'

if settings.development?
  set :use_hot_load, true
  set :hot_load_url, 'http://localhost:8080/bundle.js'
else
  set :use_hot_load, false
end

def api_url
  #request.env["HTTP_HOST"]
  "/api/"
end

def new_session_id
  "oi"
end

REDIS = Redis.new

def pretty_json(json)
  JSON.pretty_generate(JSON.parse(json))
end

# root route to setup front-end client app
# This will match all routes except the API routes
# This allows the React client app to load and handle the routing
get "/" do
  @session_id = new_session_id
  render :erb, :index
end

get "/sendevents/:session_id" do
  @session_id = params[:session_id]
  render :erb, :index
end

get "/receiveevents/:session_id" do
  @session_id = params[:session_id]
  render :erb, :index
end

# All Caliper event creation examples are here
require_relative 'app/api/producer'
require_relative 'app/api/consumer'
require_relative 'app/api/meta'
