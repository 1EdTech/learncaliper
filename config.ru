require './lib/app'

if ENV['APP_ENV'] == 'production'
  set :environment, 'production'
end

set :root, 'lib/app'
set :server, 'puma'

run Sinatra::Application
