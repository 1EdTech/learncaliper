require 'sinatra'

if ENV['APP_ENV'] == 'production'
  set :environment, 'production'
end

set :root, 'lib/app'
set :server, 'puma'

if settings.development?
  set :use_hot_load, true
  set :hot_load_url, 'http://localhost:8080/bundle.js'
else
  set :use_hot_load, false
end


get '/' do
  render :erb, :index
end

