
get '/api/meta/readfile' do
  File.read(__FILE__ )
end
