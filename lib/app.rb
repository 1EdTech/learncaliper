require 'sinatra'
require 'json'

if settings.development?
  set :use_hot_load, true
  set :hot_load_url, 'http://localhost:8080/bundle.js'
else
  set :use_hot_load, false
end

def api_url
  #request.env["HTTP_HOST"]
  "/api/producer"
end

# root route to setup front-end client app
get '/' do
  render :erb, :index
end

# All Caliper event creation examples are here
require_relative 'app/api/producer'
