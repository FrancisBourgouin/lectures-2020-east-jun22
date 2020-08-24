# Rails Review

## Today's menu
  - Review of the last week
  - Let's talk about MVC
  - Building a small app
  - Building an API
  - Active Storage, Action Cable & More

## Last Week Review
  - Liked the new syntax +1 +1 +1 +1
  - Liked the verbosity
  - New habits and way to work
  - Didn't like the ruby syntax +1
  - Missed the lectures +1 +1 +1 (Questions of others)
  - Liked the 'work way of learning' +1 +1 +1 +1 +1 +1
  - Loved ruby docs +1 +1
  - Not a ruby fan +1 +1 +1
  - Didn't like AR
  - Play with existing code
  - prefered_the_snake_case
  - hiccups with syntax
  - Versionning issues +1 +1

## Rails Libraries

- ActiveSupport -> a bunch of useful methods like:

  - changing words from singular to plural
  - changing camel case to snake case
  - better handling of time and date

- ActiveModel

  - Classes that models the data into Ruby objects
  - IOW, interface between tables in the db and Rails

- ActiveRecord

  - ORM
  - Interact with the database using Ruby objects and method
  - Add helpers for relationships, validations, callbacks, etc

- ActionMailer -> Send emails

- ActionPack -> Combination of Action Dispatch (parse requests), ActionController and ActionView

- ActionController ->

  - Controller, a middleman between models and views
  - Concerned with communicating with the database and performing CRUD actions
  - [Action Controller Documentation](https://guides.rubyonrails.org/action_controller_overview.html)

- ActionView

  - Rendering of ERB template files
  - Provides a number of helpers to avoid clutter (partials, asset tag helpers, date helpers, form helpers, etc.)
  - [Action View Documentation](https://guides.rubyonrails.org/action_view_overview.html)

- ActionCable -> WebSocket - Real-Time Communication
- Gems -> extend functionality

## Let's talk about MVC 
  MVC
  - Model
  - View
  - Controller

  MVVM
  - Model
  - View
  - View
  - Model

A way to distribute distinct responsabilities of a web a app:

- Models -> classes provide interface to the data
- Views -> Rendering of the UI with the data
- Controllers -> respond to ressources

### Benefit

The main advantage of MVC is clear separation of concerns. We can more easily maintain our application.

### Controllers

- Controllers are getting request from the router and pulling data from the model and trigger the rendering of the view

### Models

- Provide an interface in object form between the app and the database

