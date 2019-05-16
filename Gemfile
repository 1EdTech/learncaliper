source 'https://rubygems.org'

ruby '2.6.1'

gem 'puma'
gem 'sinatra'
gem 'sinatra-contrib'
gem 'redis'

git 'https://github.com/IMSGlobal/caliper-ruby.git', branch: 'develop' do
  gem 'ims_caliper'
end

group :development do
  # irb is not bundled with ruby 2.6+, so add for development convenience
  gem 'irb', require: false
  gem 'shotgun'
end
