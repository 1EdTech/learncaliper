module Events

  def self.file_path(name)
    File.join(File.dirname(__FILE__), name)
  end

  def self.find_event(profile, event, action)
    long_name = profile + event + action
    short_name = profile + action

    if Events.respond_to?(long_name)
      long_name
    elsif Events.respond_to?(short_name)
      short_name
    else
      nil
    end
  end

  def self.find_event_file(profile, event, action)
    method = find_event(profile, event, action)

    method ? Events.method(method).source_location[0] : nil
  end
end

Dir[File.join(__dir__, '*.rb')].each { |file| require file }
