require 'caliper'

module Events

  # Assessment Event docs: https://www.imsglobal.org/sites/default/files/caliper/v1p1/caliper-spec-v1p1/caliper-spec-v1p1.html#assessmentEvent
  # Required fields: id, type, actor, action, object, eventTime
  def self.assessmentProfileAssessmentItemEventCompleted

    # Create an event of the correct type and set the desired action
    event = Caliper::Events::AssessmentItemEvent.new
    event.action = Caliper::Actions::COMPLETED
    event.eventTime = Time.now.utc.iso8601

    # set the user by translating your user object to a Caliper Person
    my_app_user = User.current_user
    caliper_user = Caliper::Entities::Agent::Person.new(id: my_app_user.referencable_url, name: my_app_user.name)
    event.actor = caliper_user

    # set the object to target item, in this case a quiz question item
    my_app_quiz = Quiz.current_quiz
    item = my_app_quiz.quiz_item
    caliper_object = Caliper::Entities::Resource::AssessmentItem.new(id: item.referencable_url, name: item.name)
    event.object = caliper_object

    event
  end
end
