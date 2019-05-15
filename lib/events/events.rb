module Events

  def self.file_path(name)
    File.join(File.dirname(__FILE__), name)
  end

  def self.find_event(profile, event, action)
    method_name = profile + action

    Events.respond_to?(method_name) ? method_name : nil
  end

  def self.find_event_file(profile, event, action)
    method = find_event(profile, event, action)

    method ? Events.method(method).source_location[0] : nil
  end
end

require_relative 'reading_navigated_to'
require_relative 'reading_viewed'
