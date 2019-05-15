
get '/api/meta/code/profile/:profile/event/:event/action/:action' do
  path = Events::find_event_file(params[:profile], params[:event], params[:action])

  halt 404 unless path

  File.read(path)
end


get '/api/meta/json/profile/:profile/event/:event/action/:action' do
  content_type :json

  method = Events::find_event(params[:profile], params[:event], params[:action])
  halt 404 unless method

  pretty_json(Events.send(method).to_json)
end
