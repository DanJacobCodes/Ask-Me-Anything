import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Dan Jacob",
  content: "What programming language should I learn?",
  notes: "For a beginner"
}, {
  id: 2,
  author: "John Smith",
  content: "What is the latest trend in the tech industry?",
  notes: "How will it affect the world?"
]};

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
